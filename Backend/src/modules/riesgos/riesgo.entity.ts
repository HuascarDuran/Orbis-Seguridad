// src/riesgos/entities/riesgo.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum TipoControl {
  PREVENTIVO = 'P',
  DETECTIVO = 'D',
  CORRECTIVO = 'C',
  DISUASIVO = 'Di',
}

export enum NivelControl {
  ALTO = 'A',
  SATISFACTORIO = 'S',
  MEDIO = 'M',
}

export enum FrecuenciaControl {
  DIARIO = 'D',
  SEMANAL = 'S',
  MENSUAL = 'M',
  ANUAL = 'A',
  POR_TRANSACCION = 'PT',
  SEMESTRAL = 's',
}

export enum NivelRiesgo {
  BAJO = 'Bajo',
  MODERADO = 'Moderado',
  ALTO = 'Alto',
  EXTREMO = 'Extremo',
}

@Entity('riesgos_seguridad_informacion')
export class Riesgo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // 1. Activo de Información
  @Column({ type: 'varchar', length: 255 })
  activo_informacion: string;

  @Column({ type: 'varchar', length: 255 })
  aplicativos_sistemas: string;

  // 2. Identificación
  @Column({ type: 'text' })
  amenaza_vulnerabilidad: string;

  // 3. Valoración
  @Column({ type: 'text' })
  riesgo_consecuencia: string;

  // 4. Cálculo Inicial
  @Column({ type: 'int' })
  probabilidad_inherente: number;

  @Column({ type: 'int' })
  impacto_inherente: number;

  // 5. Evaluación del Riesgo Inherente (calculado)
  @Column({ type: 'int' })
  riesgo_inherente: number;

  @Column({ type: 'enum', enum: NivelRiesgo })
  nivel_riesgo_inherente: NivelRiesgo;

  // 6. Medición
  @Column({ type: 'varchar', length: 100 })
  tratamiento_riesgo: string;

  // 7. Mitigación
  @Column({ type: 'text' })
  controles_implementar: string;

  // 8. Eficiencia del Control
  @Column({ type: 'enum', enum: TipoControl })
  tipo_control: TipoControl;

  @Column({ type: 'enum', enum: NivelControl })
  nivel_control: NivelControl;

  @Column({ type: 'enum', enum: FrecuenciaControl })
  frecuencia_control: FrecuenciaControl;

  // 9. Riesgo Residual
  @Column({ type: 'int' })
  probabilidad_residual: number;

  @Column({ type: 'int' })
  impacto_residual: number;

  @Column({ type: 'int' })
  riesgo_residual: number;

  @Column({ type: 'enum', enum: NivelRiesgo })
  nivel_riesgo_residual: NivelRiesgo;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}