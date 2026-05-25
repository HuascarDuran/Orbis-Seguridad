import { Controller, Get, Res, Query, Param, ParseIntPipe, UseGuards, Req, Put, Delete, Body } from '@nestjs/common';
import { EmpresasService } from '../services/empresas.service';
import { ApiBadRequestResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { OkRes, SwaggerBadRequestCommon, SwaggerNotFoundCommon } from 'src/common/utils';
import { FindAllEmpresasCardsParamsDto } from '../dto/inputs/find-all-empresas-cards-params.dto';
import { FindAllEmpresasCardsPaginationResponseDto } from '../dto/outputs/find-all-empresas-cards-pagination-response.dto';
import { FindOneEmpresaPublicDto } from '../dto/outputs/find-one-empresa-public.dto';
import { FindOneEmpresaPrivateDto } from '../dto/outputs/find-one-empresa-private.dto';
import { FindAllEmpresasCardsPublicParamsDto } from '../dto/inputs/find-all-empresas-cards-public-params.dto';
import { AuthRolesGuard } from 'src/app/services/auth/guards/auth-roles.guard';
import { Rol, ROLES_INVESTIGADORES, ROLES_ADMIN_EMPRESAS } from 'src/shared/constants/roles.const';

@ApiTags('Empresas')
@Controller('api/empresas')
export class EmpresasController {
    constructor(private readonly empresasService: EmpresasService) { }

    @Get()
    @UseGuards(AuthRolesGuard([Rol.ADMIN_EMPRESAS]))
    @ApiOperation({ summary: 'Api para obtener todas las empresas con detalle completo (solo admins)' })
    async findAll(@Res() res: Response) {
        const empresas = await this.empresasService.findAll();
        return OkRes(res, { empresas });
    }

    @Get('cards/public')
    @ApiOperation({
        summary: 'Api para obtener las empresas para las cards de la pagina web, para usuario sin sesion'
    })
    @ApiOkResponse({
        description: 'Respuesta en caso de obtener las cads de las empresas',
        type: FindAllEmpresasCardsPaginationResponseDto
    })
    @ApiBadRequestResponse(SwaggerBadRequestCommon())
    async findAllCardsPublic(
        @Query() params: FindAllEmpresasCardsPublicParamsDto,
        @Res() res: Response
    ) {
        const empresas = await this.empresasService.findAllCardsPublic(params);
        return OkRes(res, { empresas });
    }

    @Get('cards/private')
    // SOLUCIÓN 1: Ahora permitimos que tanto Administradores como Investigadores entren aquí
    @UseGuards(AuthRolesGuard([...ROLES_ADMIN_EMPRESAS, ...ROLES_INVESTIGADORES]))
    @ApiOperation({
        summary: 'Api para obtener las empresas para las cards de la pagina web, para usuario con sesion'
    })
    @ApiOkResponse({
        description: 'Respuesta en caso de obtener las cads de las empresas',
        type: FindAllEmpresasCardsPaginationResponseDto
    })
    @ApiBadRequestResponse(SwaggerBadRequestCommon())
    @Get('cards/private')
    @UseGuards(AuthRolesGuard([...ROLES_ADMIN_EMPRESAS, ...ROLES_INVESTIGADORES]))
    @ApiOperation({
        summary: 'Api para obtener las empresas para las cards de la pagina web, para usuario con sesion'
    })
    async findAllCardsPrivate(
        @Query() params: FindAllEmpresasCardsParamsDto,
        @Req() req: any, // Aquí viene la info del usuario
        @Res() res: Response
    ) {
        // --- VOLVEMOS A DEFINIR LA VARIABLE AQUÍ ---
        const isInvestigador = ROLES_INVESTIGADORES.includes(req.user.rol);
        const idUsuario = isInvestigador ? (req.user.sub as number) : undefined;
        // --------------------------------------------

        const empresas = await this.empresasService.findAllCardsPrivate(params, idUsuario);
        return OkRes(res, { empresas });
    }

    @Get('public/:idEmpresa')
    @ApiOperation({
        summary: 'Api paara buscar una empresa. para usuarios sin sesion',
    })
    @ApiOkResponse({
        description: 'Respuesta en caso de encontrar la empresa',
        type: FindOneEmpresaPublicDto
    })
    @ApiNotFoundResponse(SwaggerNotFoundCommon())
    async findOnePublic(
        @Param('idEmpresa', ParseIntPipe) idEmpresa: number,
        @Res() res: Response,
    ) {
        const empresa = await this.empresasService.findOnePublic(idEmpresa);
        return OkRes(res, { empresa });
    }

    @Get('private/:idEmpresa')
    // SOLUCIÓN 1.1: Arreglamos el guardia aquí también para que el Admin pueda ver detalles
    @UseGuards(AuthRolesGuard([...ROLES_ADMIN_EMPRESAS, ...ROLES_INVESTIGADORES]))
    @ApiOperation({
        summary: 'Api paara buscar una empresa. para usuarios con sesion',
    })
    @ApiOkResponse({
        description: 'Respuesta en caso de encontrar la empresa',
        type: FindOneEmpresaPrivateDto
    })
    @ApiNotFoundResponse(SwaggerNotFoundCommon())
    @Get('private/:idEmpresa')
    @UseGuards(AuthRolesGuard([...ROLES_ADMIN_EMPRESAS, ...ROLES_INVESTIGADORES]))
    @ApiOperation({
        summary: 'Api paara buscar una empresa. para usuarios con sesion',
    })
    async findOnePrivate(
        @Param('idEmpresa', ParseIntPipe) idEmpresa: number,
        @Req() req: any,
        @Res() res: Response,
    ) {
        // --- TAMBIÉN LA DEFINIMOS AQUÍ ---
        const isInvestigador = ROLES_INVESTIGADORES.includes(req.user.rol);
        const idUsuario = isInvestigador ? (req.user.sub as number) : undefined;
        // ----------------------------------

        const empresa = await this.empresasService.findOnePrivate(idEmpresa, idUsuario);
        return OkRes(res, { empresa });
    }

    // =========================================================
    // RUTAS PARA EDITAR Y ELIMINAR EMPRESAS
    // =========================================================

    @Put('private/:idEmpresa')
    @UseGuards(AuthRolesGuard(ROLES_ADMIN_EMPRESAS as unknown as number[]))
    @ApiOperation({
        summary: 'Api para actualizar/editar los datos de una empresa',
    })
    @ApiOkResponse({ description: 'Empresa actualizada exitosamente' })
    @ApiNotFoundResponse(SwaggerNotFoundCommon())
    async updateEmpresaPrivate(
        @Param('idEmpresa', ParseIntPipe) idEmpresa: number,
        @Body() data: any, 
        @Res() res: Response,
    ) {
        const empresa = await this.empresasService.updateEmpresa(idEmpresa, data);
        return OkRes(res, { message: 'Empresa actualizada correctamente', empresa });
    }

    @Delete(':idEmpresa')
    @UseGuards(AuthRolesGuard(ROLES_ADMIN_EMPRESAS as unknown as number[]))
    @ApiOperation({
        summary: 'Api para eliminar o dar de baja una empresa',
    })
    @ApiOkResponse({ description: 'Empresa eliminada exitosamente' })
    @ApiNotFoundResponse(SwaggerNotFoundCommon())
    async deleteEmpresa(
        @Param('idEmpresa', ParseIntPipe) idEmpresa: number,
        @Res() res: Response,
    ) {
        await this.empresasService.deleteEmpresa(idEmpresa);
        return OkRes(res, { message: 'Empresa eliminada del sistema' });
    }
}