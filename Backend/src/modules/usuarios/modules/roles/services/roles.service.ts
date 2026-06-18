import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { CreateRoleDto } from '../dto/create-role.dto';
import { UpdateRoleDto } from '../dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Rol } from '../entities/rol.entity';
import { PermisoEntity } from '../entities/permiso.entity';
import { Repository, In } from 'typeorm';

@Injectable()
export class RolesService {
	// Caché en memoria para evitar consultas recurrentes a la base de datos en los Guards.
	private permissionsCache = new Map<number, string[]>();

	constructor(
		@InjectRepository(Rol)
		private readonly rolRepository: Repository<Rol>,
		@InjectRepository(PermisoEntity)
		private readonly permisoRepository: Repository<PermisoEntity>,
	){}

	async findAll() {
		return await this.rolRepository.find({
			relations: ['permisos'],
			order: { id: 'ASC' }
		});
	}

	async findOne(idRol: number) {
		const rol = await this.rolRepository.findOne({
			where: { id: idRol },
			relations: ['permisos']
		});
		if (!rol) {
			throw new NotFoundException(`Rol con ID ${idRol} no encontrado`);
		}
		return rol;
	}

	async create(data: CreateRoleDto) {
		const existe = await this.rolRepository.findOne({ where: { nombre: data.nombre } });
		if (existe) {
			throw new ConflictException(`El rol con nombre "${data.nombre}" ya existe`);
		}

		const rol = new Rol();
		rol.nombre = data.nombre;

		if (data.permisos && data.permisos.length > 0) {
			rol.permisos = await this.permisoRepository.find({
				where: { nombre: In(data.permisos) }
			});
		} else {
			rol.permisos = [];
		}

		const nuevoRol = await this.rolRepository.save(rol);
		this.clearCache(nuevoRol.id);
		return nuevoRol;
	}

	async update(idRol: number, data: UpdateRoleDto) {
		const rol = await this.findOne(idRol);

		if (data.nombre !== undefined) {
			if (data.nombre !== rol.nombre) {
				const existe = await this.rolRepository.findOne({ where: { nombre: data.nombre } });
				if (existe && existe.id !== idRol) {
					throw new ConflictException(`El rol con nombre "${data.nombre}" ya existe`);
				}
				rol.nombre = data.nombre;
			}
		}

		if (data.permisos !== undefined) {
			if (data.permisos.length > 0) {
				rol.permisos = await this.permisoRepository.find({
					where: { nombre: In(data.permisos) }
				});
			} else {
				rol.permisos = [];
			}
		}

		const rolGuardado = await this.rolRepository.save(rol);
		this.clearCache(idRol);
		return rolGuardado;
	}

	async remove(idRol: number) {
		const rol = await this.findOne(idRol);
		if (idRol >= 1 && idRol <= 7) {
			throw new ConflictException('No se pueden eliminar los roles por defecto del sistema (IDs 1-7)');
		}
		await this.rolRepository.remove(rol);
		this.clearCache(idRol);
		return { message: 'Rol eliminado con éxito' };
	}

	// ─── LÓGICA DE DYNAMIC PERMISSIONS & CACHING ──────────────────────────────

	async getPermissionsForRole(idRol: number): Promise<string[]> {
		if (this.permissionsCache.has(idRol)) {
			return this.permissionsCache.get(idRol)!;
		}

		const rol = await this.rolRepository.findOne({
			where: { id: idRol },
			relations: ['permisos']
		});

		if (!rol) {
			return [];
		}

		const permissions = rol.permisos.map((p) => p.nombre);
		this.permissionsCache.set(idRol, permissions);
		return permissions;
	}

	async checkRoleHasPermission(idRol: number, permissionName: string): Promise<boolean> {
		const permissions = await this.getPermissionsForRole(idRol);
		return permissions.includes(permissionName);
	}

	async findAllPermisos(): Promise<PermisoEntity[]> {
		return await this.permisoRepository.find({
			order: { nombre: 'ASC' }
		});
	}

	clearCache(idRol?: number) {
		if (idRol !== undefined) {
			this.permissionsCache.delete(idRol);
		} else {
			this.permissionsCache.clear();
		}
	}
}
