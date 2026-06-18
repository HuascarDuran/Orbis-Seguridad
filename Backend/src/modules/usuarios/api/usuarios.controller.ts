import {
    Controller,
    Get,
    Patch,
    Delete,
    Post,
    Param,
    Body,
    Res,
    Req,
    ParseIntPipe,
    Put,
    UseGuards,
} from '@nestjs/common';
import { AuthRolesGuard as JwtGuard } from 'src/app/services/auth/guards/auth-roles.guard';
import { PermisosGuard } from 'src/app/services/auth/permisos.guard';
import { RequierePermisos } from 'src/shared/decorators/requiere-permisos.decorator';
import { Permiso } from 'src/shared/constants/roles.const';
import { Response } from 'express';
import { CreatedRes, OkRes, SwaggerBadRequestCommon, SwaggerConflictCommon, SwaggerNotFoundCommon } from 'src/common/utils';
import { UsuariosService, CambiarPasswordDto } from '../services/usuarios.service';
import { UsuariosAuthService, AuditoriaCtx } from '../services/usuarios-auth.service';
import { PasswordHistoryService } from '../services/password-history.service';
import { UpdateUsuarioDto } from '../dto/update-usuario.dto';
import { CreateUsuarioNuevoDto } from '../dto/create-usuario-nuevo.dto';
import { ApiBadRequestResponse, ApiConflictResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiParam } from '@nestjs/swagger';
import { FindAllUsuariosDto } from '../dto/find-all-usuarios.dto';
import { CommonResponseDto } from 'src/shared/dto/common-response.dto';

@Controller('api/usuarios')
export class UsuariosController {
    constructor(
        private readonly usuariosService: UsuariosService,
        private readonly usuariosAuthService: UsuariosAuthService,
        private readonly passwordHistoryService: PasswordHistoryService,
    ) { }

    // Función helper privada para construir el contexto de auditoría de forma centralizada
    private construirCtx(req: any): AuditoriaCtx {
        return {
            idAdmin:    req.user?.id || req.user?.sub || 1,
            adminAlias: req.user?.usuario || req.user?.nombreUsuario || 'admin_sistema',
            ipOrigen:   req.ip || req.socket?.remoteAddress || '127.0.0.1',
        };
    }

    @Get()
    @UseGuards(JwtGuard([]), PermisosGuard)
    @RequierePermisos(Permiso.USUARIOS_LEER)
    @ApiOperation({ summary: 'Api para obtener los usuarios (solo admins)' })
    @ApiOkResponse({ description: 'Respuesta en caso de obtener usuarios', type: FindAllUsuariosDto })
    async findAll(@Res() res: Response) {
        const usuarios = await this.usuariosService.findAll();
        return OkRes(res, { usuarios });
    }

    @Post()
    @UseGuards(JwtGuard([]), PermisosGuard)
    @RequierePermisos(Permiso.USUARIOS_CREAR)
    @ApiOperation({ summary: 'Api para crear un usuario con alias @orbis.com (solo admins)' })
    @ApiCreatedResponse({ description: 'Usuario creado y credenciales enviadas por correo', type: CommonResponseDto })
    @ApiBadRequestResponse(SwaggerBadRequestCommon())
    async crearUsuario(@Body() dto: CreateUsuarioNuevoDto, @Req() req: any, @Res() res: Response) {
        const adminRol = req.user?.idRol || req.user?.rol;
        const auditoria = this.construirCtx(req);
        
        await this.usuariosAuthService.crearUsuario(dto, adminRol, auditoria);
        return CreatedRes(res, { message: 'Usuario creado exitosamente. Las credenciales fueron enviadas por correo.' });
    }

    @Patch('cambiar-password')
    @UseGuards(JwtGuard([]))
    @ApiOperation({ summary: 'Api para que el usuario autenticado cambie su propia contraseña' })
    @ApiOkResponse({ description: 'Contraseña actualizada exitosamente', type: CommonResponseDto })
    @ApiBadRequestResponse(SwaggerBadRequestCommon())
    async cambiarPassword(@Body() dto: CambiarPasswordDto, @Req() req: any, @Res() res: Response) {
        await this.usuariosService.cambiarPassword(req.user.sub, dto);
        return OkRes(res, { message: 'Contraseña actualizada exitosamente' });
    }

    @Put(':id')
    @UseGuards(JwtGuard([]), PermisosGuard)
    @RequierePermisos(Permiso.USUARIOS_EDITAR)
    @ApiOperation({ summary: 'Api para actualizar información de un usuario (solo admins)' })
    @ApiOkResponse({ description: 'Respuesta en caso de actualizar el usuario', type: CommonResponseDto })
    @ApiBadRequestResponse(SwaggerBadRequestCommon())
    @ApiNotFoundResponse(SwaggerNotFoundCommon())
    @ApiConflictResponse(SwaggerConflictCommon())
    @ApiParam({ name: 'id', description: 'Id del usuario' })
    async updateUsuario(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: UpdateUsuarioDto,
        @Req() req: any,
        @Res() res: Response,
    ) {
        const auditoria = this.construirCtx(req);
        await this.usuariosAuthService.update(id, dto, auditoria);
        return OkRes(res, { message: 'El usuario se actualizó exitosamente' });
    }

    @Patch(':id/desbloquear')
    @UseGuards(JwtGuard([]), PermisosGuard)
    @RequierePermisos(Permiso.USUARIOS_BLOQUEAR)
    @ApiOperation({ summary: 'Api para desbloquear la cuenta de un usuario (solo admins)' })
    @ApiOkResponse({ description: 'Cuenta desbloqueada exitosamente', type: CommonResponseDto })
    @ApiNotFoundResponse(SwaggerNotFoundCommon())
    @ApiParam({ name: 'id', description: 'Id del usuario' })
    async desbloquearCuenta(
        @Param('id', ParseIntPipe) id: number,
        @Res() res: Response,
    ) {
        await this.usuariosService.desbloquearCuenta(id);
        return OkRes(res, { message: 'Cuenta desbloqueada exitosamente' });
    }

    @Patch(':id/restaurar')
    @UseGuards(JwtGuard([]), PermisosGuard)
    @RequierePermisos(Permiso.USUARIOS_EDITAR)
    @ApiOperation({ summary: 'Restaurar usuario desactivado (solo SUPERADMIN)' })
    @ApiOkResponse({ description: 'Usuario restaurado exitosamente', type: CommonResponseDto })
    @ApiParam({ name: 'id', description: 'Id del usuario' })
    async restaurarUsuario(
        @Param('id', ParseIntPipe) id: number,
        @Res() res: Response,
    ) {
        await this.usuariosService.restaurar(id);
        return OkRes(res, { message: 'Usuario restaurado exitosamente' });
    }

    @Delete(':id')
    @UseGuards(JwtGuard([]), PermisosGuard)
    @RequierePermisos(Permiso.USUARIOS_ELIMINAR)
    @ApiOperation({ summary: 'Api para eliminar a un usuario (solo admins)' })
    @ApiOkResponse({ description: 'Respuesta en caso de eliminar un usuario', type: CommonResponseDto })
    @ApiBadRequestResponse(SwaggerBadRequestCommon())
    @ApiNotFoundResponse(SwaggerNotFoundCommon())
    @ApiParam({ name: 'id', description: 'Id del usuario' })
    async deleteUsuario(
        @Param('id', ParseIntPipe) id: number,
        @Req() req: any,
        @Res() res: Response,
    ) {
        const auditoria = this.construirCtx(req);
        await this.usuariosAuthService.remove(id, auditoria);
        return OkRes(res, { message: 'Usuario eliminado' });
    }

    @Get(':id/historial-passwords')
    @UseGuards(JwtGuard([]), PermisosGuard)
    @RequierePermisos(Permiso.USUARIOS_LEER)
    @ApiOperation({ summary: 'Obtener historial de fechas de cambio de contraseña (sin hashes)' })
    @ApiOkResponse({ description: 'Historial de fechas obtenido', type: CommonResponseDto })
    @ApiNotFoundResponse(SwaggerNotFoundCommon())
    @ApiParam({ name: 'id', description: 'Id del usuario' })
    async obtenerHistorialPasswords(
        @Param('id', ParseIntPipe) id: number,
        @Res() res: Response,
    ) {
        const usuario = await this.usuariosService.findOne(id, { throwException: true });
        const historial = await this.passwordHistoryService.obtenerHistorialFechas(id);
        return OkRes(res, {
            id_usuario: usuario!.id,
            usuario: usuario!.usuario,
            ...historial,
        });
    }
}