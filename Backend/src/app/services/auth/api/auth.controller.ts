import { Body, Controller, Post, Get, Param, Res, Req, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';
import { RegisterDto } from '../dto/register.dto';
import { LoginDto } from '../dto/login.dto';
import { CreatedRes, OkRes } from 'src/common/utils';
import { ApiBadRequestResponse, ApiConflictResponse, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { CommonResponseDto } from 'src/shared/dto/common-response.dto';
import { LoginResponseDto } from '../dto/login-response.dto';
import { SwaggerBadRequestCommon } from 'src/common/utils/swagger/swagger-response.utils';
import { ForgotPasswordDto, ResetPasswordDto } from '../dto/reset-password.dto';
import { CaptchaGuard } from '../guards/captcha.guard'; // ← Cambiado ./ por ../ // ← AGREGADO: Importamos el guardián de reCAPTCHA
import { Throttle } from '@nestjs/throttler';
@Controller('api/auth')
export class AuthController {
	constructor(private readonly authService: AuthService) { }

	@Post('/register')
	@ApiOperation({
		summary: 'Api para registrar usuarios como visitantes',
	})
	@ApiCreatedResponse({
		description: 'Respuesta en caso de crear usuario exitosamente',
		type: CommonResponseDto
	})
	@ApiBadRequestResponse(SwaggerBadRequestCommon())
	@ApiConflictResponse({
		description: 'Respuesta en caso de nombre de usuario ya usado',
		type: CommonResponseDto
	})
	async register(@Body() data: RegisterDto, @Res() res: Response) {
		const usuario = await this.authService.register(data);
		return CreatedRes(res, {
			message: 'El usuario fue registrado'
		});
	}

	@UseGuards(CaptchaGuard)
	@Throttle({ short: { limit: 5, ttl: 60000 } }) // ← AGREGADO: El guardián validará el token de Google ANTES de procesar las credenciales
	@Post('/login')
	@ApiOperation({
		summary: 'Api iniciar sesion en el sistema'
	})
	@ApiOkResponse({
		description: 'Respuesta en caso de iniciar sesion exitosamente',
		type: LoginResponseDto
	})
	@ApiUnauthorizedResponse({
		description: 'Respuesta en caso de ingresar credenciales incorrectas',
		type: CommonResponseDto
	})
	@ApiBadRequestResponse(SwaggerBadRequestCommon())
	async login(@Body() data: LoginDto, @Res() res: Response, @Req() req: Request) {
		const response = await this.authService.login(data, req.ip ?? '127.0.0.1');
		return OkRes(res, response);
	}

	// --- M-07: Recuperación de contraseña ---

	@Post('/forgot-password')
	@ApiOperation({ summary: 'Solicitar restablecimiento de contraseña por correo' })
	@ApiOkResponse({ description: 'Correo enviado si la cuenta existe', type: CommonResponseDto })
	async forgotPassword(@Body() dto: ForgotPasswordDto, @Res() res: Response, @Req() req: Request) {
		await this.authService.solicitarResetPassword(dto.correo, req.ip ?? '127.0.0.1');
		return OkRes(res, {
			message: 'Si existe una cuenta con ese correo, recibirás un enlace para restablecer tu contraseña.'
		});
	}

	@Get('/reset-password/validate/:token')
	@ApiOperation({ summary: 'Validar si un token de restablecimiento es válido' })
	@ApiOkResponse({ description: 'Estado de validez del token', type: CommonResponseDto })
	async validateResetToken(@Param('token') token: string, @Res() res: Response) {
		const result = await this.authService.validarTokenReset(token);
		return OkRes(res, result);
	}

	@Post('/reset-password')
	@ApiOperation({ summary: 'Confirmar el restablecimiento de contraseña con token' })
	@ApiOkResponse({ description: 'Contraseña actualizada exitosamente', type: CommonResponseDto })
	@ApiBadRequestResponse(SwaggerBadRequestCommon())
	async resetPassword(@Body() dto: ResetPasswordDto, @Res() res: Response, @Req() req: Request) {
		await this.authService.confirmarResetPassword(dto.token, dto.passwordNuevo, req.ip ?? '127.0.0.1');
		return OkRes(res, { message: 'Contraseña restablecida exitosamente.' });
	}
}