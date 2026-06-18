import { Usuario } from "src/modules/usuarios/entities/usuario.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import { PermisoEntity } from "./permiso.entity";

@Entity('roles')
export class Rol {
    @PrimaryGeneratedColumn({ name: 'id_rol' })
    id: number;

    @Column({ type: 'varchar', length: 50, name: 'nombre_rol' })
    nombre: string;

    @OneToMany(() => Usuario, (usuario) => usuario.rol)
    usuarios: Usuario[];

    @ManyToMany(() => PermisoEntity, (permiso) => permiso.roles)
    @JoinTable({
        name: 'roles_permisos',
        joinColumn: { name: 'id_rol', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'id_permiso', referencedColumnName: 'id' }
    })
    permisos: PermisoEntity[];
}

