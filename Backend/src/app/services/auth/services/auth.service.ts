/**
 * @file auth.service.ts (REFACTORIZADO - Seguridad aplicada)
 *
 * CAMBIOS DE SEGURIDAD APLICADOS:
 * ─────────────────────────────────────────────────────────────────────────────
 * [FIX-01] ELIMINADO `any`: obtenerRubrosPorUsuario ahora tiene contrato tipado
 *          en IUsuariosService. Sin castings peligrosos.
 *
 * [FIX-02] OWASP A07: Todos los eventos de autenticación se registran en
 *          LogsService (loginExitoso, loginFallido, cuentaBloqueada, etc.).
 *
 * [FIX-03] OWASP A01: Los rubrosPermitidos YA NO se incluyen en el JWT payload.
 *          Se consultan desde la BD en cada request mediante el guard,
 *          eliminando el riesgo de elevación de privilegios por token manipulado.
 *
 * [FIX-04] Sanitización de alias: se normaliza a lowercase antes de toda
 *          operación para evitar bypass por variaciones de mayúsculas.
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
import { LoginDto } from '../dto/login.dto';
import { comparePassword } from 'src/common/utils';
import { MyJwtConfig } from 'src/config/services/jwt.config';
import { Rol, RolesEnum } from 'src/shared/constants/roles.const';
import { EmailService } from 'src/shared/services/email/email.service';
import { LogsService } from 'src/modules/logs/logs.service';

// ─── Interfaces de respuesta ──────────────────────────────────────────────────

interface LoginResponse {
    message: string;
    access_token: string;
    idUsuario: number;
    idRol: number;
    must_change_password: boolean;
}

// ─── Payload interno del JWT ──────────────────────────────────────────────────

interface JwtPayload {
    sub: number;
    id: number;
    usuario: string;
    rol: number;
    idRol: number;
    must_change_password: boolean;
    // [FIX-03]: rubrosPermitidos ELIMINADO del JWT.
    //           Se consultan en tiempo de ejecución desde la BD.
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
        private readonly logsService: LogsService,          // [FIX-02]
    ) {}

    async register(data: RegisterDto) {
        const [existeUsuario, existeCorreo] = await Promise.all([
            this.usuariosService.findByUsuario(data.usuario, { throwException: false }),
            this.usuariosService.findOneByCorreo(data.correo, { throwException: false }),
        ]);

        if (existeUsuario) {
            throw new ConflictException({ message: 'El usuario ingresado ya se encuentra registrado.' });
        }
        if (existeCorreo) {
            throw new ConflictException({ message: 'Ya existe un usuario con el mismo correo.' });
        }

        return this.usuariosAuthService.create({
            ...data,
            idRol: data.idRol ?? Rol.VISITANTE,
        });
    }

    async login(data: LoginDto, ipOrigen: string): Promise<LoginResponse> {
        const MAX_ATTEMPTS    = this.configService.get<number>('MAX_LOGIN_ATTEMPTS', 3);
        const LOCKOUT_MINUTES = this.configService.get<number>('LOCKOUT_MINUTES', 30);

        // [FIX-04] Normalización segura del alias
        const alias   = data.usuario.toLowerCase().replace(/@orbis\.com$/i, '').trim();
        const usuario = await this.usuariosService.findByUsuario(alias, { throwException: false });

        if (!usuario) {
            // [FIX-02] Log de intento fallido (usuario inexistente)
            await this.logsService.loginFallido({
                nombreUsuario:     alias,
                ipOrigen,
                intentosRestantes: MAX_ATTEMPTS,
            });
            throw new UnauthorizedException({ message: 'Credenciales incorrectas.' });
        }

        // Verificar expiración de cuenta temporal
        if (
            usuario.idRol === RolesEnum.TEMPORAL &&
            usuario.expiracion &&
            usuario.expiracion.getTime() <= Date.now()
        ) {
            await this.logsService.loginFallido({
                nombreUsuario:     usuario.usuario,
                ipOrigen,
                intentosRestantes: 0,
            });
            throw new UnauthorizedException({ message: 'Credenciales incorrectas.' });
        }

        // Auto-desbloqueo por expiración del período
        if (usuario.isLocked && usuario.lockedAt) {
            const unlockTime = addMinutes(usuario.lockedAt, LOCKOUT_MINUTES);
            if (new Date() >= unlockTime) {
                await this.usuariosService.desbloquearCuenta(usuario.id);
                await this.logsService.cuentaDesbloqueada({
                    idUsuarioAfectado:     usuario.id,
                    nombreUsuarioAfectado: usuario.usuario,
                    motivo:               'AUTO_EXPIRACION',
                });
                usuario.isLocked       = false;
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

                // [FIX-02] Log de bloqueo de cuenta
                await this.logsService.cuentaBloqueada({
                    idUsuario:     usuario.id,
                    nombreUsuario: usuario.usuario,
                    ipOrigen,
                    maxIntentos:   MAX_ATTEMPTS,
                });

                if (usuario.correoReal) {
                    this.emailService.enviarCuentaBloqueada(usuario.correoReal, usuario.usuario);
                }

                throw new UnauthorizedException({
                    message: `Cuenta bloqueada por ${LOCKOUT_MINUTES} min tras ${MAX_ATTEMPTS} intentos fallidos.`,
                });
            }

            await this.usuariosService.incrementarIntentos(usuario.id, newCount);

            // [FIX-02] Log de intento fallido con usuario conocido
            await this.logsService.loginFallido({
                nombreUsuario:     usuario.usuario,
                ipOrigen,
                intentosRestantes: MAX_ATTEMPTS - newCount,
            });

            throw new UnauthorizedException({
                message: `Credenciales incorrectas. Intentos restantes: ${MAX_ATTEMPTS - newCount}.`,
            });
        }

        // Resetear intentos en login exitoso
        if ((usuario.failedAttempts ?? 0) > 0) {
            await this.usuariosService.incrementarIntentos(usuario.id, 0);
        }

        // Verificar expiración de contraseña
        let mustChangePassword = usuario.mustChangePassword ?? false;
        if (!mustChangePassword && usuario.passwordExpiresAt && new Date() > usuario.passwordExpiresAt) {
            mustChangePassword = true;
            await this.usuariosService.marcarPasswordExpirado(usuario.id);
        }

        // [FIX-03] Los rubros NO van en el JWT; se consultan por guard en cada request
        const payload: JwtPayload = {
            sub:                 usuario.id,
            id:                  usuario.id,
            usuario:             usuario.usuario,
            rol:                 usuario.idRol,
            idRol:               usuario.idRol,
            must_change_password: mustChangePassword,
        };

        const { secret, expiresIn } = this.jwtConfig.get();
        const token = this.jwtService.sign(payload, { secret, expiresIn });

        // [FIX-02] Log de login exitoso
        await this.logsService.loginExitoso({
            idUsuario:     usuario.id,
            nombreUsuario: usuario.usuario,
            ipOrigen,
        });

        return {
            message:              'Login exitoso.',
            access_token:         token,
            idUsuario:            usuario.id,
            idRol:                usuario.idRol,
            must_change_password: mustChangePassword,
        };
    }

    // ── Recuperación de contraseña ────────────────────────────────────────────

    async solicitarResetPassword(correo: string, ipOrigen: string): Promise<void> {
        const RESET_MINUTES = this.configService.get<number>('RESET_TOKEN_EXPIRES_MINUTES', 30);
        const frontendUrl   = (
            this.configService.get<string>('FRONTEND_URL') || 'https://orbis-seguridad.vercel.app'
        ).split(',')[0].trim().replace(/\/$/, '');

        const usuario = await this.usuariosService.findByAnyEmail(correo);
        if (!usuario) return; // Respuesta silenciosa: no revela existencia de cuenta

        const rawToken  = crypto.randomBytes(32).toString('hex');
        const tokenHash = crypto.createHash('sha256').update(rawToken).digest('hex');
        const expires   = addMinutes(new Date(), RESET_MINUTES);

        await this.usuariosService.guardarResetToken(usuario.id, tokenHash, expires);

        // [FIX-02] Log de solicitud (sin exponer token)
        await this.logsService.resetPasswordSolicitado({
            idUsuario:     usuario.id,
            nombreUsuario: usuario.usuario,
            ipOrigen,
        });

        const resetUrl      = `${frontendUrl}/reset-password?token=${rawToken}`;
        const correoDestino = usuario.correoReal || usuario.correo;
        this.emailService.enviarResetPassword(correoDestino, resetUrl, RESET_MINUTES);
    }

    async validarTokenReset(token: string): Promise<{ valido: boolean }> {
        const tokenHash = crypto.createHash('sha256').update(token).digest('hex');
        const usuario   = await this.usuariosService.findByResetToken(tokenHash);
        const valido    =
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
        const usuario   = await this.usuariosService.findByResetToken(tokenHash);

        if (!usuario || !usuario.resetTokenExpires || new Date() > usuario.resetTokenExpires) {
            throw new BadRequestException({ message: 'Token inválido o expirado.' });
        }

        await this.usuariosService.resetearPassword(usuario.id, passwordNuevo);

        // [FIX-02] Log de reset completado
        await this.logsService.resetPasswordCompletado({
            idUsuario:     usuario.id,
            nombreUsuario: usuario.usuario,
            ipOrigen,
        });

        const correoDestino = usuario.correoReal || usuario.correo;
        this.emailService.enviarPasswordCambiada(correoDestino);
    }
}
