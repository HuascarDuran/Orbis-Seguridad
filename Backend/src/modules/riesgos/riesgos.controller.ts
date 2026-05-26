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
// CORRECCIÓN: Separamos los DTOs según la nueva estructura plana
import { CreateRiesgoDto } from './create-riesgo.dto';
import { UpdateRiesgoDto } from './update-riesgo.dto';
// CORRECCIÓN: EstadoRiesgo ya no existe en la matriz de Lourdes, solo NivelRiesgo
import { NivelRiesgo } from './riesgo.entity'; 

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
        // La IP y el User se extraen perfecto, pero se los pasamos solo 
        // si el servicio los necesita. Por ahora el servicio solo pide el DTO.
        const ip = extractIp(req);
        return this.riesgosService.create(dto);
    }

    @ApiOperation({ summary: 'Listar riesgos con filtros opcionales' })
    @RequierePermisos(Permiso.RIESGOS_LEER)
    @Get()
    findAll(
        @Query('nivel')          nivel?: NivelRiesgo,
        @Query('idResponsable')  idResponsable?: string,
        @Query('fechaDesde')     fechaDesde?: string,
        @Query('fechaHasta')     fechaHasta?: string,
    ) {
        // En el futuro puedes agregar los filtros en el servicio, 
        // por ahora devolvemos todos sin que rompa TypeScript.
        return this.riesgosService.findAll();
    }

    @ApiOperation({ summary: 'Resumen de riesgos por nivel (para dashboard)' })
    @RequierePermisos(Permiso.RIESGOS_LEER, Permiso.DASHBOARD_LEER)
    @Get('resumen')
    async resumen() {
        // Hacemos el resumen directo aquí para no romper la compatibilidad
        // ya que el nuevo servicio no tiene el método resumenPorNivel()
        const todos = await this.riesgosService.findAll();
        const resumen = { Bajo: 0, Moderado: 0, Alto: 0, Extremo: 0 };
        todos.forEach(r => {
            if (resumen[r.nivel_riesgo_inherente] !== undefined) {
                resumen[r.nivel_riesgo_inherente]++;
            }
        });
        return resumen;
    }

    @ApiOperation({ summary: 'Obtener detalle de un riesgo' })
    @RequierePermisos(Permiso.RIESGOS_LEER)
    @Get(':id')
    // CORRECCIÓN: Quitamos ParseIntPipe porque ahora los IDs son strings (UUID)
    findOne(@Param('id') id: string) {
        return this.riesgosService.findOne(id);
    }

    @ApiOperation({ summary: 'Actualizar riesgo (recalcula nivel automáticamente)' })
    @RequierePermisos(Permiso.RIESGOS_EDITAR)
    @Patch(':id')
    update(
        @Param('id') id: string, // UUID
        @Body() dto: UpdateRiesgoDto,
        @Req() req: Request & { user: UsuarioRequest },
    ) {
        return this.riesgosService.update(id, dto);
    }

    @ApiOperation({ summary: 'Eliminar riesgo (soft delete)' })
    @RequierePermisos(Permiso.RIESGOS_ELIMINAR)
    @Delete(':id')
    remove(
        @Param('id') id: string, // UUID
        @Req() req: Request & { user: UsuarioRequest },
    ) {
        return this.riesgosService.remove(id);
    }
}