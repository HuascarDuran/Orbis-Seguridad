/**
 * @file logs.controller.ts
 *
 * CONTRATO DE RESPUESTA (para todos los endpoints de lista):
 *   { data: Log[], total: number, page: number, limit: number }
 *
 * SEGMENTACIÓN DE ACCESO:
 *   GET /api/logs/seguridad       → roles [1, 2]          (SUPERADMIN, ADMIN_RRHH)
 *   GET /api/logs/aplicacion      → roles [1, 2, 3]       (+ ADMIN_EMPRESAS)
 *   GET /api/logs/usuario/:id     → roles [1, 2]
 *   GET /api/logs/:id             → roles [1, 2, 3]
 *   GET /api/logs/export/:tipo    → roles [1]             (solo SUPERADMIN)
 *
 * Los roles se pasan directamente al factory JwtGuard() en cada endpoint,
 * siguiendo el patrón ya establecido en el proyecto.
 *
 * QUERY PARAMS ACEPTADOS:
 *   page        number  (base 1, default 1)
 *   limit       number  (default 20, máx 100)
 *   usuario     string  (búsqueda parcial sobre nombreUsuario)
 *   accion      string  (valor exacto del enum AccionLog)
 *   severidad   string  'ALTO' | 'MEDIO' | 'BAJO'  (solo seguridad)
 *   entidad     string  (búsqueda parcial sobre recurso, solo aplicación)
 *   fechaDesde  string  ISO 8601 date, ej: '2026-05-01'
 *   fechaHasta  string  ISO 8601 date, ej: '2026-05-31'
 */

import {
    Controller,
    Get,
    NotFoundException,
    Param,
    ParseIntPipe,
    Query,
    Res,
    UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { AuthRolesGuard as JwtGuard } from '../../app/services/auth/guards/auth-roles.guard';
import { FiltrosLogDto, LogsService, PaginatedLogsResult } from './logs.service';
import { Log, TipoLog } from './log.entity';

// ─── DTO de query params ──────────────────────────────────────────────────────
// Se reciben como strings desde HTTP; se convierten aquí antes de pasar al service.

interface RawQueryParams {
    page?:       string;
    limit?:      string;
    usuario?:    string;
    accion?:     string;
    severidad?:  string;
    entidad?:    string;
    fechaDesde?: string;
    fechaHasta?: string;
}

/**
 * Parsea y valida los query params recibidos del frontend.
 * Descarta valores vacíos, 'all' y convierte page/limit a número.
 */
function parsearFiltros(raw: RawQueryParams): FiltrosLogDto {
    const limpiar = (v: string | undefined): string | undefined =>
        v && v.trim() !== '' && v !== 'all' ? v.trim() : undefined;

    return {
        page:       raw.page  ? Math.max(1, parseInt(raw.page,  10) || 1) : 1,
        limit:      raw.limit ? Math.min(100, Math.max(1, parseInt(raw.limit, 10) || 20)) : 20,
        usuario:    limpiar(raw.usuario),
        accion:     limpiar(raw.accion),
        severidad:  limpiar(raw.severidad) as FiltrosLogDto['severidad'] | undefined,
        entidad:    limpiar(raw.entidad),
        fechaDesde: limpiar(raw.fechaDesde),
        fechaHasta: limpiar(raw.fechaHasta),
    };
}

// ─── Controlador ──────────────────────────────────────────────────────────────

@ApiTags('Logs de Auditoría')
@Controller('api/logs')
export class LogsController {
    constructor(private readonly logsService: LogsService) {}

    // ── GET /api/logs/seguridad ───────────────────────────────────────────────
    // Acceso: SUPERADMIN (1) y ADMIN_RRHH (2)

    @ApiOperation({ summary: 'Logs de seguridad con filtros y paginación' })
    @ApiQuery({ name: 'page',       required: false, type: Number })
    @ApiQuery({ name: 'limit',      required: false, type: Number })
    @ApiQuery({ name: 'usuario',    required: false, type: String })
    @ApiQuery({ name: 'accion',     required: false, type: String })
    @ApiQuery({ name: 'severidad',  required: false, enum: ['ALTO', 'MEDIO', 'BAJO'] })
    @ApiQuery({ name: 'fechaDesde', required: false, type: String })
    @ApiQuery({ name: 'fechaHasta', required: false, type: String })
    @UseGuards(JwtGuard([1, 2]))
    @Get('seguridad')
    async getLogsSeguridad(
        @Query() query: RawQueryParams,
    ): Promise<PaginatedLogsResult> {
        const filtros = parsearFiltros(query);
        return this.logsService.findLogsSeguridad(filtros);
    }

    // ── GET /api/logs/aplicacion ──────────────────────────────────────────────
    // Acceso: SUPERADMIN (1), ADMIN_RRHH (2) y ADMIN_EMPRESAS (3)

    @ApiOperation({ summary: 'Logs de aplicación con filtros y paginación' })
    @ApiQuery({ name: 'page',       required: false, type: Number })
    @ApiQuery({ name: 'limit',      required: false, type: Number })
    @ApiQuery({ name: 'usuario',    required: false, type: String })
    @ApiQuery({ name: 'accion',     required: false, type: String })
    @ApiQuery({ name: 'entidad',    required: false, type: String })
    @ApiQuery({ name: 'fechaDesde', required: false, type: String })
    @ApiQuery({ name: 'fechaHasta', required: false, type: String })
    @UseGuards(JwtGuard([1, 2, 3]))
    @Get('aplicacion')
    async getLogsAplicacion(
        @Query() query: RawQueryParams,
    ): Promise<PaginatedLogsResult> {
        const filtros = parsearFiltros(query);
        return this.logsService.findLogsAplicacion(filtros);
    }

    // ── GET /api/logs/usuario/:id ─────────────────────────────────────────────
    // Acceso: SUPERADMIN (1) y ADMIN_RRHH (2)
    // IMPORTANTE: debe declararse ANTES de /:id para que NestJS no lo
    // interprete como un parámetro numérico de ruta.

    @ApiOperation({ summary: 'Historial de auditoría de un usuario específico' })
    @ApiQuery({ name: 'limit', required: false, type: Number })
    @UseGuards(JwtGuard([1, 2]))
    @Get('usuario/:id')
    async getHistorialUsuario(
        @Param('id', ParseIntPipe) idUsuario: number,
        @Query('limit') limit?: string,
    ): Promise<Log[]> {
        const limitNum = limit ? Math.min(100, Math.max(1, parseInt(limit, 10) || 50)) : 50;
        return this.logsService.historialUsuario(idUsuario, limitNum);
    }

    // ── GET /api/logs/export/:tipo ────────────────────────────────────────────
    // Acceso: solo SUPERADMIN (1)
    // Genera y descarga un CSV con los logs filtrados.

    @ApiOperation({ summary: 'Exportar logs a CSV (solo SUPERADMIN)' })
    @UseGuards(JwtGuard([1]))
    @Get('export/:tipo')
    async exportarLogs(
        @Param('tipo') tipo: string,
        @Query() query: RawQueryParams,
        @Res() res: Response,
    ): Promise<void> {
        const filtros = parsearFiltros({ ...query, limit: '10000' }); // exportar sin límite operativo

        let resultado: PaginatedLogsResult;

        if (tipo === 'seguridad') {
            resultado = await this.logsService.findLogsSeguridad(filtros);
        } else if (tipo === 'aplicacion') {
            resultado = await this.logsService.findLogsAplicacion(filtros);
        } else {
            res.status(400).json({ message: 'Tipo de log inválido. Use "seguridad" o "aplicacion".' });
            return;
        }

        const csv = generarCsv(resultado.data);
        const fecha = new Date().toISOString().slice(0, 10);
        const nombreArchivo = `orbis-logs-${tipo}-${fecha}.csv`;

        res.setHeader('Content-Type', 'text/csv; charset=utf-8');
        res.setHeader('Content-Disposition', `attachment; filename="${nombreArchivo}"`);
        res.send('\uFEFF' + csv); // BOM para Excel en UTF-8
    }

    // ── GET /api/logs/:id ─────────────────────────────────────────────────────
    // Acceso: SUPERADMIN (1), ADMIN_RRHH (2) y ADMIN_EMPRESAS (3)
    // IMPORTANTE: debe declararse AL FINAL para que no capture rutas nombradas.

    @ApiOperation({ summary: 'Detalle completo de un registro de log' })
    @UseGuards(JwtGuard([1, 2, 3]))
    @Get(':id')
    async getLogById(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<Log> {
        const log = await this.logsService.findOne(id);
        if (!log) {
            throw new NotFoundException(`Log con ID ${id} no encontrado.`);
        }
        return log;
    }
}

// ─── Utilidad de exportación CSV ─────────────────────────────────────────────
// Vive aquí (y no en el service) porque es responsabilidad de presentación:
// el service no debe saber nada del formato de salida HTTP.

function escaparCsv(valor: unknown): string {
    if (valor === null || valor === undefined) return '';
    const str = typeof valor === 'object' ? JSON.stringify(valor) : String(valor);
    // Si contiene coma, salto de línea o comillas, se encierra en comillas dobles
    if (str.includes(',') || str.includes('\n') || str.includes('"')) {
        return `"${str.replace(/"/g, '""')}"`;
    }
    return str;
}

function generarCsv(logs: Log[]): string {
    if (logs.length === 0) return 'Sin registros\n';

    const CABECERAS = [
        'ID', 'Tipo', 'Acción', 'Usuario', 'IP Origen',
        'Recurso', 'Exitoso', 'Detalles', 'Fecha y hora',
    ];

    const filas = logs.map((log) => [
        log.id,
        log.tipo,
        log.accion,
        log.nombreUsuario ?? '',
        log.ipOrigen      ?? '',
        log.recurso       ?? '',
        log.exitoso ? 'Sí' : 'No',
        log.detalles ? JSON.stringify(log.detalles) : '',
        log.creadoEn ? new Date(log.creadoEn).toISOString() : '',
    ].map(escaparCsv).join(','));

    return [CABECERAS.join(','), ...filas].join('\n');
}