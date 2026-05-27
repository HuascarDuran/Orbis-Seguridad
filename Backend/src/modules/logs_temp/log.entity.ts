/**
 * @file log.entity.ts
 * @description Entidad de auditoría inmutable para el sistema de Dual Logging.
 *
 * DISEÑO DE SEGURIDAD:
 * - Sin @UpdateDateColumn ni @DeleteDateColumn: los registros NO se modifican ni eliminan.
 * - El campo `idUsuario` es nullable para soportar eventos de sistema (sin actor humano).
 * - `ipOrigen` se almacena para trazabilidad forense; debe ser sanitizado antes de persistir.
 * - `detalles` es JSONB para flexibilidad sin romper el esquema.
 */

import {
    Column,
    CreateDateColumn,
    Entity,
    Index,
    PrimaryGeneratedColumn,
} from 'typeorm';

// ─── Tipo de log (discriminante principal) ───────────────────────────────────

export enum TipoLog {
    /** Eventos funcionales del negocio */
    APLICACION = 'APLICACION',
    /** Eventos de seguridad y sesión */
    SEGURIDAD  = 'SEGURIDAD',
}

// ─── Catálogo de acciones auditables ─────────────────────────────────────────

export enum AccionLog {
    // — Seguridad / Sesión —
    LOGIN_EXITOSO          = 'LOGIN_EXITOSO',
    LOGIN_FALLIDO          = 'LOGIN_FALLIDO',
    LOGOUT                 = 'LOGOUT',
    CUENTA_BLOQUEADA       = 'CUENTA_BLOQUEADA',
    CUENTA_DESBLOQUEADA    = 'CUENTA_DESBLOQUEADA',
    RESET_PASSWORD_SOLICIT = 'RESET_PASSWORD_SOLICITADO',
    RESET_PASSWORD_OK      = 'RESET_PASSWORD_COMPLETADO',
    CAMBIO_PASSWORD        = 'CAMBIO_PASSWORD',
    TOKEN_INVALIDO         = 'TOKEN_INVALIDO',

    // — Usuarios —
    USUARIO_CREADO         = 'USUARIO_CREADO',
    USUARIO_MODIFICADO     = 'USUARIO_MODIFICADO',
    USUARIO_ELIMINADO      = 'USUARIO_ELIMINADO',
    ROL_CAMBIADO           = 'ROL_CAMBIADO',
    REGISTRO_VISITANTE      = 'REGISTRO_VISITANTE',
    REGISTRO_FALLIDO        = 'REGISTRO_FALLIDO',
    EMAIL_VERIFICADO        = 'EMAIL_VERIFICADO',
    EMAIL_VERIFICACION_FAIL = 'EMAIL_VERIFICACION_FAIL',

    // — Empresas —
    EMPRESA_CREADA         = 'EMPRESA_CREADA',
    EMPRESA_MODIFICADA     = 'EMPRESA_MODIFICADA',
    EMPRESA_ELIMINADA      = 'EMPRESA_ELIMINADA',

    // — Riesgos —
    RIESGO_CREADO          = 'RIESGO_CREADO',
    RIESGO_MODIFICADO      = 'RIESGO_MODIFICADO',
    RIESGO_ELIMINADO       = 'RIESGO_ELIMINADO',

    // — Sistema —
    ACCESO_DENEGADO        = 'ACCESO_DENEGADO',
    ERROR_SISTEMA          = 'ERROR_SISTEMA',
}

// ─── Entidad ──────────────────────────────────────────────────────────────────

@Entity('logs_auditoria')
@Index(['tipo', 'creadoEn'])            // Consultas de dashboard por tipo y rango de fecha
@Index(['idUsuario', 'creadoEn'])       // Historial de un usuario específico
@Index(['accion'])                       // Búsqueda por tipo de evento
export class Log {
    @PrimaryGeneratedColumn({ name: 'id_log' })
    id!: number;

    /**
     * Discriminante principal: APLICACION | SEGURIDAD
     * Permite filtrar sin full-table-scan gracias al índice compuesto.
     */
    @Column({ type: 'enum', enum: TipoLog, name: 'tipo' })
    tipo!: TipoLog;

    /**
     * Acción específica auditada. Obligatorio.
     */
    @Column({ type: 'enum', enum: AccionLog, name: 'accion' })
    accion!: AccionLog;

    /**
     * ID del usuario que ejecutó la acción.
     * Nullable para eventos sin actor (p.ej. tareas programadas o errores de sistema).
     */
    @Column({ type: 'int', name: 'id_usuario', nullable: true })
    idUsuario!: number | null;

    /**
     * Nombre de usuario (snapshot inmutable). Se desnormaliza deliberadamente:
     * si el usuario es eliminado, el log conserva el contexto histórico.
     */
    @Column({ type: 'varchar', length: 100, name: 'nombre_usuario', nullable: true })
    nombreUsuario!: string | null;

    /**
     * IP de origen de la petición HTTP.
     * Requiere que el backend esté detrás de un proxy de confianza (trust proxy).
     */
    @Column({ type: 'varchar', length: 45, name: 'ip_origen', nullable: true })
    ipOrigen!: string | null;

    /**
     * Recurso afectado (p.ej. 'Empresa #42', 'Usuario octavio.luna').
     */
    @Column({ type: 'varchar', length: 255, name: 'recurso', nullable: true })
    recurso!: string | null;

    /**
     * Metadatos adicionales en formato JSONB.
     * NUNCA almacenar contraseñas, tokens o datos personales sensibles aquí.
     */
    @Column({ type: 'jsonb', name: 'detalles', nullable: true })
    detalles!: Record<string, unknown> | null;

    /**
     * Resultado de la operación.
     */
    @Column({ type: 'boolean', name: 'exitoso', default: true })
    exitoso!: boolean;

    /**
     * Timestamp inmutable. Sin @UpdateDateColumn por diseño de seguridad.
     */
    @CreateDateColumn({ name: 'creado_en' })
    creadoEn!: Date;
}
