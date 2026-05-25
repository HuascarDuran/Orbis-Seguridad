/**
 * @file riesgo.entity.ts
 * @description Entidad para el Módulo de Análisis de Riesgos (Punto 15).
 *
 * METODOLOGÍA: Matriz de Riesgo estándar ISO 31000 / NIST SP 800-30.
 *   Nivel de Riesgo = Probabilidad × Impacto
 *
 *   Escala 1–5 en ambas dimensiones:
 *   ┌─────────────┬──────────────────────────────────────────┐
 *   │ Puntuación  │ Nivel                                    │
 *   ├─────────────┼──────────────────────────────────────────┤
 *   │ 1 – 4       │ BAJO                                     │
 *   │ 5 – 9       │ MEDIO                                    │
 *   │ 10 – 16     │ ALTO                                     │
 *   │ 17 – 25     │ CRÍTICO                                  │
 *   └─────────────┴──────────────────────────────────────────┘
 */

import {
    BeforeInsert,
    BeforeUpdate,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Usuario } from 'src/modules/usuarios/entities/usuario.entity';

// ─── Enums ────────────────────────────────────────────────────────────────────

export enum NivelRiesgo {
    BAJO     = 'BAJO',
    MEDIO    = 'MEDIO',
    ALTO     = 'ALTO',
    CRITICO  = 'CRITICO',
}

export enum EstadoRiesgo {
    IDENTIFICADO = 'IDENTIFICADO',
    EN_ANALISIS  = 'EN_ANALISIS',
    MITIGADO     = 'MITIGADO',
    ACEPTADO     = 'ACEPTADO',
    CERRADO      = 'CERRADO',
}

export enum CategoriaRiesgo {
    SEGURIDAD_INFORMACION = 'SEGURIDAD_INFORMACION',
    OPERACIONAL           = 'OPERACIONAL',
    LEGAL_REGULATORIO     = 'LEGAL_REGULATORIO',
    FINANCIERO            = 'FINANCIERO',
    REPUTACIONAL          = 'REPUTACIONAL',
    TECNOLOGICO           = 'TECNOLOGICO',
    OTRO                  = 'OTRO',
}

// ─── Helper de cálculo ────────────────────────────────────────────────────────

export function calcularNivelRiesgo(probabilidad: number, impacto: number): NivelRiesgo {
    const score = probabilidad * impacto;
    if (score <= 4)  return NivelRiesgo.BAJO;
    if (score <= 9)  return NivelRiesgo.MEDIO;
    if (score <= 16) return NivelRiesgo.ALTO;
    return NivelRiesgo.CRITICO;
}

// ─── Entidad ──────────────────────────────────────────────────────────────────

@Entity('riesgos')
@Index(['nivelRiesgo', 'estado'])       // Para dashboard de riesgos activos
@Index(['idResponsable'])
@Index(['fechaIdentificacion'])
export class Riesgo {
    @PrimaryGeneratedColumn({ name: 'id_riesgo' })
    id: number;

    // ── Identificación ──────────────────────────────────────────────────────

    /**
     * Código único legible por humanos: RIESGO-2026-001
     */
    @Column({ type: 'varchar', length: 30, name: 'codigo', unique: true })
    codigo: string;

    @Column({ type: 'varchar', length: 200, name: 'titulo' })
    titulo: string;

    @Column({ type: 'text', name: 'descripcion' })
    descripcion: string;

    @Column({
        type: 'enum',
        enum: CategoriaRiesgo,
        name: 'categoria',
        default: CategoriaRiesgo.OTRO,
    })
    categoria: CategoriaRiesgo;

    // ── Evaluación cuantitativa (escala 1–5) ────────────────────────────────

    /**
     * Probabilidad de ocurrencia (1 = muy improbable, 5 = casi seguro).
     */
    @Column({ type: 'smallint', name: 'probabilidad' })
    probabilidad: number;

    /**
     * Impacto si el riesgo se materializa (1 = insignificante, 5 = catastrófico).
     */
    @Column({ type: 'smallint', name: 'impacto' })
    impacto: number;

    /**
     * Nivel calculado automáticamente en @BeforeInsert/@BeforeUpdate.
     * NUNCA se recibe desde el cliente; es responsabilidad del servidor.
     */
    @Column({
        type: 'enum',
        enum: NivelRiesgo,
        name: 'nivel_riesgo',
    })
    nivelRiesgo: NivelRiesgo;

    /**
     * Puntuación numérica = probabilidad × impacto. Para ordenamiento.
     */
    @Column({ type: 'smallint', name: 'puntuacion' })
    puntuacion: number;

    // ── Análisis cualitativo ─────────────────────────────────────────────────

    @Column({ type: 'text', name: 'consecuencias' })
    consecuencias: string;

    @Column({ type: 'text', name: 'plan_accion' })
    planAccion: string;

    /**
     * Controles existentes antes de aplicar el plan.
     */
    @Column({ type: 'text', name: 'controles_existentes', nullable: true })
    controlesExistentes: string | null;

    // ── Estado y responsabilidad ─────────────────────────────────────────────

    @Column({
        type: 'enum',
        enum: EstadoRiesgo,
        name: 'estado',
        default: EstadoRiesgo.IDENTIFICADO,
    })
    estado: EstadoRiesgo;

    @Column({ type: 'date', name: 'fecha_identificacion' })
    fechaIdentificacion: string;

    @Column({ type: 'date', name: 'fecha_revision', nullable: true })
    fechaRevision: string | null;

    @Column({ type: 'date', name: 'fecha_cierre', nullable: true })
    fechaCierre: string | null;

    /**
     * ID del usuario responsable del seguimiento del riesgo.
     */
    @Column({ type: 'int', name: 'id_responsable' })
    idResponsable: number;

    @ManyToOne(() => Usuario, { eager: false })
    @JoinColumn({ name: 'id_responsable' })
    responsable: Usuario;

    // ── Trazabilidad ─────────────────────────────────────────────────────────

    /**
     * ID del usuario que registró el riesgo originalmente.
     */
    @Column({ type: 'int', name: 'id_creador' })
    idCreador: number;

    @ManyToOne(() => Usuario, { eager: false })
    @JoinColumn({ name: 'id_creador' })
    creador: Usuario;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_at', nullable: true })
    deletedAt: Date | null;

    // ── Hooks de dominio ─────────────────────────────────────────────────────

    /**
     * Calcula nivelRiesgo y puntuacion automáticamente.
     * El servidor es el único que determina el nivel; el cliente nunca lo envía.
     */
    @BeforeInsert()
    @BeforeUpdate()
    calcularNivel(): void {
        const p = Math.min(5, Math.max(1, this.probabilidad));
        const i = Math.min(5, Math.max(1, this.impacto));
        this.puntuacion  = p * i;
        this.nivelRiesgo = calcularNivelRiesgo(p, i);
    }
}
