/**
 * @file auth.service.ts (REFACTORIZADO v2 - Soft Validation + Public Register estructurado)
 *
 * CAMBIOS DE SEGURIDAD APLICADOS EN ESTA ITERACIÓN:
 * ─────────────────────────────────────────────────────────────────────────────
 * [FIX-05] OWASP A04 (Mass Assignment): registerPublic IGNORA el idRol que
 *          venga del cliente y fuerza siempre Rol.VISITANTE. El DTO público
 *          tampoco expone el campo idRol (defensa en capas).
 *
 * [FIX-06] OWASP A03 (Injection / Bypass): la construcción del alias se hace
 *          EXCLUSIVAMENTE en el backend con normalización Unicode estricta.
 *          El frontend solo previsualiza; nunca se acepta el alias del cliente.
 *
 * [FIX-07] OWASP A07 (Identification Failures): generación de token de
 *          verificación de email con randomBytes(32) — más entropía que UUIDv4
 *          (256 bits vs ~122). Se hashea SHA-256 antes de almacenar para que
 *          un dump de BD no permita usar tokens directamente.
 *
 * [FIX-08] OWASP A01 (Broken Access Control): verifyEmail SIEMPRE devuelve
 *          el mismo mensaje genérico al cliente, independientemente del motivo
 *          de fallo (token inexistente, ya consumido, etc.). Los logs internos
 *          sí distinguen para auditoría.
 *
 * [FIX-09] Colisión de alias: si el alias generado ya existe (otro Pérez), se
 *          devuelve ConflictException SIN revelar si el alias pertenece a un
 *          admin o a otro visitante (anti user-enumeration).
 * ─────────────────────────────────────────────────────────────────────────────
 */

import {
    BadRequestException,
    ConflictException,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { addMinutes } from 'date-fns';
import * as crypto from 'crypto';

import { UsuariosAuthService } from 'src/modules/usuarios/services/usuarios-auth.service';
import { UsuariosService } from 'src/modules/usuarios/services/usuarios.service';
import { RegisterDto } from '../dto/register.dto';
import { RegisterPublicDto } from '../dto/register-public.dto';
import { LoginDto } from '../dto/login.dto';
import { comparePassword } from 'src/common/utils';
import { MyJwtConfig } from 'src/config/services/jwt.config';
import { Rol, RolesEnum } from 'src/shared/constants/roles.const';
import { EmailService } from 'src/shared/services/email/email.service';
import { LogsService } from 'src/modules/logs/logs.service';
import { RolesService } from 'src/modules/usuarios/modules/roles/services/roles.service';

// ─── Interfaces de respuesta ──────────────────────────────────────────────────

interface LoginResponse {
    message: string;
    access_token: string;
    idUsuario: number;
    idRol: number;
    permisos: string[];
    must_change_password: boolean;
}

interface RegisterPublicResponse {
    message: string;
    aliasGenerado: string;
}

interface VerifyEmailResponse {
    message: string;
}

// ─── Payload interno del JWT ──────────────────────────────────────────────────

interface JwtPayload {
    sub: number;
    id: number;
    usuario: string;
    rol: number;
    idRol: number;
    permisos: string[];
    must_change_password: boolean;
}

// ─── Helper: normalización determinística de alias (backend-side) ────────────
//
// Replica EXACTAMENTE el algoritmo del frontend (generarAliasPreview), pero
// aplicado en backend como única fuente de verdad. El frontend solo muestra
// preview; el alias real se calcula aquí.
function normalizarSegmento(input: string): string {
    return input
        .toLowerCase()
        .trim()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // remueve diacríticos (tildes, ñ→n, etc.)
        .replace(/\s+/g, '.')
        .replace(/[^a-z0-9.]/g, '');
}

function construirAlias(nombre: string, apellidoPaterno: string): string {
    const n = normalizarSegmento(nombre);
    const a = normalizarSegmento(apellidoPaterno);
    if (!n || !a) {
        throw new BadRequestException({
            message: 'El nombre y apellido paterno deben contener caracteres válidos.',
        });
    }
    return `${n}.${a}`;
}

// ─── Servicio ─────────────────────────────────────────────────────────────────

@Injectable()
export class AuthService {
    constructor(
        private readonly usuariosAuthService: UsuariosAuthService,
        private readonly usuariosService: UsuariosService,
        private readonly jwtConfig: MyJwtConfig,
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
        private readonly emailService: EmailService,
        private readonly logsService: LogsService,
        private readonly rolesService: RolesService,
    ) {}

    // ─────────────────────────────────────────────────────────────────────────
    // REGISTRO INTERNO (vía panel admin/RRHH — usado por POST /register)
    // ─────────────────────────────────────────────────────────────────────────
    /**
     * Registro desde el panel administrativo. Delega directamente a
     * UsuariosAuthService sin construir alias ni generar token de verificación.
     * La validación de duplicados se hace en UsuariosAuthService.crearUsuario().
     */
    async register(data: RegisterDto): Promise<unknown> {
        const [existeUsuario, existeCorreo] = await Promise.all([
            this.usuariosService.findByUsuario(data.usuario, { throwException: false }),
            this.usuariosService.findOneByCorreo(data.correo, { throwException: false }),
        ]);

        if (existeUsuario) {
            throw new ConflictException({
                message: 'El usuario ingresado ya se encuentra registrado.',
            });
        }
        if (existeCorreo) {
            throw new ConflictException({
                message: 'Ya existe un usuario con el mismo correo.',
            });
        }

        return this.usuariosAuthService.create({
            ...data,
            idRol: data.idRol ?? Rol.VISITANTE,
        });
    }

    // ─────────────────────────────────────────────────────────────────────────
    // REGISTRO PÚBLICO (Visitante)
    // ─────────────────────────────────────────────────────────────────────────
    /**
     * Registro auto-servicio para visitantes públicos.
     *
     * Reglas críticas:
     *  - El rol SIEMPRE es Rol.VISITANTE; cualquier idRol del cliente se ignora.
     *  - El alias se construye en backend a partir de nombre + apellidoPaterno.
     *  - El correo queda is_email_verified=false hasta que se consuma el link.
     *  - Se emite un token de verificación con 256 bits de entropía, hasheado
     *    SHA-256 antes de almacenar (mismo patrón que reset_token).
     */
    async registerPublic(
        data: RegisterPublicDto,
        ipOrigen: string,
    ): Promise<RegisterPublicResponse> {
        // [FIX-06] Construcción de alias EXCLUSIVAMENTE en backend
        const aliasBase = construirAlias(data.nombre, data.apellidoPaterno);

        // Verificar colisión ANTES de intentar crear (UX + log explícito)
        const colision = await this.usuariosService.findByUsuario(aliasBase, {
            throwException: false,
        });

        if (colision) {
            // [FIX-09] Mensaje genérico — no revelamos si es admin u otro visitante
            await this.logsService.registroFallido({
                aliasIntentado: aliasBase,
                correoIntentado: data.correo,
                ipOrigen,
                motivo: 'ALIAS_DUPLICADO',
            });
            throw new ConflictException({
                message:
                    'No se pudo crear el usuario con esos datos. Verifica tu información o contacta a soporte.',
            });
        }

        // Verificar correo duplicado (también en correoReal para evitar squatting)
        const correoExistente = await this.usuariosService.findByAnyEmail(data.correo);
        if (correoExistente) {
            await this.logsService.registroFallido({
                aliasIntentado: aliasBase,
                correoIntentado: data.correo,
                ipOrigen,
                motivo: 'CORREO_DUPLICADO',
            });
            // Mismo mensaje genérico — anti-enumeration
            throw new ConflictException({
                message:
                    'No se pudo crear el usuario con esos datos. Verifica tu información o contacta a soporte.',
            });
        }

        // [FIX-07] Generar token de verificación (256 bits, SHA-256 al almacenar)
        const rawVerificationToken = crypto.randomBytes(32).toString('hex');
        const verificationTokenHash = crypto
            .createHash('sha256')
            .update(rawVerificationToken)
            .digest('hex');

        // Apellido completo concatenado (paterno + materno opcional)
        const apellidoCompleto = data.apellidoMaterno
            ? `${data.apellidoPaterno} ${data.apellidoMaterno}`.trim()
            : data.apellidoPaterno.trim();

        // [FIX-05] Forzamos VISITANTE; ignoramos cualquier idRol que venga del cliente
        const usuarioCreado = await this.usuariosAuthService.create({
            usuario: aliasBase, // Solo el alias base, sin @orbis.com (consistente con admin)
            correo: data.correo, // Correo institucional/de contacto
            correoReal: data.correo, // Para visitante público, correo y correoReal coinciden
            nombre: data.nombre.trim(),
            apellido: apellidoCompleto,
            contrasenia: data.contrasenia,
            idRol: Rol.VISITANTE,
            isEmailVerified: false,
            emailVerificationToken: verificationTokenHash,
        });

        // Construir URL de verificación
        const frontendUrl = (
            this.configService.get<string>('FRONTEND_URL') ||
            'https://orbis-seguridad.vercel.app'
        )
            .split(',')[0]
            .trim()
            .replace(/\/$/, '');

        const verifyUrl = `${frontendUrl}/verify-email?token=${rawVerificationToken}`;

        // EmailService ya existente: envía el link con el TOKEN EN CLARO (solo viaja al correo)
        this.emailService.enviarVerificacionEmail(data.correo, verifyUrl);

        await this.logsService.registroVisitante({
            idUsuario: usuarioCreado.id,
            nombreUsuario: aliasBase,
            ipOrigen,
        });

        return {
            message:
                'Registro recibido. Te enviamos un correo para verificar tu cuenta antes de iniciar sesión.',
            aliasGenerado: `${aliasBase}@orbis.com`,
        };
    }

    // ─────────────────────────────────────────────────────────────────────────
    // VERIFICACIÓN DE EMAIL (consumo del link)
    // ─────────────────────────────────────────────────────────────────────────
    /**
     * Consume el token de verificación. Idempotencia y anti-enumeration:
     *  - Si el token no existe → mismo mensaje genérico.
     *  - Si el token ya fue consumido → mismo mensaje genérico.
     *  - Solo en caso de éxito real se marca isEmailVerified=true y se nulea el token.
     */
    async verifyEmail(
        rawToken: string,
        ipOrigen: string,
    ): Promise<VerifyEmailResponse> {
        if (!rawToken || typeof rawToken !== 'string' || rawToken.length < 32) {
            // [FIX-08] No damos pista; logueamos el motivo internamente
            await this.logsService.verificacionEmailFallida({
                ipOrigen,
                motivo: 'TOKEN_MALFORMADO',
            });
            throw new BadRequestException({
                message: 'El enlace de verificación no es válido o ya expiró.',
            });
        }

        const tokenHash = crypto.createHash('sha256').update(rawToken).digest('hex');
        const usuario = await this.usuariosService.findByVerificationToken(tokenHash);

        if (!usuario) {
            await this.logsService.verificacionEmailFallida({
                ipOrigen,
                motivo: 'TOKEN_NO_ENCONTRADO',
            });
            throw new BadRequestException({
                message: 'El enlace de verificación no es válido o ya expiró.',
            });
        }

        // Caso borde: el usuario ya verificó pero el token sigue (no debería pasar
        // porque al verificar lo nuleamos, pero defensa en capas).
        if (usuario.isEmailVerified) {
            await this.usuariosService.limpiarTokenVerificacion(usuario.id);
            return {
                message: 'Tu correo ya estaba verificado. Ya puedes iniciar sesión.',
            };
        }

        await this.usuariosService.marcarEmailVerificado(usuario.id);

        await this.logsService.verificacionEmailExitosa({
            idUsuario: usuario.id,
            nombreUsuario: usuario.usuario,
            ipOrigen,
        });

        return {
            message: 'Correo verificado correctamente. Ya puedes iniciar sesión.',
        };
    }

    // ─────────────────────────────────────────────────────────────────────────
    // LOGIN (sin cambios funcionales — preservamos el FIX-01..04 previo)
    // ─────────────────────────────────────────────────────────────────────────
    async login(data: LoginDto, ipOrigen: string): Promise<LoginResponse> {
        const MAX_ATTEMPTS = this.configService.get<number>('MAX_LOGIN_ATTEMPTS', 3);
        const LOCKOUT_MINUTES = this.configService.get<number>('LOCKOUT_MINUTES', 30);

        const alias = data.usuario
            .toLowerCase()
            .replace(/@orbis\.com$/i, '')
            .trim();
        const usuario = await this.usuariosService.findByUsuario(alias, {
            throwException: false,
        });

        if (!usuario) {
            await this.logsService.loginFallido({
                nombreUsuario: alias,
                ipOrigen,
                intentosRestantes: MAX_ATTEMPTS,
            });
            throw new UnauthorizedException({ message: 'Credenciales incorrectas.' });
        }

        if (
            usuario.idRol === RolesEnum.TEMPORAL &&
            usuario.expiracion &&
            usuario.expiracion.getTime() <= Date.now()
        ) {
            await this.logsService.loginFallido({
                nombreUsuario: usuario.usuario,
                ipOrigen,
                intentosRestantes: 0,
            });
            throw new UnauthorizedException({ message: 'Credenciales incorrectas.' });
        }

        if (usuario.isLocked && usuario.lockedAt) {
            const unlockTime = addMinutes(usuario.lockedAt, LOCKOUT_MINUTES);
            if (new Date() >= unlockTime) {
                await this.usuariosService.desbloquearCuenta(usuario.id);
                await this.logsService.cuentaDesbloqueada({
                    idUsuarioAfectado: usuario.id,
                    nombreUsuarioAfectado: usuario.usuario,
                    motivo: 'AUTO_EXPIRACION',
                });
                usuario.isLocked = false;
                usuario.failedAttempts = 0;
            }
        }

        if (usuario.isLocked) {
            throw new UnauthorizedException({
                message: `Cuenta bloqueada. Intenta en ${LOCKOUT_MINUTES} min o solicita desbloqueo al administrador.`,
            });
        }

        const passwordOk = await comparePassword(data.contrasenia, usuario.contrasenia);

        if (!passwordOk) {
            const newCount = (usuario.failedAttempts ?? 0) + 1;

            if (newCount >= MAX_ATTEMPTS) {
                await this.usuariosService.bloquearCuenta(usuario.id);
                await this.logsService.cuentaBloqueada({
                    idUsuario: usuario.id,
                    nombreUsuario: usuario.usuario,
                    ipOrigen,
                    maxIntentos: MAX_ATTEMPTS,
                });

                if (usuario.correoReal) {
                    this.emailService.enviarCuentaBloqueada(
                        usuario.correoReal,
                        usuario.usuario,
                    );
                }

                throw new UnauthorizedException({
                    message: `Cuenta bloqueada por ${LOCKOUT_MINUTES} min tras ${MAX_ATTEMPTS} intentos fallidos.`,
                });
            }

            await this.usuariosService.incrementarIntentos(usuario.id, newCount);
            await this.logsService.loginFallido({
                nombreUsuario: usuario.usuario,
                ipOrigen,
                intentosRestantes: MAX_ATTEMPTS - newCount,
            });

            throw new UnauthorizedException({
                message: `Credenciales incorrectas. Intentos restantes: ${MAX_ATTEMPTS - newCount}.`,
            });
        }

        if ((usuario.failedAttempts ?? 0) > 0) {
            await this.usuariosService.incrementarIntentos(usuario.id, 0);
        }

        let mustChangePassword = usuario.mustChangePassword ?? false;
        if (
            !mustChangePassword &&
            usuario.passwordExpiresAt &&
            new Date() > usuario.passwordExpiresAt
        ) {
            mustChangePassword = true;
            await this.usuariosService.marcarPasswordExpirado(usuario.id);
        }

        const permisos = await this.rolesService.getPermissionsForRole(usuario.idRol);

        const payload: JwtPayload = {
            sub: usuario.id,
            id: usuario.id,
            usuario: usuario.usuario,
            rol: usuario.idRol,
            idRol: usuario.idRol,
            permisos,
            must_change_password: mustChangePassword,
        };

        const { secret, expiresIn } = this.jwtConfig.get();
        const token = this.jwtService.sign(payload, { secret, expiresIn });

        await this.logsService.loginExitoso({
            idUsuario: usuario.id,
            nombreUsuario: usuario.usuario,
            ipOrigen,
        });

        return {
            message: 'Login exitoso.',
            access_token: token,
            idUsuario: usuario.id,
            idRol: usuario.idRol,
            permisos,
            must_change_password: mustChangePassword,
        };
    }

    // ─────────────────────────────────────────────────────────────────────────
    // RECUPERACIÓN DE CONTRASEÑA (sin cambios)
    // ─────────────────────────────────────────────────────────────────────────
    async solicitarResetPassword(correo: string, ipOrigen: string): Promise<void> {
        const RESET_MINUTES = this.configService.get<number>(
            'RESET_TOKEN_EXPIRES_MINUTES',
            30,
        );
        const frontendUrl = (
            this.configService.get<string>('FRONTEND_URL') ||
            'https://orbis-seguridad.vercel.app'
        )
            .split(',')[0]
            .trim()
            .replace(/\/$/, '');

        const usuario = await this.usuariosService.findByAnyEmail(correo);
        if (!usuario) return;

        const rawToken = crypto.randomBytes(32).toString('hex');
        const tokenHash = crypto.createHash('sha256').update(rawToken).digest('hex');
        const expires = addMinutes(new Date(), RESET_MINUTES);

        await this.usuariosService.guardarResetToken(usuario.id, tokenHash, expires);

        await this.logsService.resetPasswordSolicitado({
            idUsuario: usuario.id,
            nombreUsuario: usuario.usuario,
            ipOrigen,
        });

        const resetUrl = `${frontendUrl}/reset-password?token=${rawToken}`;
        const correoDestino = usuario.correoReal || usuario.correo;
        this.emailService.enviarResetPassword(correoDestino, resetUrl, RESET_MINUTES);
    }

    async validarTokenReset(token: string): Promise<{ valido: boolean }> {
        const tokenHash = crypto.createHash('sha256').update(token).digest('hex');
        const usuario = await this.usuariosService.findByResetToken(tokenHash);
        const valido =
            !!usuario &&
            !!usuario.resetTokenExpires &&
            new Date() <= usuario.resetTokenExpires;
        return { valido };
    }

    async confirmarResetPassword(
        token: string,
        passwordNuevo: string,
        ipOrigen: string,
    ): Promise<void> {
        const tokenHash = crypto.createHash('sha256').update(token).digest('hex');
        const usuario = await this.usuariosService.findByResetToken(tokenHash);

        if (
            !usuario ||
            !usuario.resetTokenExpires ||
            new Date() > usuario.resetTokenExpires
        ) {
            throw new BadRequestException({ message: 'Token inválido o expirado.' });
        }

        await this.usuariosService.resetearPassword(usuario.id, passwordNuevo);

        await this.logsService.resetPasswordCompletado({
            idUsuario: usuario.id,
            nombreUsuario: usuario.usuario,
            ipOrigen,
        });

        const correoDestino = usuario.correoReal || usuario.correo;
        this.emailService.enviarPasswordCambiada(correoDestino);
    }
}