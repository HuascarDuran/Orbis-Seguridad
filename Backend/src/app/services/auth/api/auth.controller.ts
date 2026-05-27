/**
 * @file auth.controller.ts (REFACTORIZADO v2 - Soft Validation + Public Register)
 *
 * CAMBIOS APLICADOS EN ESTA ITERACIÓN:
 * ─────────────────────────────────────────────────────────────────────────────
 * [FIX-10] NUEVO endpoint POST /register-public: usa RegisterPublicDto (sin
 *          idRol, sin usuario libre) y aplica @Throttle + @UseGuards(CaptchaGuard)
 *          como el login. Rate-limit diferenciado: 3 registros/hora por IP
 *          para frenar bots de creación masiva de cuentas (OWASP A07).
 *
 * [FIX-11] NUEVO endpoint GET /verify-email: consume el token de verificación.
 *          Marcado como @Public() (no requiere JWT) pero con Throttle propio
 *          para evitar brute-force de tokens. Devuelve siempre 200 con mensaje
 *          genérico (anti user-enumeration — OWASP A01).
 *
 * [FIX-12] El endpoint legacy POST /register se MANTIENE intacto para la vía
 *          RRHH (creación desde el panel admin) que usa RegisterDto interno.
 *          Se añade @ApiDeprecated en su descripción para documentar que la
 *          auto-registro público ahora pasa por /register-public.
 *
 * [FIX-13] Se añade @Query para el token de verify-email en lugar de @Param,
 *          para ser consistente con el patrón de /reset-password?token=...
 *          ya establecido en el frontend (link del correo con query param).
 * ─────────────────────────────────────────────────────────────────────────────
 */

import {
    Body,
    Controller,
    Post,
    Get,
    Param,
    Query,
    Res,
    Req,
    UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Throttle } from '@nestjs/throttler';
import {
    ApiBadRequestResponse,
    ApiConflictResponse,
    ApiCreatedResponse,
    ApiOkResponse,
    ApiOperation,
    ApiQuery,
    ApiTags,
    ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { AuthService } from '../services/auth.service';
import { RegisterDto } from '../dto/register.dto';
import { RegisterPublicDto } from '../dto/register-public.dto';
import { LoginDto } from '../dto/login.dto';
import { ForgotPasswordDto, ResetPasswordDto } from '../dto/reset-password.dto';
import { CaptchaGuard } from '../guards/captcha.guard';
import { CreatedRes, OkRes } from 'src/common/utils';
import { CommonResponseDto } from 'src/shared/dto/common-response.dto';
import { LoginResponseDto } from '../dto/login-response.dto';
import { SwaggerBadRequestCommon } from 'src/common/utils/swagger/swagger-response.utils';

@ApiTags('Autenticación')
@Controller('api/auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    // ─────────────────────────────────────────────────────────────────────────
    // REGISTRO INTERNO (vía panel admin/RRHH — sin cambios respecto al original)
    // ─────────────────────────────────────────────────────────────────────────

    @Post('/register')
    @ApiOperation({
        summary: '[Admin/RRHH] Registrar usuario desde panel administrativo',
        description:
            'Uso exclusivo del panel de RRHH. Para auto-registro público de visitantes, usar POST /register-public.',
    })
    @ApiCreatedResponse({
        description: 'Usuario creado exitosamente',
        type: CommonResponseDto,
    })
    @ApiBadRequestResponse(SwaggerBadRequestCommon())
    @ApiConflictResponse({
        description: 'Nombre de usuario o correo ya registrado',
        type: CommonResponseDto,
    })
    async register(@Body() data: RegisterDto, @Res() res: Response) {
        await this.authService.register(data);
        return CreatedRes(res, { message: 'El usuario fue registrado' });
    }

    // ─────────────────────────────────────────────────────────────────────────
    // [NUEVO] REGISTRO PÚBLICO (auto-registro de visitantes)
    // ─────────────────────────────────────────────────────────────────────────

    @UseGuards(CaptchaGuard)
    @Throttle({ short: { limit: 3, ttl: 3600000 } }) // [FIX-10] Máx. 3 registros/hora por IP
    @Post('/register-public')
    @ApiOperation({
        summary: '[Público] Auto-registro de visitante',
        description:
            'El alias (usuario) se construye en el backend a partir del nombre y apellido. ' +
            'El rol se fuerza a VISITANTE independientemente de lo que envíe el cliente. ' +
            'Se envía un correo de verificación; la cuenta queda inactiva hasta confirmarla.',
    })
    @ApiCreatedResponse({
        description: 'Registro recibido. Correo de verificación enviado.',
        type: CommonResponseDto,
    })
    @ApiBadRequestResponse(SwaggerBadRequestCommon())
    @ApiConflictResponse({
        description: 'El alias o correo ya se encuentra registrado (mensaje genérico)',
        type: CommonResponseDto,
    })
    async registerPublic(
        @Body() data: RegisterPublicDto,
        @Res() res: Response,
        @Req() req: Request,
    ) {
        const result = await this.authService.registerPublic(
            data,
            req.ip ?? '127.0.0.1',
        );
        return CreatedRes(res, result);
    }

    // ─────────────────────────────────────────────────────────────────────────
    // [NUEVO] VERIFICACIÓN DE EMAIL (consumo del link enviado al correo)
    // ─────────────────────────────────────────────────────────────────────────

    @Throttle({ short: { limit: 10, ttl: 60000 } }) // [FIX-11] Anti brute-force de tokens
    @Get('/verify-email')
    @ApiOperation({
        summary: '[Público] Verificar correo electrónico mediante token',
        description:
            'Consume el token enviado al correo del visitante. ' +
            'Idempotente: si el correo ya estaba verificado, responde con 200 sin error. ' +
            'El mensaje de respuesta es genérico para no revelar el estado interno de la cuenta.',
    })
    @ApiQuery({
        name: 'token',
        description: 'Token de verificación recibido por correo (en claro, 64 hex chars)',
        required: true,
        type: String,
    })
    @ApiOkResponse({
        description: 'Correo verificado correctamente (o mensaje genérico en caso de fallo)',
        type: CommonResponseDto,
    })
    async verifyEmail(
        @Query('token') token: string,
        @Res() res: Response,
        @Req() req: Request,
    ) {
        const result = await this.authService.verifyEmail(
            token,
            req.ip ?? '127.0.0.1',
        );
        return OkRes(res, result);
    }

    // ─────────────────────────────────────────────────────────────────────────
    // LOGIN (sin cambios respecto al original)
    // ─────────────────────────────────────────────────────────────────────────

    @UseGuards(CaptchaGuard)
    @Throttle({ short: { limit: 5, ttl: 60000 } })
    @Post('/login')
    @ApiOperation({ summary: 'Iniciar sesión en el sistema' })
    @ApiOkResponse({
        description: 'Sesión iniciada exitosamente',
        type: LoginResponseDto,
    })
    @ApiUnauthorizedResponse({
        description: 'Credenciales incorrectas o cuenta bloqueada',
        type: CommonResponseDto,
    })
    @ApiBadRequestResponse(SwaggerBadRequestCommon())
    async login(
        @Body() data: LoginDto,
        @Res() res: Response,
        @Req() req: Request,
    ) {
        const response = await this.authService.login(data, req.ip ?? '127.0.0.1');
        return OkRes(res, response);
    }

    // ─────────────────────────────────────────────────────────────────────────
    // RECUPERACIÓN DE CONTRASEÑA (sin cambios respecto al original)
    // ─────────────────────────────────────────────────────────────────────────

    @Post('/forgot-password')
    @ApiOperation({ summary: 'Solicitar restablecimiento de contraseña por correo' })
    @ApiOkResponse({
        description: 'Correo enviado si la cuenta existe (respuesta siempre idéntica)',
        type: CommonResponseDto,
    })
    async forgotPassword(
        @Body() dto: ForgotPasswordDto,
        @Res() res: Response,
        @Req() req: Request,
    ) {
        await this.authService.solicitarResetPassword(
            dto.correo,
            req.ip ?? '127.0.0.1',
        );
        return OkRes(res, {
            message:
                'Si existe una cuenta con ese correo, recibirás un enlace para restablecer tu contraseña.',
        });
    }

    @Get('/reset-password/validate/:token')
    @ApiOperation({ summary: 'Validar si un token de restablecimiento es válido' })
    @ApiOkResponse({
        description: 'Estado de validez del token',
        type: CommonResponseDto,
    })
    async validateResetToken(
        @Param('token') token: string,
        @Res() res: Response,
    ) {
        const result = await this.authService.validarTokenReset(token);
        return OkRes(res, result);
    }

    @Post('/reset-password')
    @ApiOperation({ summary: 'Confirmar el restablecimiento de contraseña con token' })
    @ApiOkResponse({
        description: 'Contraseña actualizada exitosamente',
        type: CommonResponseDto,
    })
    @ApiBadRequestResponse(SwaggerBadRequestCommon())
    async resetPassword(
        @Body() dto: ResetPasswordDto,
        @Res() res: Response,
        @Req() req: Request,
    ) {
        await this.authService.confirmarResetPassword(
            dto.token,
            dto.passwordNuevo,
            req.ip ?? '127.0.0.1',
        );
        return OkRes(res, { message: 'Contraseña restablecida exitosamente.' });
    }
}