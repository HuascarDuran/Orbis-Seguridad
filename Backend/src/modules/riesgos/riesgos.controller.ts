/**
 * @file riesgos.controller.ts
 * @description Controller del Módulo de Análisis de Riesgos.
 *
 * RBAC: Los endpoints de escritura requieren Permiso.RIESGOS_CREAR/EDITAR/ELIMINAR.
 * El nivel de riesgo NUNCA viene del cliente; se calcula en el servidor.
 */

import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    Query,
    Req,
    UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { AuthRolesGuard as JwtGuard } from '../../app/services/auth/guards/auth-roles.guard';
import { PermisosGuard } from '../../app/services/auth/permisos.guard';
import { RequierePermisos } from '../../shared/decorators/requiere-permisos.decorator';
import { Permiso } from 'src/shared/constants/roles.const';
import { RiesgosService } from './riesgos.service';
import { CreateRiesgoDto, UpdateRiesgoDto } from './riesgo.dto';
import { EstadoRiesgo, NivelRiesgo } from './riesgo.entity';

/** Forma del objeto inyectado por JwtStrategy */
interface UsuarioRequest {
    sub: number;
    usuario: string;
}

/** Extrae la IP del cliente con soporte para proxies (X-Forwarded-For) */
function extractIp(req: Request): string {
    const forwarded = req.headers['x-forwarded-for'];
    if (typeof forwarded === 'string') return forwarded.split(',')[0].trim();
    return req.socket?.remoteAddress ?? 'desconocida';
}

@ApiTags('Análisis de Riesgos')
@UseGuards(JwtGuard([]), PermisosGuard)
@Controller('api/riesgos')
export class RiesgosController {
    constructor(private readonly riesgosService: RiesgosService) {}

    @ApiOperation({ summary: 'Registrar nuevo riesgo' })
    @RequierePermisos(Permiso.RIESGOS_CREAR)
    @Post()
    create(
        @Body() dto: CreateRiesgoDto,
        @Req() req: Request & { user: UsuarioRequest },
    ) {
        return this.riesgosService.create(dto, {
            idUsuario:     req.user.sub,
            nombreUsuario: req.user.usuario,
            ipOrigen:      extractIp(req),
        });
    }

    @ApiOperation({ summary: 'Listar riesgos con filtros opcionales' })
    @RequierePermisos(Permiso.RIESGOS_LEER)
    @Get()
    findAll(
        @Query('nivel')          nivel?: NivelRiesgo,
        @Query('estado')         estado?: EstadoRiesgo,
        @Query('idResponsable')  idResponsable?: string,
        @Query('fechaDesde')     fechaDesde?: string,
        @Query('fechaHasta')     fechaHasta?: string,
    ) {
        return this.riesgosService.findAll({
            nivel,
            estado,
            idResponsable: idResponsable ? +idResponsable : undefined,
            fechaDesde,
            fechaHasta,
        });
    }

    @ApiOperation({ summary: 'Resumen de riesgos por nivel (para dashboard)' })
    @RequierePermisos(Permiso.RIESGOS_LEER, Permiso.DASHBOARD_LEER)
    @Get('resumen')
    resumen() {
        return this.riesgosService.resumenPorNivel();
    }

    @ApiOperation({ summary: 'Obtener detalle de un riesgo' })
    @RequierePermisos(Permiso.RIESGOS_LEER)
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.riesgosService.findOne(id);
    }

    @ApiOperation({ summary: 'Actualizar riesgo (recalcula nivel automáticamente)' })
    @RequierePermisos(Permiso.RIESGOS_EDITAR)
    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: UpdateRiesgoDto,
        @Req() req: Request & { user: UsuarioRequest },
    ) {
        return this.riesgosService.update(id, dto, {
            idUsuario:     req.user.sub,
            nombreUsuario: req.user.usuario,
            ipOrigen:      extractIp(req),
        });
    }

    @ApiOperation({ summary: 'Eliminar riesgo (soft delete)' })
    @RequierePermisos(Permiso.RIESGOS_ELIMINAR)
    @Delete(':id')
    remove(
        @Param('id', ParseIntPipe) id: number,
        @Req() req: Request & { user: UsuarioRequest },
    ) {
        return this.riesgosService.remove(id, {
            idUsuario:     req.user.sub,
            nombreUsuario: req.user.usuario,
            ipOrigen:      extractIp(req),
        });
    }
}
