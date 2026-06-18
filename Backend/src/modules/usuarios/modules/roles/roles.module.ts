import { Module, Global } from '@nestjs/common';
import { RolesService } from './services/roles.service';
import { RolesController } from './api/roles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rol } from './entities/rol.entity';
import { PermisoEntity } from './entities/permiso.entity';

@Global()
@Module({
	imports: [
		TypeOrmModule.forFeature([Rol, PermisoEntity])
	],
	controllers: [RolesController],
	providers: [RolesService],
	exports: [RolesService, TypeOrmModule]
})
export class RolesModule { }

