/**
 * @file usuarios-auth.service.ts
 *
 * CAMBIOS RESPECTO A LA VERSIÓN ANTERIOR:
 *   - LogsService inyectado en el constructor.
 *   - Los métodos de mutación (crearUsuario, update, remove) reciben
 *     un objeto AuditoriaCtx con los datos del administrador que ejecuta
 *     la acción y la IP de origen, extraídos en el controlador.
 *   - Las llamadas a LogsService son fire-and-forget: se invocan con
 *     `void this.logsService.X()` sin await, para que un fallo de
 *     auditoría nunca interrumpa la operación de negocio principal.
 *   - El método interno `create()` (usado solo por AuthService en el
 *     registro público) NO lleva auditoría de aplicación porque es un
 *     flujo de auto-registro, no una acción administrativa.
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
// Se construye en el controlador, donde vive el objeto Request.
// Mantener esta interfaz aquí facilita el tipado sin acoplar el service a NestJS Request.

export interface AuditoriaCtx {
    /** ID del usuario administrador que ejecuta la acción */
    idAdmin:     number;
    /** Alias del administrador (log.nombreUsuario en el panel) */
    adminAlias:  string;
    /** IP del cliente extraída del Request en el controlador */
    ipOrigen:    string;
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
        private readonly logsService: LogsService,   // ← INYECTADO
    ) { }

    // ─── Utilidad interna: elimina contrasenia del objeto devuelto ─────────────

    private sanitize(u: Usuario): Omit<Usuario, 'contrasenia'> {
        const { contrasenia, ...rest } = u as Usuario & { contrasenia: string };
        return rest as Omit<Usuario, 'contrasenia'>;
    }

    // ─── Registro público (AuthService) — sin auditoría administrativa ─────────

    async create(data: CreateUsuarioDto): Promise<Usuario> {
        const usuario = new Usuario();
        usuario.correo      = data.correo;
        usuario.usuario     = data.usuario;
        usuario.contrasenia = await hashPassword(data.contrasenia);
        usuario.idRol       = data.idRol;
        return this.usuarioRepository.save(usuario);
    }

    // ─── Creación de usuario temporal (transaccional) — sin auditoría admin ───

    async createTemporal(data: CreateUsuarioTemporalDto, manager?: EntityManager): Promise<Usuario> {
        const repo      = manager ? manager.getRepository(Usuario) : this.usuarioRepository;
        const usuario   = new Usuario();
        usuario.usuario     = data.usuario;
        usuario.correo      = data.correo;
        usuario.contrasenia = await hashPassword(data.contrasenia);
        usuario.idRol       = RolesEnum.TEMPORAL;
        usuario.expiracion  = data.expiracion;
        return repo.save(usuario);
    }

    // ─── CU-02 a CU-05: Creación de usuario por administrador ─────────────────

    /**
     * Crea un usuario nuevo con alias autogenerado y contraseña temporal.
     * Registra el evento en el log de aplicación (fire-and-forget).
     *
     * @param dto          - Datos del formulario de creación
     * @param creadorIdRol - Rol del administrador que crea el usuario
     * @param auditoria    - Contexto del administrador + IP (lo provee el controlador)
     */
    async crearUsuario(
        dto:          CreateUsuarioNuevoDto,
        creadorIdRol: number,
        auditoria:    AuditoriaCtx,
    ): Promise<Omit<Usuario, 'contrasenia'>> {
        const alias       = await this.generarAliasUnico(dto.nombre, dto.apellidoPaterno);
        const tempPassword = this.generarPasswordTemporal();
        const hash        = await hashPassword(tempPassword);

        // CU-03/04: Calcular rol según permisos declarados
        let idRol: number;
        if (dto.tipoRol === 'admin') {
            idRol = this.calcularRolAdmin(
                dto.permisos?.panelUsuarios    ?? false,
                dto.permisos?.editarEmpresas   ?? false,
                dto.permisos?.formularioExterno ?? false,
                creadorIdRol === 1,
            );
        } else {
            // CU-05: senior si sin rubros específicos, junior si los tiene
            const esJunior = dto.rubrosAsignados && dto.rubrosAsignados.length > 0;
            idRol = esJunior ? 5 : 4;
        }

        // CU-01: Apellido completo
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
        });

        const guardado = await this.usuarioRepository.save(nuevoUsuario);

        // CU-05: Rubros para investigador junior
        if (idRol === 5 && dto.rubrosAsignados && dto.rubrosAsignados.length > 0) {
            const asignaciones = dto.rubrosAsignados.map((idRubro) => ({
                idUsuario: guardado.id,
                idRubro,
            }));
            await this.investigadorRubroRepository.save(asignaciones);
        }

        // CU-04/06: Email de bienvenida
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

        // ── Auditoría: fire-and-forget ────────────────────────────────────────
        // void garantiza que TypeScript no infiera una Promise no manejada.
        // El error ya se captura internamente en LogsService.registrar().
        void this.logsService.usuarioCreado({
            idAdministrador:     auditoria.idAdmin,
            nombreAdministrador: auditoria.adminAlias,
            idUsuarioNuevo:      guardado.id,
            nombreUsuarioNuevo:  `${dto.nombre} ${apellido}` ,
            rolAsignado:         idRol,
            ipOrigen:            auditoria.ipOrigen,
        });

        const { contrasenia, ...resultado } = guardado as Usuario & { contrasenia: string };
        return resultado;
    }

    // ─── Actualización de usuario ──────────────────────────────────────────────

    /**
     * Actualiza los campos de un usuario existente.
     * Registra los campos modificados en el log de aplicación (fire-and-forget).
     *
     * @param id        - ID del usuario a modificar
     * @param data      - Campos a actualizar
     * @param auditoria - Contexto del administrador + IP
     */
    async update(
        id:        number,
        data:      UpdateUsuarioDto,
        auditoria: AuditoriaCtx,
    ): Promise<Omit<Usuario, 'contrasenia'>> {
        const entity = await this.usuariosService.findOne(id, { throwException: true });

        // Rastrear qué campos cambian para el log
        const camposModificados: string[] = [];

        if (data.usuario && data.usuario !== entity!.usuario) {
            const repeated = await this.usuariosService.findByUsuario(data.usuario, { throwException: false });
            if (repeated && repeated.id !== id) {
                throw new ConflictException({ message: 'El nombre de usuario ya está en uso.' });
            }
            entity!.usuario = data.usuario;
            camposModificados.push('usuario');
        }

        if (data.correo && data.correo !== entity!.correo) {
            const repeatedEmail = await this.usuariosService.findOneByCorreo(data.correo, { throwException: false });
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

        // ── Auditoría: fire-and-forget ────────────────────────────────────────
        // Solo registramos si hubo cambios reales; evitamos logs vacíos.
        if (camposModificados.length > 0) {
            void this.logsService.usuarioModificado({
                idAdministrador:     auditoria.idAdmin,
                nombreAdministrador: auditoria.adminAlias,
                idUsuarioAfectado:   id,
                nombreUsuarioAfectado: entity!.usuario,
                camposModificados,
                ipOrigen:            auditoria.ipOrigen,
            });
        }

        return this.sanitize(updated);
    }

    // ─── Eliminación de usuario ────────────────────────────────────────────────

    /**
     * Realiza un soft-delete del usuario.
     * Registra el evento en el log de aplicación (fire-and-forget).
     *
     * @param id        - ID del usuario a eliminar
     * @param auditoria - Contexto del administrador + IP
     */
    async remove(id: number, auditoria: AuditoriaCtx): Promise<true> {
        const entity = await this.usuariosService.findOne(id, { throwException: true });
        await this.usuarioRepository.softDelete(id);

        // ── Auditoría: fire-and-forget ────────────────────────────────────────
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
            return 1; // SUPERADMIN
        }
        if (permisoUsuarios)        return 2; // ADMIN_RRHH
        if (permisoEmpresas)        return 3; // ADMIN_EMPRESAS
        if (permisoFormularioExterno) return 3; // ADMIN_EMPRESAS — solo formulario externo

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