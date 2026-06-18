// ./api/solicitudes-temporales.controller.ts
import {
	Body,
	Controller,
	Get,
	Param,
	ParseIntPipe,
	Post,
	Put,
	Query,
	Res,
	UseGuards,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { AuthRolesGuard as JwtGuard } from 'src/app/services/auth/guards/auth-roles.guard';
import { PermisosGuard } from 'src/app/services/auth/permisos.guard';
import { RequierePermisos } from 'src/shared/decorators/requiere-permisos.decorator';
import { Permiso } from 'src/shared/constants/roles.const';
import { Response } from 'express';
import { SolicitudesTemporalesService } from '../services/solicitudes-temporales.service';
import { CreateSolicitudTemporalDto } from '../dto/create-solicitud-temporal.dto';
import { SolicitudTemporal } from '../entities/solicitud-temporal.entity';
import {
	ApiBadRequestResponse,
	ApiCreatedResponse,
	ApiNotFoundResponse,
	ApiOkResponse,
	ApiOperation,
	ApiParam,
	ApiTags,
} from '@nestjs/swagger';
import { CreatedRes, OkRes } from 'src/common/utils';
import { CommonResponseDto } from 'src/shared/dto/common-response.dto';
import { SwaggerBadRequestCommon, SwaggerNotFoundCommon } from 'src/common/utils/swagger/swagger-response.utils';
import { FindAllSolicitudesParamsDto } from '../dto/find-all-solicitudes-params.dto';
import { FindAllSolicitudesResponseDto } from '../dto/find-all-solicitudes-response.dto';
import { RechazarSolicitudDto } from '../dto/rechzar-solicitud.dto';

@ApiTags('Solicitudes Temporales')
@Controller('api/solicitudes-temporales')
@UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
export class SolicitudesTemporalesController {
	constructor(private readonly service: SolicitudesTemporalesService) { }

	@Post()
	@ApiOperation({
		summary:
			'Crear una solicitud temporal (correo, justificación y fechaUso obligatorios; esAprobado opcional)',
		description:
			'Crea un registro en la tabla solicitudes_temporales. El campo fecha (CreateDateColumn) se genera automáticamente.',
	})
	@ApiCreatedResponse({
		description: 'Solicitud creada correctamente',
		type: CommonResponseDto,
	})
	@ApiBadRequestResponse(SwaggerBadRequestCommon())
	async create(@Body() dto: CreateSolicitudTemporalDto, @Res() res: Response) {
		const created: SolicitudTemporal = await this.service.create(dto);
		return CreatedRes(res, {
			message: 'La solicitud temporal fue registrada',
		});
	}

	@Get()
	@UseGuards(JwtGuard([]), PermisosGuard)
	@RequierePermisos(Permiso.USUARIOS_CREAR)
	@ApiOperation({
		summary: 'Api para listar todas las solicitudes temporales',
	})
	@ApiOkResponse({
		description: 'Listado obtenido correctamente',
		type: FindAllSolicitudesResponseDto,
	})
	@ApiBadRequestResponse(SwaggerBadRequestCommon())
	async findAll(
		@Query() params: FindAllSolicitudesParamsDto,
		@Res() res: Response
	) {
		const solicitudes = await this.service.findAll(params);
		return OkRes(res, {
			solicitudes: solicitudes
		});
	}

	@Get(':id')
	@UseGuards(JwtGuard([]), PermisosGuard)
	@RequierePermisos(Permiso.USUARIOS_CREAR)
	@ApiOperation({
		summary: 'Obtener una solicitud temporal por ID',
	})
	@ApiParam({ name: 'id', type: Number, description: 'ID de la solicitud temporal' })
	@ApiOkResponse({
		description: 'Solicitud encontrada',
		type: CommonResponseDto,
	})
	@ApiBadRequestResponse(SwaggerBadRequestCommon())
	async findOne(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
		const item: SolicitudTemporal = await this.service.findOne(id);
		return OkRes(res, {
			solicitud: item
		});
	}

	@Put('aprobar/:idSolicitud')
	@UseGuards(JwtGuard([]), PermisosGuard)
	@RequierePermisos(Permiso.USUARIOS_CREAR)
	@ApiOperation({
		summary: 'Api para aprobar uns solicitud'
	})
	@ApiOkResponse({
		description: 'Respuesta en caso de probar exitosamente la solicitud',
		type: CommonResponseDto
	})
	@ApiNotFoundResponse(SwaggerNotFoundCommon())
	@ApiBadRequestResponse(SwaggerBadRequestCommon())
	async aprobarSolicitud(@Param('idSolicitud') idSolicitud: number,@Res() res: Response){
		const response = await this.service.aprobarSolicitud(idSolicitud);
		return OkRes(res,{
			message: 'Solicitud aprobada'
		})
	}

	@Put('rechazar/:idSolicitud')
	@UseGuards(JwtGuard([]), PermisosGuard)
	@RequierePermisos(Permiso.USUARIOS_CREAR)
	@ApiOperation({
		summary: 'Api para rechazar solicitud'
	})
	@ApiOkResponse({
		description: 'Respuesta en caso de rechazar exitosamente la solicitud',
		type: CommonResponseDto
	})
	@ApiNotFoundResponse(SwaggerNotFoundCommon())
	@ApiBadRequestResponse(SwaggerBadRequestCommon())
	async rechazarSolicitud(@Param('idSolicitud') idSolicitud: number,@Body() data: RechazarSolicitudDto,@Res() res: Response){
		const response = await this.service.rechazarSolicitud(idSolicitud,data.motivo);
		return OkRes(res,{
			message: 'La solicitud fue rechazada'
		})
	}
}
