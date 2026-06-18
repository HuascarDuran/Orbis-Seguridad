import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ActivoInformacion } from './activo-informacion.entity';
import { AmenazaVulnerabilidad } from './amenaza-vulnerabilidad.entity';

export enum TratamientoRiesgo {
  MITIGAR_REDUCIR = 'Mitigar/Reducir',
  ACEPTAR = 'Aceptar',
  ELIMINAR_EVITAR = 'Eliminar/Evitar',
  TRANSFERIR = 'Transferir',
}

export enum TipoControl {
  PREVENTIVO = 'Preventivo',
  DETECTIVO = 'Detectivo',
  CORRECTIVO = 'Correctivo',
  DISUASIVO = 'Disuasivo',
}

export enum NivelControl {
  BAJO = 'Bajo',
  MEDIO = 'Medio',
  ALTO = 'Alto',
}

export enum NivelImplementacion {
  AUTOMATICO = 'Automatico',
  SEMIAUTOMATICO = 'Semiautomatico',
  MANUAL = 'Manual',
}

export enum FrecuenciaControl {
  POR_EVENTO = 'Por evento',
  DIARIO = 'Diario',
  SEMANAL = 'Semanal',
  MENSUAL = 'Mensual',
  ANUAL = 'Anual',
}

export enum NivelRiesgo {
  BAJO = 'Bajo',
  MODERADO = 'Moderado',
  ALTO = 'Alto',
  EXTREMO = 'Extremo',
}

@Entity('riesgos_seguridad')
export class RiesgoSeguridad {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => ActivoInformacion, (activo) => activo.riesgos, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_activo' })
  activo!: ActivoInformacion;

  @ManyToOne(() => AmenazaVulnerabilidad, (amenaza) => amenaza.riesgos, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_amenaza' })
  amenaza!: AmenazaVulnerabilidad;

  @Column({ type: 'text' })
  riesgo_consecuencia!: string;

  @Column({ type: 'int' })
  probabilidad_inherente!: number;

  @Column({ type: 'int' })
  impacto_inherente!: number;

  @Column({ type: 'int' })
  riesgo_inherente!: number;

  @Column({ type: 'enum', enum: NivelRiesgo })
  nivel_riesgo_inherente!: NivelRiesgo;

  @Column({ type: 'enum', enum: TratamientoRiesgo })
  tratamiento_riesgo!: TratamientoRiesgo;

  @Column({ type: 'text', nullable: true })
  controles_implementar!: string | null;

  @Column({ type: 'enum', enum: TipoControl, nullable: true })
  tipo_control!: TipoControl | null;

  @Column({ type: 'enum', enum: NivelControl, nullable: true })
  nivel_control!: NivelControl | null;

  @Column({ type: 'enum', enum: NivelImplementacion, nullable: true })
  nivel_implementacion!: NivelImplementacion | null;

  @Column({ type: 'enum', enum: FrecuenciaControl, nullable: true })
  frecuencia_control!: FrecuenciaControl | null;

  @Column({ type: 'int' })
  riesgo_residual!: number;

  @Column({ type: 'enum', enum: NivelRiesgo })
  nivel_riesgo_residual!: NivelRiesgo;

  @Column({ type: 'int', nullable: true })
  usuario_id!: number | null;

  @Column({ type: 'varchar', length: 255, nullable: true })
  usuario_nombre!: string | null;

  @Column({ type: 'varchar', length: 45, nullable: true })
  ip_origen!: string | null;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
