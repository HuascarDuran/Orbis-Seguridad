/**
 * @file usuarios-auth.service.ts (REFACTORIZADO — método create() actualizado)
 *
 * CAMBIOS RESPECTO A LA VERSIÓN ANTERIOR:
 * ─────────────────────────────────────────────────────────────────────────────
 * [NUEVO] El método create() ahora acepta isEmailVerified y
 *         emailVerificationToken opcionales, para soportar el flujo de
 *         auto-registro público con Soft Validation.
 *
 *         Cuando AuthService llama a create() desde registerPublic():
 *           - isEmailVerified  = false  (visitante aún no ha verificado)
 *           - emailVerificationToken = hash SHA-256 del token enviado al correo
 *
 *         Cuando se usa desde el registro interno de RRHH (flujo viejo):
 *           - Ambos campos son undefined → la entidad queda con sus defaults
 *             (is_email_verified=false, token=null) sin romper nada.
 *
 * TODO LO DEMÁS ES IDÉNTICO — crearUsuario, update, remove, helpers privados
 * no se modificaron para minimizar riesgo de regresión.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import {
    BadRequestException,
    ForbiddenException,
    Injectable,
    NotFoundException,
    ConflictException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from '../entities/usuario.entity';
import { EntityManager, Repository } from 'typeorm';
import { CreateUsuarioDto } from '../dto/create-usuario.dto';
import { CreateUsuarioNuevoDto } from '../dto/create-usuario-nuevo.dto';
import { UpdateUsuarioDto } from '../dto/update-usuario.dto';
import { hashPassword } from 'src/common/utils';
import { CreateUsuarioTemporalDto } from '../dto/create-usuario-temporal.dto';
import { RolesEnum } from 'src/shared/constants/roles.const';
import { UsuariosService } from './usuarios.service';
import { EmailService } from 'src/shared/services/email/email.service';
import { LogsService } from 'src/modules/logs/logs.service';
import { buildBaseAlias } from 'src/common/utils/alias-generator.util';
import { addDays } from 'date-fns';
import { InvestigadorRubro } from '../entities/investigador-rubro.entity';

// ─── Contexto de auditoría ────────────────────────────────────────────────────

export interface AuditoriaCtx {
    idAdmin:    number;
    adminAlias: string;
    ipOrigen:   string;
}

// ─── DTO extendido para create() ──────────────────────────────────────────────
// Extiende CreateUsuarioDto añadiendo los campos opcionales de verificación.
// Al ser opcionales, el flujo de RRHH sigue funcionando sin pasarlos.

interface CreateUsuarioDtoExtendido extends CreateUsuarioDto {
    nombre?:                  string;
    apellido?:                string;
    correoReal?:              string;
    isEmailVerified?:         boolean;
    emailVerificationToken?:  string | null;
}

// ─── Servicio ─────────────────────────────────────────────────────────────────

@Injectable()
export class UsuariosAuthService {
    constructor(
        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>,
        @InjectRepository(InvestigadorRubro)
        private readonly investigadorRubroRepository: Repository<InvestigadorRubro>,
        private readonly usuariosService: UsuariosService,
        private readonly emailService: EmailService,
        private readonly logsService: LogsService,
    ) {}

    // ─── Utilidad interna ─────────────────────────────────────────────────────

    private sanitize(u: Usuario): Omit<Usuario, 'contrasenia'> {
        const { contrasenia, ...rest } = u as Usuario & { contrasenia: string };
        return rest as Omit<Usuario, 'contrasenia'>;
    }

    // ─── Registro público (llamado por AuthService) ───────────────────────────
    /**
     * Crea un usuario en la base de datos para el flujo de auto-registro.
     *
     * Acepta opcionalmente isEmailVerified y emailVerificationToken para
     * soportar la Soft Validation. Cuando se omiten (flujo RRHH interno),
     * la entidad usa sus valores por defecto (false / null).
     *
     * No genera logs aquí: el caller (AuthService.registerPublic) es
     * responsable de llamar a logsService.registroVisitante() o
     * logsService.registroFallido() con el contexto correcto.
     */
    async create(data: CreateUsuarioDtoExtendido): Promise<Usuario> {
        const usuario = new Usuario();

        usuario.correo      = data.correo;
        usuario.usuario     = data.usuario;
        usuario.contrasenia = await hashPassword(data.contrasenia);
        usuario.idRol       = data.idRol;

        // Campos de identidad (opcionales — flujo público los provee)
        if (data.nombre    !== undefined) usuario.nombre    = data.nombre;
        if (data.apellido  !== undefined) usuario.apellido  = data.apellido;
        if (data.correoReal !== undefined) usuario.correoReal = data.correoReal;

        // Soft Validation: solo se asignan si vienen explícitamente
        // Si no vienen, TypeORM usa los defaults de la entidad (false / null)
        if (data.isEmailVerified !== undefined) {
            usuario.isEmailVerified = data.isEmailVerified;
        }
        if (data.emailVerificationToken !== undefined) {
            usuario.emailVerificationToken = data.emailVerificationToken;
        }

        return this.usuarioRepository.save(usuario);
    }

    // ─── Creación de usuario temporal ─────────────────────────────────────────

    async createTemporal(
        data: CreateUsuarioTemporalDto,
        manager?: EntityManager,
    ): Promise<Usuario> {
        const repo    = manager ? manager.getRepository(Usuario) : this.usuarioRepository;
        const usuario = new Usuario();
        usuario.usuario     = data.usuario;
        usuario.correo      = data.correo;
        usuario.contrasenia = await hashPassword(data.contrasenia);
        usuario.idRol       = RolesEnum.TEMPORAL;
        usuario.expiracion  = data.expiracion;
        return repo.save(usuario);
    }

    // ─── CU-02 a CU-05: Creación de usuario por administrador ─────────────────

    async crearUsuario(
        dto:          CreateUsuarioNuevoDto,
        creadorIdRol: number,
        auditoria:    AuditoriaCtx,
    ): Promise<Omit<Usuario, 'contrasenia'>> {
        const alias        = await this.generarAliasUnico(dto.nombre, dto.apellidoPaterno);
        const tempPassword = this.generarPasswordTemporal();
        const hash         = await hashPassword(tempPassword);

        let idRol: number;
        if (dto.tipoRol === 'admin') {
            idRol = this.calcularRolAdmin(
                dto.permisos?.panelUsuarios     ?? false,
                dto.permisos?.editarEmpresas    ?? false,
                dto.permisos?.formularioExterno ?? false,
                creadorIdRol === 1,
            );
        } else {
            const esJunior = dto.rubrosAsignados && dto.rubrosAsignados.length > 0;
            idRol = esJunior ? 5 : 4;
        }

        const apellido = dto.apellidoMaterno
            ? `${dto.apellidoPaterno} ${dto.apellidoMaterno}`
            : dto.apellidoPaterno;

        const nuevoUsuario = this.usuarioRepository.create({
            nombre:                  dto.nombre,
            apellido:                apellido,
            usuario:                 alias,
            correo:                  `${alias}@orbis.com`,
            correoReal:              dto.correoReal,
            contrasenia:             hash,
            idRol:                   idRol,
            mustChangePassword:      true,
            passwordExpiresAt:       addDays(new Date(), 60),
            accesoFormularioExterno: dto.permisos?.formularioExterno ?? false,
            // Usuarios creados por RRHH: correo validado de facto cuando
            // cambien su clave temporal (Soft Validation en cambiarPassword)
            isEmailVerified:         false,
            emailVerificationToken:  null,
        });

        const guardado = await this.usuarioRepository.save(nuevoUsuario);

        if (idRol === 5 && dto.rubrosAsignados && dto.rubrosAsignados.length > 0) {
            const asignaciones = dto.rubrosAsignados.map((idRubro) => ({
                idUsuario: guardado.id,
                idRubro,
            }));
            await this.investigadorRubroRepository.save(asignaciones);
        }

        if (dto.permisos?.formularioExterno) {
            await this.emailService.enviarAccesoFormularioExterno(
                dto.correoReal,
                alias,
                tempPassword,
                'https://orbis-empresarial.vercel.app/',
            );
        } else {
            await this.emailService.enviarPasswordTemporal(dto.correoReal, alias, tempPassword);
        }

        void this.logsService.usuarioCreado({
            idAdministrador:     auditoria.idAdmin,
            nombreAdministrador: auditoria.adminAlias,
            idUsuarioNuevo:      guardado.id,
            nombreUsuarioNuevo:  `${dto.nombre} ${apellido}`,
            rolAsignado:         idRol,
            ipOrigen:            auditoria.ipOrigen,
        });

        const { contrasenia, ...resultado } = guardado as Usuario & { contrasenia: string };
        return resultado;
    }

    // ─── Actualización de usuario ──────────────────────────────────────────────

    async update(
        id:        number,
        data:      UpdateUsuarioDto,
        auditoria: AuditoriaCtx,
    ): Promise<Omit<Usuario, 'contrasenia'>> {
        const entity = await this.usuariosService.findOne(id, { throwException: true });

        const camposModificados: string[] = [];

        if (data.usuario && data.usuario !== entity!.usuario) {
            const repeated = await this.usuariosService.findByUsuario(
                data.usuario,
                { throwException: false },
            );
            if (repeated && repeated.id !== id) {
                throw new ConflictException({ message: 'El nombre de usuario ya está en uso.' });
            }
            entity!.usuario = data.usuario;
            camposModificados.push('usuario');
        }

        if (data.correo && data.correo !== entity!.correo) {
            const repeatedEmail = await this.usuariosService.findOneByCorreo(
                data.correo,
                { throwException: false },
            );
            if (repeatedEmail && repeatedEmail.id !== id) {
                throw new ConflictException({ message: 'El correo ya está en uso.' });
            }
            entity!.correo = data.correo;
            camposModificados.push('correo');
        }

        if (data.idRol !== undefined && data.idRol !== entity!.idRol) {
            entity!.idRol = data.idRol;
            camposModificados.push('idRol');
        }

        const updated = await this.usuarioRepository.save(entity!);

        if (camposModificados.length > 0) {
            void this.logsService.usuarioModificado({
                idAdministrador:       auditoria.idAdmin,
                nombreAdministrador:   auditoria.adminAlias,
                idUsuarioAfectado:     id,
                nombreUsuarioAfectado: entity!.usuario,
                camposModificados,
                ipOrigen:              auditoria.ipOrigen,
            });
        }

        return this.sanitize(updated);
    }

    // ─── Eliminación de usuario ────────────────────────────────────────────────

    async remove(id: number, auditoria: AuditoriaCtx): Promise<true> {
        const entity = await this.usuariosService.findOne(id, { throwException: true });
        await this.usuarioRepository.softDelete(id);

        void this.logsService.usuarioEliminado({
            idAdministrador:       auditoria.idAdmin,
            nombreAdministrador:   auditoria.adminAlias,
            idUsuarioAfectado:     id,
            nombreUsuarioAfectado: entity!.usuario,
            ipOrigen:              auditoria.ipOrigen,
        });

        return true;
    }

    // ─── Helpers privados ──────────────────────────────────────────────────────

    private calcularRolAdmin(
        permisoUsuarios:          boolean,
        permisoEmpresas:          boolean,
        permisoFormularioExterno: boolean,
        creadorEsSuperadmin:      boolean,
    ): number {
        if (permisoUsuarios && permisoEmpresas) {
            if (!creadorEsSuperadmin) {
                throw new ForbiddenException(
                    'Solo un SUPERADMIN puede crear usuarios con acceso total al sistema',
                );
            }
            return 1;
        }
        if (permisoUsuarios)          return 2;
        if (permisoEmpresas)          return 3;
        if (permisoFormularioExterno) return 3;

        throw new BadRequestException(
            'Un administrador debe tener al menos un acceso asignado',
        );
    }

    private async generarAliasUnico(nombre: string, apellidoPaterno: string): Promise<string> {
        const base = buildBaseAlias(nombre, apellidoPaterno);
        let alias    = base;
        let contador = 2;
        while (await this.usuarioRepository.existsBy({ usuario: alias })) {
            alias = `${base}${contador}`;
            contador++;
        }
        return alias;
    }

    private generarPasswordTemporal(): string {
        const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789!@#$%&';
        let pwd = '';
        pwd += 'ABCDEFGHJKLMNPQRSTUVWXYZ'[Math.floor(Math.random() * 24)];
        pwd += 'abcdefghjkmnpqrstuvwxyz'[Math.floor(Math.random() * 23)];
        pwd += '23456789'[Math.floor(Math.random() * 8)];
        pwd += '!@#$%&'[Math.floor(Math.random() * 6)];
        for (let i = pwd.length; i < 16; i++) {
            pwd += chars[Math.floor(Math.random() * chars.length)];
        }
        return pwd.split('').sort(() => Math.random() - 0.5).join('');
    }
}