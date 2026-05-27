/**
 * @file logs.service.ts (REFACTORIZADO — añadidos 4 métodos de Soft Validation)
 *
 * CAMBIOS RESPECTO A LA VERSIÓN ANTERIOR:
 * ─────────────────────────────────────────────────────────────────────────────
 * [NUEVO] registroVisitante()      — auto-registro público exitoso
 * [NUEVO] registroFallido()        — registro rechazado (alias/correo duplicado)
 * [NUEVO] verificacionEmailExitosa() — visitante verificó su correo por link
 * [NUEVO] verificacionEmailFallida() — token inválido o expirado
 *
 * Los 4 métodos siguen EXACTAMENTE el mismo patrón del resto del servicio:
 *   - Tipado estricto con interface params inline (sin `any`)
 *   - Delegan a this.registrar() — fire-and-forget con try/catch interno
 *   - Clasificados en TipoLog.SEGURIDAD (son eventos de identidad, no de negocio)
 *   - SEVERIDAD_POR_ACCION actualizado con los 2 nuevos casos de fallo (MEDIO)
 *
 * TODO LO DEMÁS ES IDÉNTICO A LA VERSIÓN ANTERIOR — no se tocó ningún método
 * existente para minimizar el riesgo de regresión.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccionLog, Log, TipoLog } from './log.entity';

// ─── DTOs internos ────────────────────────────────────────────────────────────

interface BaseLogDto {
    idUsuario?:     number | null;
    nombreUsuario?: string | null;
    ipOrigen?:      string | null;
    recurso?:       string | null;
    detalles?:      Record<string, unknown> | null;
    exitoso?:       boolean;
}

// ─── DTO de filtros recibidos desde el controlador ────────────────────────────

export interface FiltrosLogDto {
    usuario?:    string;
    accion?:     string;
    severidad?:  'ALTO' | 'MEDIO' | 'BAJO';
    entidad?:    string;
    fechaDesde?: string;
    fechaHasta?: string;
    page?:       number;
    limit?:      number;
}

// ─── Respuesta paginada ───────────────────────────────────────────────────────

export interface PaginatedLogsResult {
    data:  Log[];
    total: number;
    page:  number;
    limit: number;
}

// ─── Mapa de severidad por acción ─────────────────────────────────────────────
// La severidad NO se persiste en BD — se calcula en memoria al filtrar.

const SEVERIDAD_POR_ACCION: Partial<Record<AccionLog, 'ALTO' | 'MEDIO'>> = {
    [AccionLog.LOGIN_FALLIDO]:              'ALTO',
    [AccionLog.CUENTA_BLOQUEADA]:           'ALTO',
    [AccionLog.TOKEN_INVALIDO]:             'ALTO',
    [AccionLog.ACCESO_DENEGADO]:            'ALTO',
    [AccionLog.CUENTA_DESBLOQUEADA]:        'MEDIO',
    [AccionLog.RESET_PASSWORD_SOLICIT]:     'MEDIO',
    // [NUEVO] Eventos de registro y verificación con potencial de abuso
    [AccionLog.REGISTRO_FALLIDO]:           'MEDIO',
    [AccionLog.EMAIL_VERIFICACION_FAIL]:    'MEDIO',
};

function calcularSeveridad(accion: AccionLog): 'ALTO' | 'MEDIO' | 'BAJO' {
    return SEVERIDAD_POR_ACCION[accion] ?? 'BAJO';
}

function accionesPorSeveridad(severidad: 'ALTO' | 'MEDIO' | 'BAJO'): AccionLog[] {
    return (Object.entries(SEVERIDAD_POR_ACCION) as [AccionLog, 'ALTO' | 'MEDIO'][])
        .filter(([, sev]) => sev === severidad)
        .map(([accion]) => accion);
}

// ─── Servicio ─────────────────────────────────────────────────────────────────

@Injectable()
export class LogsService {
    private readonly logger = new Logger(LogsService.name);

    constructor(
        @InjectRepository(Log)
        private readonly logsRepo: Repository<Log>,
    ) {}

    // ══════════════════════════════════════════════════════════════════════════
    // ESCRITURA — fire-and-forget
    // ══════════════════════════════════════════════════════════════════════════

    private async registrar(
        tipo:   TipoLog,
        accion: AccionLog,
        datos:  BaseLogDto,
    ): Promise<void> {
        try {
            const log = this.logsRepo.create({
                tipo,
                accion,
                idUsuario:     datos.idUsuario     ?? null,
                nombreUsuario: datos.nombreUsuario ?? null,
                ipOrigen:      datos.ipOrigen      ?? null,
                recurso:       datos.recurso       ?? null,
                detalles:      datos.detalles      ?? null,
                exitoso:       datos.exitoso       ?? true,
            });
            await this.logsRepo.save(log);
        } catch (error: unknown) {
            const msg = error instanceof Error ? error.message : String(error);
            this.logger.error(`Error al persistir log [${tipo}:${accion}]: ${msg}`);
        }
    }

    // ─── Seguridad: autenticación ─────────────────────────────────────────────

    async loginExitoso(params: {
        idUsuario:     number;
        nombreUsuario: string;
        ipOrigen:      string;
    }): Promise<void> {
        await this.registrar(TipoLog.SEGURIDAD, AccionLog.LOGIN_EXITOSO, {
            idUsuario:     params.idUsuario,
            nombreUsuario: params.nombreUsuario,
            ipOrigen:      params.ipOrigen,
            exitoso:       true,
        });
    }

    async loginFallido(params: {
        nombreUsuario:     string;
        ipOrigen:          string;
        intentosRestantes: number;
    }): Promise<void> {
        await this.registrar(TipoLog.SEGURIDAD, AccionLog.LOGIN_FALLIDO, {
            nombreUsuario: params.nombreUsuario,
            ipOrigen:      params.ipOrigen,
            exitoso:       false,
            detalles: { intentosRestantes: params.intentosRestantes },
        });
    }

    async cuentaBloqueada(params: {
        idUsuario:     number;
        nombreUsuario: string;
        ipOrigen:      string;
        maxIntentos:   number;
    }): Promise<void> {
        await this.registrar(TipoLog.SEGURIDAD, AccionLog.CUENTA_BLOQUEADA, {
            idUsuario:     params.idUsuario,
            nombreUsuario: params.nombreUsuario,
            ipOrigen:      params.ipOrigen,
            exitoso:       false,
            detalles: {
                razon:       `Superó ${params.maxIntentos} intentos fallidos consecutivos`,
                maxIntentos: params.maxIntentos,
            },
        });
    }

    async cuentaDesbloqueada(params: {
        idUsuarioAfectado:     number;
        nombreUsuarioAfectado: string;
        idAdministrador?:      number | null;
        nombreAdministrador?:  string | null;
        motivo:                'AUTO_EXPIRACION' | 'ADMIN_MANUAL';
    }): Promise<void> {
        await this.registrar(TipoLog.SEGURIDAD, AccionLog.CUENTA_DESBLOQUEADA, {
            idUsuario:     params.idAdministrador    ?? null,
            nombreUsuario: params.nombreAdministrador ?? null,
            recurso:       `Usuario #${params.idUsuarioAfectado} (${params.nombreUsuarioAfectado})`,
            exitoso:       true,
            detalles: {
                motivo:                params.motivo,
                usuarioAfectadoId:     params.idUsuarioAfectado,
                usuarioAfectadoNombre: params.nombreUsuarioAfectado,
            },
        });
    }

    async resetPasswordSolicitado(params: {
        idUsuario:     number;
        nombreUsuario: string;
        ipOrigen:      string;
    }): Promise<void> {
        await this.registrar(TipoLog.SEGURIDAD, AccionLog.RESET_PASSWORD_SOLICIT, {
            idUsuario:     params.idUsuario,
            nombreUsuario: params.nombreUsuario,
            ipOrigen:      params.ipOrigen,
            exitoso:       true,
        });
    }

    async resetPasswordCompletado(params: {
        idUsuario:     number;
        nombreUsuario: string;
        ipOrigen:      string;
    }): Promise<void> {
        await this.registrar(TipoLog.SEGURIDAD, AccionLog.RESET_PASSWORD_OK, {
            idUsuario:     params.idUsuario,
            nombreUsuario: params.nombreUsuario,
            ipOrigen:      params.ipOrigen,
            exitoso:       true,
        });
    }

    async accesoDenegado(params: {
        idUsuario:          number;
        nombreUsuario:      string;
        ipOrigen:           string;
        endpoint:           string;
        permisosRequeridos: string[];
    }): Promise<void> {
        await this.registrar(TipoLog.SEGURIDAD, AccionLog.ACCESO_DENEGADO, {
            idUsuario:     params.idUsuario,
            nombreUsuario: params.nombreUsuario,
            ipOrigen:      params.ipOrigen,
            exitoso:       false,
            detalles: {
                endpoint:           params.endpoint,
                permisosRequeridos: params.permisosRequeridos,
            },
        });
    }

    // ─── Seguridad: registro público y verificación de email ─────────────────
    //
    // Estos 4 métodos son NUEVOS. Se clasifican como TipoLog.SEGURIDAD porque
    // pertenecen al ciclo de identidad del usuario (quién puede entrar al
    // sistema), no a acciones de negocio sobre datos.

    /**
     * Registro público exitoso: un visitante creó su cuenta correctamente.
     * exitoso=true — aparece en el panel como evento informativo (severidad BAJO).
     */
    async registroVisitante(params: {
        idUsuario:     number;
        nombreUsuario: string;
        ipOrigen:      string;
    }): Promise<void> {
        await this.registrar(TipoLog.SEGURIDAD, AccionLog.REGISTRO_VISITANTE, {
            idUsuario:     params.idUsuario,
            nombreUsuario: params.nombreUsuario,
            ipOrigen:      params.ipOrigen,
            exitoso:       true,
        });
    }

    /**
     * Intento de registro rechazado por alias o correo duplicado.
     * exitoso=false — severidad MEDIO (podría indicar enumeración de usuarios).
     * IMPORTANTE: idUsuario es null porque el usuario NO llegó a crearse.
     * El alias/correo intentado va en detalles para auditoría interna,
     * pero NUNCA se expone al cliente (anti user-enumeration).
     */
    async registroFallido(params: {
        aliasIntentado:  string;
        correoIntentado: string;
        ipOrigen:        string;
        motivo:          'ALIAS_DUPLICADO' | 'CORREO_DUPLICADO';
    }): Promise<void> {
        await this.registrar(TipoLog.SEGURIDAD, AccionLog.REGISTRO_FALLIDO, {
            idUsuario:     null,
            nombreUsuario: params.aliasIntentado,
            ipOrigen:      params.ipOrigen,
            exitoso:       false,
            detalles: {
                motivo:          params.motivo,
                correoIntentado: params.correoIntentado,
            },
        });
    }

    /**
     * Verificación de email exitosa: el visitante hizo click en el link
     * y demostró posesión del correo. isEmailVerified pasa a true.
     * exitoso=true — severidad BAJO.
     */
    async verificacionEmailExitosa(params: {
        idUsuario:     number;
        nombreUsuario: string;
        ipOrigen:      string;
    }): Promise<void> {
        await this.registrar(TipoLog.SEGURIDAD, AccionLog.EMAIL_VERIFICADO, {
            idUsuario:     params.idUsuario,
            nombreUsuario: params.nombreUsuario,
            ipOrigen:      params.ipOrigen,
            exitoso:       true,
        });
    }

    /**
     * Verificación de email fallida: token inexistente, ya consumido o
     * malformado. exitoso=false — severidad MEDIO.
     * idUsuario es null porque no podemos identificar al solicitante.
     * El motivo se almacena en detalles para el panel de auditoría.
     */
    async verificacionEmailFallida(params: {
        ipOrigen: string;
        motivo:   'TOKEN_MALFORMADO' | 'TOKEN_NO_ENCONTRADO';
    }): Promise<void> {
        await this.registrar(TipoLog.SEGURIDAD, AccionLog.EMAIL_VERIFICACION_FAIL, {
            idUsuario:     null,
            nombreUsuario: null,
            ipOrigen:      params.ipOrigen,
            exitoso:       false,
            detalles: { motivo: params.motivo },
        });
    }

    // ─── Aplicación ───────────────────────────────────────────────────────────

    async empresaCreada(params: {
        idUsuario:     number;
        nombreUsuario: string;
        idEmpresa:     number;
        nombreEmpresa: string;
        ipOrigen:      string;
    }): Promise<void> {
        await this.registrar(TipoLog.APLICACION, AccionLog.EMPRESA_CREADA, {
            idUsuario:     params.idUsuario,
            nombreUsuario: params.nombreUsuario,
            ipOrigen:      params.ipOrigen,
            recurso:       `Empresa #${params.idEmpresa} (${params.nombreEmpresa})`,
            exitoso:       true,
        });
    }

    async empresaModificada(params: {
        idUsuario:         number;
        nombreUsuario:     string;
        idEmpresa:         number;
        nombreEmpresa:     string;
        camposModificados: string[];
        ipOrigen:          string;
    }): Promise<void> {
        await this.registrar(TipoLog.APLICACION, AccionLog.EMPRESA_MODIFICADA, {
            idUsuario:     params.idUsuario,
            nombreUsuario: params.nombreUsuario,
            ipOrigen:      params.ipOrigen,
            recurso:       `Empresa #${params.idEmpresa} (${params.nombreEmpresa})`,
            exitoso:       true,
            detalles: { camposModificados: params.camposModificados },
        });
    }

    async empresaEliminada(params: {
        idUsuario:     number;
        nombreUsuario: string;
        idEmpresa:     number;
        nombreEmpresa: string;
        ipOrigen:      string;
    }): Promise<void> {
        await this.registrar(TipoLog.APLICACION, AccionLog.EMPRESA_ELIMINADA, {
            idUsuario:     params.idUsuario,
            nombreUsuario: params.nombreUsuario,
            ipOrigen:      params.ipOrigen,
            recurso:       `Empresa #${params.idEmpresa} (${params.nombreEmpresa})`,
            exitoso:       true,
        });
    }

    async usuarioCreado(params: {
        idAdministrador:     number;
        nombreAdministrador: string;
        idUsuarioNuevo:      number;
        nombreUsuarioNuevo:  string;
        rolAsignado:         number;
        ipOrigen:            string;
    }): Promise<void> {
        await this.registrar(TipoLog.APLICACION, AccionLog.USUARIO_CREADO, {
            idUsuario:     params.idAdministrador,
            nombreUsuario: params.nombreAdministrador,
            ipOrigen:      params.ipOrigen,
            recurso:       `Usuario #${params.idUsuarioNuevo} (${params.nombreUsuarioNuevo})`,
            exitoso:       true,
            detalles:      { rolAsignado: params.rolAsignado },
        });
    }

    async usuarioModificado(params: {
        idAdministrador:       number;
        nombreAdministrador:   string;
        idUsuarioAfectado:     number;
        nombreUsuarioAfectado: string;
        camposModificados:     string[];
        ipOrigen:              string;
    }): Promise<void> {
        await this.registrar(TipoLog.APLICACION, AccionLog.USUARIO_MODIFICADO, {
            idUsuario:     params.idAdministrador,
            nombreUsuario: params.nombreAdministrador,
            ipOrigen:      params.ipOrigen,
            recurso:       `Usuario #${params.idUsuarioAfectado} (${params.nombreUsuarioAfectado})`,
            exitoso:       true,
            detalles: { camposModificados: params.camposModificados },
        });
    }

    async usuarioEliminado(params: {
        idAdministrador:       number;
        nombreAdministrador:   string;
        idUsuarioAfectado:     number;
        nombreUsuarioAfectado: string;
        ipOrigen:              string;
    }): Promise<void> {
        await this.registrar(TipoLog.APLICACION, AccionLog.USUARIO_ELIMINADO, {
            idUsuario:     params.idAdministrador,
            nombreUsuario: params.nombreAdministrador,
            ipOrigen:      params.ipOrigen,
            recurso:       `Usuario #${params.idUsuarioAfectado} (${params.nombreUsuarioAfectado})`,
            exitoso:       true,
        });
    }

    async riesgoCreado(params: {
        idUsuario:     number;
        nombreUsuario: string;
        idRiesgo:      number;
        descripcion:   string;
        nivelRiesgo:   string;
        ipOrigen:      string;
    }): Promise<void> {
        await this.registrar(TipoLog.APLICACION, AccionLog.RIESGO_CREADO, {
            idUsuario:     params.idUsuario,
            nombreUsuario: params.nombreUsuario,
            ipOrigen:      params.ipOrigen,
            recurso:       `Riesgo #${params.idRiesgo}`,
            exitoso:       true,
            detalles: {
                descripcion: params.descripcion,
                nivelRiesgo: params.nivelRiesgo,
            },
        });
    }

    async riesgoModificado(params: {
        idUsuario:     number;
        nombreUsuario: string;
        idRiesgo:      number;
        nivelRiesgo:   string;
        ipOrigen:      string;
    }): Promise<void> {
        await this.registrar(TipoLog.APLICACION, AccionLog.RIESGO_MODIFICADO, {
            idUsuario:     params.idUsuario,
            nombreUsuario: params.nombreUsuario,
            ipOrigen:      params.ipOrigen,
            recurso:       `Riesgo #${params.idRiesgo}`,
            exitoso:       true,
            detalles:      { nivelRiesgo: params.nivelRiesgo },
        });
    }

    async riesgoEliminado(params: {
        idUsuario:     number;
        nombreUsuario: string;
        idRiesgo:      number;
        ipOrigen:      string;
    }): Promise<void> {
        await this.registrar(TipoLog.APLICACION, AccionLog.RIESGO_ELIMINADO, {
            idUsuario:     params.idUsuario,
            nombreUsuario: params.nombreUsuario,
            ipOrigen:      params.ipOrigen,
            recurso:       `Riesgo #${params.idRiesgo}`,
            exitoso:       true,
        });
    }

    // ══════════════════════════════════════════════════════════════════════════
    // LECTURA — endpoints de auditoría con filtros y paginación
    // ══════════════════════════════════════════════════════════════════════════

    async findLogsSeguridad(filtros: FiltrosLogDto): Promise<PaginatedLogsResult> {
        const page  = Math.max(1, filtros.page  ?? 1);
        const limit = Math.min(100, Math.max(1, filtros.limit ?? 20));
        const skip  = (page - 1) * limit;

        const qb = this.logsRepo
            .createQueryBuilder('log')
            .where('log.tipo = :tipo', { tipo: TipoLog.SEGURIDAD });

        if (filtros.usuario?.trim()) {
            qb.andWhere('LOWER(log.nombreUsuario) LIKE LOWER(:usuario)', {
                usuario: `%${filtros.usuario.trim()}%`,
            });
        }

        if (filtros.accion?.trim()) {
            qb.andWhere('log.accion = :accion', { accion: filtros.accion.trim() });
        }

        if (filtros.severidad) {
            const acciones = accionesPorSeveridad(filtros.severidad);
            if (acciones.length > 0) {
                qb.andWhere('log.accion IN (:...accionesSev)', { accionesSev: acciones });
            } else {
                const accionesAltoMedio = [
                    ...accionesPorSeveridad('ALTO'),
                    ...accionesPorSeveridad('MEDIO'),
                ];
                if (accionesAltoMedio.length > 0) {
                    qb.andWhere('log.accion NOT IN (:...accionesExcluidas)', {
                        accionesExcluidas: accionesAltoMedio,
                    });
                }
            }
        }

        if (filtros.fechaDesde) {
            qb.andWhere('log.creadoEn >= :desde', { desde: new Date(filtros.fechaDesde) });
        }
        if (filtros.fechaHasta) {
            const hasta = new Date(filtros.fechaHasta);
            hasta.setHours(23, 59, 59, 999);
            qb.andWhere('log.creadoEn <= :hasta', { hasta });
        }

        qb.orderBy('log.creadoEn', 'DESC').skip(skip).take(limit);

        const [rows, total] = await qb.getManyAndCount();
        return { data: rows, total, page, limit };
    }

    async findLogsAplicacion(filtros: FiltrosLogDto): Promise<PaginatedLogsResult> {
        const page  = Math.max(1, filtros.page  ?? 1);
        const limit = Math.min(100, Math.max(1, filtros.limit ?? 20));
        const skip  = (page - 1) * limit;

        const qb = this.logsRepo
            .createQueryBuilder('log')
            .where('log.tipo = :tipo', { tipo: TipoLog.APLICACION });

        if (filtros.usuario?.trim()) {
            qb.andWhere('LOWER(log.nombreUsuario) LIKE LOWER(:usuario)', {
                usuario: `%${filtros.usuario.trim()}%`,
            });
        }

        if (filtros.accion?.trim()) {
            qb.andWhere('log.accion = :accion', { accion: filtros.accion.trim() });
        }

        if (filtros.entidad?.trim()) {
            qb.andWhere('LOWER(log.recurso) LIKE LOWER(:entidad)', {
                entidad: `%${filtros.entidad.trim()}%`,
            });
        }

        if (filtros.fechaDesde) {
            qb.andWhere('log.creadoEn >= :desde', { desde: new Date(filtros.fechaDesde) });
        }
        if (filtros.fechaHasta) {
            const hasta = new Date(filtros.fechaHasta);
            hasta.setHours(23, 59, 59, 999);
            qb.andWhere('log.creadoEn <= :hasta', { hasta });
        }

        qb.orderBy('log.creadoEn', 'DESC').skip(skip).take(limit);

        const [rows, total] = await qb.getManyAndCount();
        return { data: rows, total, page, limit };
    }

    async historialUsuario(idUsuario: number, limit = 50): Promise<Log[]> {
        return this.logsRepo.find({
            where: { idUsuario },
            order: { creadoEn: 'DESC' },
            take:  limit,
        });
    }

    async findOne(id: number): Promise<Log | null> {
        return this.logsRepo.findOne({ where: { id } });
    }
}