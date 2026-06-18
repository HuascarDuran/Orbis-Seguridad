import { Body, Controller, Post, Res, UseGuards } from "@nestjs/common";
import { AuthRolesGuard as JwtGuard } from "src/app/services/auth/guards/auth-roles.guard";
import { PermisosGuard } from "src/app/services/auth/permisos.guard";
import { RequierePermisos } from "src/shared/decorators/requiere-permisos.decorator";
import { Permiso } from "src/shared/constants/roles.const";
import { FormularioService } from "../services/formulario.service";
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreatedRes } from "src/common/utils";
import { Response } from "express";
import { CommonResponseDto } from "src/shared/dto/common-response.dto";
import { SwaggerBadRequestCommon, SwaggerNotFoundCommon } from "src/common/utils";
import { RegisterEmpresaDto } from "../dto/register-empresa.dto";

@ApiTags('Formulario')
@Controller('api/formulario')
export class FormularioController {
    constructor(private readonly formularioService: FormularioService){}

    @Post()
    @UseGuards(JwtGuard([]), PermisosGuard)
    @RequierePermisos(Permiso.EMPRESAS_CREAR)
    @ApiOperation({
        summary: 'Api para registrar la empresa mediante el formulario'
    })
    @ApiCreatedResponse({
        description: 'Respuesta en caso de registrar la empresa exitosamente',
        type: CommonResponseDto
    })
    @ApiNotFoundResponse(SwaggerNotFoundCommon())
    @ApiBadRequestResponse(SwaggerBadRequestCommon())
    async registerEmpresa(@Body() data: RegisterEmpresaDto,@Res() res: Response){
        const response = await this.formularioService.registerEmpresa(data);
        return CreatedRes(res,{
            message: 'Se registro la empresa exitosamente'
        });
    }
}