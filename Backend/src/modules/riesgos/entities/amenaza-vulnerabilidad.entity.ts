import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { RiesgoSeguridad } from './riesgo-seguridad.entity';

export enum TipoAmenaza {
  NATURAL = 'Natural',
  HUMANA_INTENCIONAL = 'Humana Intencional',
  HUMANA_ACCIDENTAL = 'Humana Accidental',
}

@Entity('amenazas_vulnerabilidades')
export class AmenazaVulnerabilidad {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 255 })
  nombre!: string;

  @Column({ type: 'enum', enum: TipoAmenaza })
  tipo!: TipoAmenaza;

  @Column({ type: 'text', nullable: true })
  descripcion!: string;

  @OneToMany(() => RiesgoSeguridad, (riesgo) => riesgo.amenaza)
  riesgos!: RiesgoSeguridad[];
}
