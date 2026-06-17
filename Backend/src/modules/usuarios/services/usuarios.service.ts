import {
    BadRequestException,
    Injectable,
    Logger,
    NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Not } from 'typeorm';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import * as bcrypt from 'bcrypt';
import { addDays } from 'date-fns';

import { Usuario } from '../entities/usuario.entity';
import { OptionsFindOne } from 'src/common/classes';
import { RolesEnum } from 'src/shared/constants/roles.const';
import { PasswordValidatorService } from 'src/common/services/password-validator.service';
import { PasswordHistoryService } from './password-history.service';

// ─── DTOs locales ────────────────────────────────────────────────────────────

export class CambiarPasswordDto {
    @IsString()
    @IsOptional()
    passwordActual?: string;

    @IsString()
    @IsNotEmpty()
    passwordNuevo: string;
}

// ─── Tipos auxiliares (eliminan `any`) ───────────────────────────────────────

interface RubroRow {
    nombre_rubro: string;
}

// ─── Servicio ────────────────────────────────────────────────────────────────

@Injectable()
export class UsuariosService {
    private readonly logger = new Logger(UsuariosService.name);

    constructor(
        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>,
        private readonly passwordValidator: PasswordValidatorService,
        private readonly passwordHistoryService: PasswordHistoryService,
    ) {}

    // ─────────────────────────────────────────────────────────────────────────
    // Listado de usuarios — el filtro de roles privilegiados se hace EN BD
    // ─────────────────────────────────────────────────────────────────────────
    async findAll(): Promise<Usuario[]> {
        return this.usuarioRepository.find({
            select: {
                id: true,
                usuario: true,
                nombre: true,
                apellido: true,
                correo: true,
                idRol: true,
                isLocked: true,
                failedAttempts: true,
                expiracion: true,
                isEmailVerified: true, // [NUEVO] útil para el panel admin
            },
        });
    }

    async findByUsuario(
        usuario: string,
        options?: OptionsFindOne,
    ): Promise<Usuario | null> {
        const finalOptions = new OptionsFindOne();
        if (options) Object.assign(finalOptions, options);

        const repo = finalOptions.manager
            ? finalOptions.manager.getRepository(Usuario)
            : this.usuarioRepository;

        const u = await repo.findOne({ where: { usuario } });

        if (!u && finalOptions.throwException) {
            throw new NotFoundException({ message: 'Usuario no encontrado' });
        }
        return u;
    }

    async findOne(id: number, options?: OptionsFindOne): Promise<Usuario | null> {
        const finalOptions = new OptionsFindOne();
        if (options) Object.assign(finalOptions, options);

        const repo = finalOptions.manager
            ? finalOptions.manager.getRepository(Usuario)
            : this.usuarioRepository;

        const u = await repo.findOne({ where: { id } });

        if (!u) {
            if (finalOptions.throwException) {
                throw new NotFoundException({ message: 'Usuario no encontrado' });
            }
            return null;
        }

        if (
            u.idRol === RolesEnum.TEMPORAL &&
            u.expiracion &&
            u.expiracion.getTime() <= Date.now()
        ) {
            if (finalOptions.throwException) {
                throw new NotFoundException({ message: 'Usuario no encontrado' });
            }
            return null;
        }
        return u;
    }

    // ─────────────────────────────────────────────────────────────────────────
    // CAMBIO DE CONTRASEÑA — punto crítico de Soft Validation
    // ─────────────────────────────────────────────────────────────────────────
    /**
     * Cambio de contraseña. Aplica Soft Validation:
     *
     *   Si el usuario tenía mustChangePassword=true Y aún no había verificado
     *   su correo, el hecho de poder cambiar la clave temporal demuestra que
     *   tuvo acceso al correo donde RRHH le envió esa clave. Marcamos
     *   isEmailVerified=true silenciosamente.
     *
     * IMPORTANTE — por qué la condición es DOBLE:
     *   - mustChangePassword=true por sí solo NO basta: una contraseña puede
     *     expirar tras 60 días y forzar el cambio sin que el usuario haya
     *     tocado el correo recientemente (caso visitante público que nunca
     *     verificó).
     *   - isEmailVerified=false por sí solo tampoco basta: un visitante que
     *     ignoró el link de verificación no debería poder bypassearlo
     *     simplemente esperando 60 días.
     *
     * La intersección (clave temporal pendiente Y email aún no verificado) es
     * la única ventana donde el cambio implica posesión del correo.
     */
    async cambiarPassword(
        idUsuario: number,
        dto: CambiarPasswordDto,
    ): Promise<void> {
        const usuario = await this.usuarioRepository.findOneBy({ id: idUsuario });
        if (!usuario) throw new NotFoundException('Usuario no encontrado');

        // ¿Estamos en la ventana válida de Soft Validation?
        const aplicaSoftValidation =
            usuario.mustChangePassword === true &&
            usuario.isEmailVerified === false;

        // Validación de contraseña actual (solo si NO es cambio forzado)
        if (!usuario.mustChangePassword) {
            if (!dto.passwordActual) {
                throw new BadRequestException('La contraseña actual es requerida');
            }
            const actualValida = await bcrypt.compare(
                dto.passwordActual,
                usuario.contrasenia,
            );
            if (!actualValida) {
                throw new BadRequestException('La contraseña actual es incorrecta');
            }
        }

        this.passwordValidator.validar(dto.passwordNuevo);
        await this.passwordHistoryService.verificarReutilizacion(
            idUsuario,
            dto.passwordNuevo,
        );

        const nuevoHash = await bcrypt.hash(dto.passwordNuevo, 12);
        await this.passwordHistoryService.guardarEnHistorial(idUsuario, nuevoHash);

        await this.usuarioRepository.update(idUsuario, {
            contrasenia: nuevoHash,
            mustChangePassword: false,
            passwordChangedAt: new Date(),
            passwordExpiresAt: addDays(new Date(), 60),
            failedAttempts: 0,
            resetToken: null,
            resetTokenExpires: null,
            // Soft Validation: solo si aplica la condición doble
            ...(aplicaSoftValidation && {
                isEmailVerified: true,
                emailVerificationToken: null,
            }),
        });

        if (aplicaSoftValidation) {
            this.logger.log(
                `Soft Validation aplicada: usuario ${idUsuario} verificado por cambio de clave temporal.`,
            );
        }
    }

    // ─────────────────────────────────────────────────────────────────────────
    // RESET DE CONTRASEÑA (vía link público — NO aplica Soft Validation)
    // ─────────────────────────────────────────────────────────────────────────
    async resetearPassword(id: number, passwordNuevo: string): Promise<void> {
        const usuario = await this.usuarioRepository.findOneBy({ id });
        if (!usuario) throw new NotFoundException('Usuario no encontrado');

        this.passwordValidator.validar(passwordNuevo);
        await this.passwordHistoryService.verificarReutilizacion(id, passwordNuevo);

        const nuevoHash = await bcrypt.hash(passwordNuevo, 12);
        await this.passwordHistoryService.guardarEnHistorial(id, nuevoHash);

        await this.usuarioRepository.update(id, {
            contrasenia: nuevoHash,
            mustChangePassword: false,
            passwordChangedAt: new Date(),
            passwordExpiresAt: addDays(new Date(), 60),
            failedAttempts: 0,
            isLocked: false,
            lockedAt: null,
            resetToken: null,
            resetTokenExpires: null,
        });
    }

    // ─────────────────────────────────────────────────────────────────────────
    // VERIFICACIÓN DE EMAIL — operaciones sobre el token
    // ─────────────────────────────────────────────────────────────────────────
    async findByVerificationToken(tokenHash: string): Promise<Usuario | null> {
        return this.usuarioRepository.findOne({
            where: { emailVerificationToken: tokenHash },
        });
    }

    async marcarEmailVerificado(id: number): Promise<void> {
        await this.usuarioRepository.update(id, {
            isEmailVerified: true,
            emailVerificationToken: null,
        });
    }

    async limpiarTokenVerificacion(id: number): Promise<void> {
        await this.usuarioRepository.update(id, {
            emailVerificationToken: null,
        });
    }

    // ─────────────────────────────────────────────────────────────────────────
    // OPERACIONES DE BLOQUEO / RESET DE INTENTOS
    // ─────────────────────────────────────────────────────────────────────────
    async restaurar(id: number): Promise<void> {
        await this.usuarioRepository.restore({ id });
    }

    async desbloquearCuenta(id: number): Promise<void> {
        await this.usuarioRepository.update(id, {
            isLocked: false,
            failedAttempts: 0,
            lockedAt: null,
        });
    }

    async bloquearCuenta(id: number): Promise<void> {
        await this.usuarioRepository.update(id, {
            isLocked: true,
            lockedAt: new Date(),
        });
    }

    async incrementarIntentos(id: number, count: number): Promise<void> {
        await this.usuarioRepository.update(id, { failedAttempts: count });
    }

    async marcarPasswordExpirado(id: number): Promise<void> {
        await this.usuarioRepository.update(id, { mustChangePassword: true });
    }

    // ─────────────────────────────────────────────────────────────────────────
    // BÚSQUEDAS POR CORREO
    // ─────────────────────────────────────────────────────────────────────────
    async findOneByCorreo(
        correo: string,
        options?: OptionsFindOne,
    ): Promise<Usuario | null> {
        const finalOptions = new OptionsFindOne();
        if (options) Object.assign(finalOptions, options);

        const repo = finalOptions.manager
            ? finalOptions.manager.getRepository(Usuario)
            : this.usuarioRepository;

        const u = await repo.findOne({ where: { correo } });
        if (!u) {
            if (finalOptions.throwException) {
                throw new NotFoundException({ message: 'Usuario no encontrado' });
            }
            return null;
        }
        if (
            u.idRol === RolesEnum.TEMPORAL &&
            u.expiracion &&
            u.expiracion.getTime() <= Date.now()
        ) {
            if (finalOptions.throwException) {
                throw new NotFoundException({ message: 'Usuario no encontrado' });
            }
            return null;
        }
        return u;
    }

    async findByAnyEmail(email: string): Promise<Usuario | null> {
        const byReal = await this.usuarioRepository.findOne({
            where: { correoReal: email },
        });
        if (byReal) return byReal;
        return this.usuarioRepository.findOne({ where: { correo: email } });
    }

    async guardarResetToken(
        id: number,
        tokenHash: string,
        expires: Date,
    ): Promise<void> {
        await this.usuarioRepository.update(id, {
            resetToken: tokenHash,
            resetTokenExpires: expires,
        });
    }

    async findByResetToken(tokenHash: string): Promise<Usuario | null> {
        return this.usuarioRepository.findOne({ where: { resetToken: tokenHash } });
    }

    // ─────────────────────────────────────────────────────────────────────────
    // RUBROS PERMITIDOS (consultados en runtime — NO en JWT, ver FIX-03)
    // ─────────────────────────────────────────────────────────────────────────
    async obtenerRubrosPorUsuario(idUsuario: number): Promise<string[]> {
        try {
            // Query parametrizada — $1 previene SQL Injection
            const resultados = await this.usuarioRepository.query<RubroRow[]>(
                `
                SELECT r.nombre_rubro
                FROM investigador_rubro ir
                INNER JOIN rubros r ON ir.id_rubro = r.id_rubro
                WHERE ir.id_usuario = $1
                `,
                [idUsuario],
            );

            return resultados.map((fila) => fila.nombre_rubro);
        } catch (error) {
            // Logger estructurado — nunca console.error en producción
            this.logger.error(
                `Error en BD al obtener rubros del investigador ${idUsuario}`,
                error instanceof Error ? error.stack : String(error),
            );
            // Mínimo privilegio: ante fallo, NO conceder acceso a ningún rubro
            return [];
        }
    }
}