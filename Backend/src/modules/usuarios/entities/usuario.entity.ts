import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Rol } from '../modules/roles/entities/rol.entity';

@Entity('usuarios')
export class Usuario {
    @PrimaryGeneratedColumn({ name: 'id_usuario' })
    id: number;

    @Column({ name: 'usuario', type: 'varchar', unique: true })
    usuario: string;

    @Column({ name: 'correo', type: 'varchar' })
    correo: string;

    // type: 'varchar' explícito — necesario cuando la propiedad TS es `string | null`
    // porque TypeORM no puede inferir el tipo SQL desde la unión con null.
    @Column({ name: 'correo_real', type: 'varchar', nullable: true })
    correoReal: string | null;

    @Column({ name: 'contrasenia', type: 'varchar' })
    contrasenia: string;

    @Column({ name: 'nombre', type: 'varchar', nullable: true })
    nombre: string | null;

    @Column({ name: 'apellido', type: 'varchar', nullable: true })
    apellido: string | null;

    @Column({ name: 'id_rol' })
    idRol: number;

    // ─── Seguridad de contraseña ──────────────────────────────────────────────

    @Column({ name: 'must_change_password', default: true })
    mustChangePassword: boolean;

    @Column({ name: 'password_changed_at', type: 'timestamp', nullable: true })
    passwordChangedAt: Date | null;

    @Column({ name: 'password_expires_at', type: 'timestamp', nullable: true })
    passwordExpiresAt: Date | null;

    // ─── Bloqueo de cuenta ────────────────────────────────────────────────────

    @Column({ name: 'is_locked', default: false })
    isLocked: boolean;

    @Column({ name: 'failed_attempts', default: 0 })
    failedAttempts: number;

    @Column({ name: 'locked_at', type: 'timestamp', nullable: true })
    lockedAt: Date | null;

    // ─── Acceso a formulario externo ──────────────────────────────────────────

    @Column({ name: 'acceso_formulario_externo', default: false })
    accesoFormularioExterno: boolean;

    // ─── Reset de contraseña ──────────────────────────────────────────────────

    @Column({ name: 'reset_token', type: 'varchar', nullable: true })
    resetToken: string | null;

    @Column({ name: 'reset_token_expires', type: 'timestamp', nullable: true })
    resetTokenExpires: Date | null;

    // ─── Usuarios temporales ──────────────────────────────────────────────────

    @Column({
        name: 'expiracion',
        type: 'timestamp without time zone',
        nullable: true,
    })
    expiracion: Date | null;

    // ─── Verificación de correo (Soft Validation) ─────────────────────────────

    @Column({ name: 'is_email_verified', default: false })
    isEmailVerified: boolean;

    @Column({ name: 'email_verification_token', type: 'varchar', nullable: true })
    emailVerificationToken: string | null;

    // ─── Auditoría ────────────────────────────────────────────────────────────

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_at', nullable: true })
    deletedAt: Date | null;

    @ManyToOne(() => Rol, (rol) => rol.usuarios)
    @JoinColumn({ name: 'id_rol' })
    rol: Rol;
}