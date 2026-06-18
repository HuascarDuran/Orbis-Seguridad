import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, ParseIntPipe } from '@nestjs/common';
import { RolesService } from '../services/roles.service';
import { CreateRoleDto } from '../dto/create-role.dto';
import { UpdateRoleDto } from '../dto/update-role.dto';
import { AuthRolesGuard as JwtGuard } from 'src/app/services/auth/guards/auth-roles.guard';
import { PermisosGuard } from 'src/app/services/auth/permisos.guard';
import { RequierePermisos } from 'src/shared/decorators/requiere-permisos.decorator';
import { Permiso } from 'src/shared/constants/roles.const';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Roles')
@ApiBearerAuth('access-token')
@Controller('api/roles')
@UseGuards(JwtGuard([]), PermisosGuard)
export class RolesController {
	constructor(private readonly rolesService: RolesService) { }

	@Get()
	@RequierePermisos(Permiso.ROLES_GESTIONAR)
	@ApiOperation({ summary: 'Obtener todos los roles con sus permisos' })
	async findAll() {
		return await this.rolesService.findAll();
	}

	@Get('permisos')
	@RequierePermisos(Permiso.ROLES_GESTIONAR)
	@ApiOperation({ summary: 'Obtener todos los permisos granulares registrados en el sistema' })
	async findAllPermisos() {
		return await this.rolesService.findAllPermisos();
	}

	@Get(':id')
	@RequierePermisos(Permiso.ROLES_GESTIONAR)
	@ApiOperation({ summary: 'Obtener un rol específico con sus permisos' })
	async findOne(@Param('id', ParseIntPipe) id: number) {
		return await this.rolesService.findOne(id);
	}

	@Post()
	@RequierePermisos(Permiso.ROLES_GESTIONAR)
	@ApiOperation({ summary: 'Crear un nuevo rol y asociarle permisos' })
	async create(@Body() createRoleDto: CreateRoleDto) {
		return await this.rolesService.create(createRoleDto);
	}

	@Put(':id')
	@RequierePermisos(Permiso.ROLES_GESTIONAR)
	@ApiOperation({ summary: 'Actualizar un rol y sus permisos asociados' })
	async update(@Param('id', ParseIntPipe) id: number, @Body() updateRoleDto: UpdateRoleDto) {
		return await this.rolesService.update(id, updateRoleDto);
	}

	@Delete(':id')
	@RequierePermisos(Permiso.ROLES_GESTIONAR)
	@ApiOperation({ summary: 'Eliminar un rol del sistema' })
	async remove(@Param('id', ParseIntPipe) id: number) {
		return await this.rolesService.remove(id);
	}
}
