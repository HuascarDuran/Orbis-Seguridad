import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Rol } from './rol.entity';

@Entity('permisos')
export class PermisoEntity {
    @PrimaryGeneratedColumn({ name: 'id_permiso' })
    id: number;

    @Column({ type: 'varchar', length: 100, unique: true, name: 'nombre_permiso' })
    nombre: string;

    @Column({ type: 'varchar', length: 255, nullable: true, name: 'descripcion' })
    descripcion: string;

    @ManyToMany(() => Rol, (rol) => rol.permisos)
    roles: Rol[];
}
