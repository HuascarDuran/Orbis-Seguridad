import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { RiesgoSeguridad } from './riesgo-seguridad.entity';

export enum TipoActivo {
  DATOS_INFORMACION = 'Datos/Información',
  SOFTWARE_APLICACIONES = 'Software/Aplicaciones',
  HARDWARE = 'Hardware',
  REDES_COMUNICACIONES = 'Redes/Comunicaciones',
  PERSONAS = 'Personas',
  PROCESOS_INSTALACIONES = 'Procesos/Instalaciones',
}

@Entity('activos_informacion')
export class ActivoInformacion {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 255 })
  nombre!: string;

  @Column({ type: 'enum', enum: TipoActivo })
  tipo!: TipoActivo;

  @Column({ type: 'int' })
  criticidad!: number;

  @OneToMany(() => RiesgoSeguridad, (riesgo) => riesgo.activo)
  riesgos!: RiesgoSeguridad[];
}
