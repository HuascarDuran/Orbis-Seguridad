/**
 * @file riesgos.service.ts
 * @description Servicio del Módulo de Análisis de Riesgos.
 *
 * INTEGRACIÓN CON LOGS: Cada operación de escritura produce un log de aplicación
 * de forma automática usando LogsService (inyectado como global).
 */

import {
    BadRequestException,
    Injectable,
    Logger,
    NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Riesgo, EstadoRiesgo, NivelRiesgo } from './riesgo.entity';
import { CreateRiesgoDto, UpdateRiesgoDto } from './riesgo.dto';
import { LogsService } from '../logs/logs.service';

// ─── Tipos internos ───────────────────────────────────────────────────────────

interface ActorRequest {
    idUsuario: number;
    nombreUsuario: string;
    ipOrigen: string;
}

interface FiltrosRiesgo {
    nivel?: NivelRiesgo;
    estado?: EstadoRiesgo;
    idResponsable?: number;
    fechaDesde?: string;
    fechaHasta?: string;
}

// ─── Servicio ─────────────────────────────────────────────────────────────────

@Injectable()
export class RiesgosService {
    private readonly logger = new Logger(RiesgosService.name);

    constructor(
        @InjectRepository(Riesgo)
        private readonly riesgosRepository: Repository<Riesgo>,
        private readonly dataSource: DataSource,
        private readonly logsService: LogsService,
    ) {}

    // ── Helpers ──────────────────────────────────────────────────────────────

    /**
     * Genera un código único: RIESGO-YYYY-NNN
     */
    private async generarCodigo(): Promise<string> {
        const year = new Date().getFullYear();
        const count = await this.riesgosRepository.count();
        const secuencia = String(count + 1).padStart(3, '0');
        return `RIESGO-${year}-${secuencia}`;
    }

    private async findOneOrFail(id: number): Promise<Riesgo> {
        const riesgo = await this.riesgosRepository.findOne({ where: { id } });
        if (!riesgo) {
            throw new NotFoundException(`Riesgo #${id} no encontrado.`);
        }
        return riesgo;
    }

    // ── CRUD ─────────────────────────────────────────────────────────────────

    async create(dto: CreateRiesgoDto, actor: ActorRequest): Promise<Riesgo> {
        // Validar escala
        if (dto.probabilidad < 1 || dto.probabilidad > 5 || dto.impacto < 1 || dto.impacto > 5) {
            throw new BadRequestException('Probabilidad e impacto deben estar entre 1 y 5.');
        }

        const codigo = await this.generarCodigo();

        const riesgo = this.riesgosRepository.create({
            ...dto,
            codigo,
            idCreador:    actor.idUsuario,
            idResponsable: dto.idResponsable,
            // nivelRiesgo y puntuacion los calcula el hook @BeforeInsert
        });

        const saved = await this.riesgosRepository.save(riesgo);

        await this.logsService.riesgoCreado({
            idUsuario:    actor.idUsuario,
            nombreUsuario: actor.nombreUsuario,
            idRiesgo:     saved.id,
            descripcion:  saved.titulo,
            nivelRiesgo:  saved.nivelRiesgo,
            ipOrigen:     actor.ipOrigen,
        });

        this.logger.log(`Riesgo ${saved.codigo} creado por ${actor.nombreUsuario} [${saved.nivelRiesgo}]`);
        return saved;
    }

    async findAll(filtros?: FiltrosRiesgo): Promise<Riesgo[]> {
        const qb = this.riesgosRepository
            .createQueryBuilder('r')
            .leftJoinAndSelect('r.responsable', 'responsable')
            .leftJoinAndSelect('r.creador', 'creador')
            .orderBy('r.puntuacion', 'DESC');

        if (filtros?.nivel) {
            qb.andWhere('r.nivel_riesgo = :nivel', { nivel: filtros.nivel });
        }
        if (filtros?.estado) {
            qb.andWhere('r.estado = :estado', { estado: filtros.estado });
        }
        if (filtros?.idResponsable) {
            qb.andWhere('r.id_responsable = :idResponsable', { idResponsable: filtros.idResponsable });
        }
        if (filtros?.fechaDesde) {
            qb.andWhere('r.fecha_identificacion >= :fechaDesde', { fechaDesde: filtros.fechaDesde });
        }
        if (filtros?.fechaHasta) {
            qb.andWhere('r.fecha_identificacion <= :fechaHasta', { fechaHasta: filtros.fechaHasta });
        }

        return qb.getMany();
    }

    async findOne(id: number): Promise<Riesgo> {
        const riesgo = await this.riesgosRepository.findOne({
            where: { id },
            relations: ['responsable', 'creador'],
        });
        if (!riesgo) {
            throw new NotFoundException(`Riesgo #${id} no encontrado.`);
        }
        return riesgo;
    }

    async update(id: number, dto: UpdateRiesgoDto, actor: ActorRequest): Promise<Riesgo> {
        const riesgo = await this.findOneOrFail(id);
        Object.assign(riesgo, dto);
        // El hook @BeforeUpdate recalcula nivelRiesgo si cambiaron probabilidad/impacto
        const updated = await this.riesgosRepository.save(riesgo);

        await this.logsService.riesgoModificado({
    idRiesgo:      riesgo.id,
    nivelRiesgo:   updated.nivelRiesgo,
    idUsuario:     actor.idUsuario,
    nombreUsuario: actor.nombreUsuario,
    ipOrigen:      actor.ipOrigen ?? '127.0.0.1',
});

        return updated;
    }

    async remove(id: number, actor: ActorRequest): Promise<void> {
        const riesgo = await this.findOneOrFail(id);
        await this.riesgosRepository.softDelete(id);

        await this.logsService.riesgoEliminado({
    idRiesgo:      id,
    idUsuario:     actor.idUsuario,
    nombreUsuario: actor.nombreUsuario,
    ipOrigen:      actor.ipOrigen ?? '127.0.0.1',
});
    }

    // ── Estadísticas para Dashboard ──────────────────────────────────────────

    async resumenPorNivel(): Promise<Record<NivelRiesgo, number>> {
        const rows = await this.riesgosRepository
            .createQueryBuilder('r')
            .select('r.nivel_riesgo', 'nivel')
            .addSelect('COUNT(*)', 'total')
            .where('r.deleted_at IS NULL')
            .groupBy('r.nivel_riesgo')
            .getRawMany<{ nivel: NivelRiesgo; total: string }>();

        const resumen: Record<NivelRiesgo, number> = {
            [NivelRiesgo.BAJO]:    0,
            [NivelRiesgo.MEDIO]:   0,
            [NivelRiesgo.ALTO]:    0,
            [NivelRiesgo.CRITICO]: 0,
        };

        for (const row of rows) {
            resumen[row.nivel] = parseInt(row.total, 10);
        }

        return resumen;
    }
}
