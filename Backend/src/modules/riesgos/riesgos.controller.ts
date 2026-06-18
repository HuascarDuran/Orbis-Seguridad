/**
 * @file riesgos.controller.ts
 * @description Controller del Módulo de Análisis de Riesgos.
 *
 * RBAC: Los endpoints de escritura requieren Permiso.RIESGOS_CREAR/EDITAR/ELIMINAR.
 * El nivel de riesgo NUNCA viene del cliente; se calcula en el servidor.
 * Trazabilidad: create y update registran usuario_id, usuario_nombre e ip_origen.
 */

import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Req,
    UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { AuthRolesGuard as JwtGuard } from '../../app/services/auth/guards/auth-roles.guard';
import { PermisosGuard } from '../../app/services/auth/permisos.guard';
import { RequierePermisos } from '../../shared/decorators/requiere-permisos.decorator';
import { Permiso } from 'src/shared/constants/roles.const';
import { RiesgosService, AuditoriaMeta } from './riesgos.service';
import { CreateRiesgoDto } from './create-riesgo.dto';
import { UpdateRiesgoDto } from './update-riesgo.dto';

/** Forma del payload inyectado por JwtStrategy en request.user */
interface UsuarioRequest {
    sub:      number;
    usuario:  string;
    idRol:    number;
    must_change_password: boolean;
}

/** Extrae la IP real del cliente con soporte para proxies (X-Forwarded-For) */
function extractIp(req: Request): string {
    const forwarded = req.headers['x-forwarded-for'];
    if (typeof forwarded === 'string') return forwarded.split(',')[0].trim();
    return req.socket?.remoteAddress ?? 'desconocida';
}

/** Construye el objeto AuditoriaMeta a partir de la request autenticada */
function buildAuditoria(req: Request & { user: UsuarioRequest }): AuditoriaMeta {
    return {
        idUsuario:     req.user.sub,
        nombreUsuario: req.user.usuario,
        ipOrigen:      extractIp(req),
    };
}

@ApiTags('Análisis de Riesgos')
@UseGuards(JwtGuard([]), PermisosGuard)
@Controller('api/riesgos')
export class RiesgosController {
    constructor(private readonly riesgosService: RiesgosService) {}

    @ApiOperation({ summary: 'Registrar nuevo riesgo (registra auditoría)' })
    @RequierePermisos(Permiso.RIESGOS_CREAR)
    @Post()
    create(
        @Body() dto: CreateRiesgoDto,
        @Req() req: Request & { user: UsuarioRequest },
    ) {
        return this.riesgosService.create(dto, buildAuditoria(req));
    }

    @ApiOperation({ summary: 'Listar todos los riesgos' })
    @RequierePermisos(Permiso.RIESGOS_LEER)
    @Get()
    findAll() {
        return this.riesgosService.findAll();
    }

    @ApiOperation({ summary: 'Resumen de riesgos residuales por nivel (dashboard)' })
    @RequierePermisos(Permiso.RIESGOS_LEER, Permiso.DASHBOARD_LEER)
    @Get('resumen')
    resumen() {
        // Movido al servicio: lógica de negocio fuera del controller
        return this.riesgosService.resumenPorNivel();
    }

    @ApiOperation({ summary: 'Obtener todos los activos de información' })
    @RequierePermisos(Permiso.RIESGOS_LEER)
    @Get('activos')
    findAllActivos() {
        return this.riesgosService.findAllActivos();
    }

    @ApiOperation({ summary: 'Obtener todas las amenazas/vulnerabilidades' })
    @RequierePermisos(Permiso.RIESGOS_LEER)
    @Get('amenazas')
    findAllAmenazas() {
        return this.riesgosService.findAllAmenazas();
    }

    @ApiOperation({ summary: 'Obtener detalle de un riesgo' })
    @RequierePermisos(Permiso.RIESGOS_LEER)
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.riesgosService.findOne(id);
    }

    @ApiOperation({ summary: 'Actualizar riesgo (recalcula nivel + registra auditoría)' })
    @RequierePermisos(Permiso.RIESGOS_EDITAR)
    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() dto: UpdateRiesgoDto,
        @Req() req: Request & { user: UsuarioRequest },
    ) {
        return this.riesgosService.update(id, dto, buildAuditoria(req));
    }

    @ApiOperation({ summary: 'Eliminar riesgo' })
    @RequierePermisos(Permiso.RIESGOS_ELIMINAR)
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.riesgosService.remove(id);
    }
}