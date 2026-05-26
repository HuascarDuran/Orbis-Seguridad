// src/app/services/auth/guards/captcha.guard.ts
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import * as https from 'node:https';
import * as querystring from 'node:querystring';

interface RecaptchaVerifyResponse {
  success: boolean;
  score?: number;
  action?: string;
  challenge_ts?: string;
  hostname?: string;
  'error-codes'?: string[];
}

@Injectable()
export class CaptchaGuard implements CanActivate {
  private readonly logger = new Logger(CaptchaGuard.name);
  private readonly RECAPTCHA_HOST = 'www.google.com';
  private readonly RECAPTCHA_PATH = '/recaptcha/api/siteverify';
  private readonly MIN_SCORE = 0.5;

  constructor(private readonly configService: ConfigService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const captchaEnabled = this.configService.get<string>('CAPTCHA_ENABLED', 'true');
    if (captchaEnabled === 'false') {
      return true;
    }

    const request = context.switchToHttp().getRequest<Request>();
    const captchaToken = request.headers['x-captcha-token'];

    // El header puede llegar como string o string[]; normalizamos
    const token = Array.isArray(captchaToken) ? captchaToken[0] : captchaToken;

    if (!token || typeof token !== 'string' || token.trim().length === 0) {
      throw new BadRequestException({
        message: 'Se requiere verificación CAPTCHA.',
        code: 'CAPTCHA_REQUIRED',
      });
    }

    const secretKey = this.configService.get<string>('RECAPTCHA_SECRET_KEY');
    if (!secretKey) {
      this.logger.error('RECAPTCHA_SECRET_KEY no está configurada en el entorno.');
      throw new BadRequestException({
        message: 'Configuración de seguridad inválida.',
        code: 'CAPTCHA_CONFIG_ERROR',
      });
    }

    let verifyResult: RecaptchaVerifyResponse;
    try {
      verifyResult = await this.verifyWithGoogle(secretKey, token.trim());
    } catch (error) {
      this.logger.error('Error de red al contactar servidor reCAPTCHA:', error);
      throw new BadRequestException({
        message: 'No se pudo verificar el CAPTCHA. Intenta de nuevo.',
        code: 'CAPTCHA_SERVICE_ERROR',
      });
    }

    if (!verifyResult.success) {
      this.logger.warn(
        `CAPTCHA fallido. Códigos de error: ${verifyResult['error-codes']?.join(', ')}`,
      );
      throw new BadRequestException({
        message: 'Verificación CAPTCHA inválida. Intenta de nuevo.',
        code: 'CAPTCHA_INVALID',
      });
    }

    // Validación de score solo para reCAPTCHA v3
    if (verifyResult.score !== undefined && verifyResult.score < this.MIN_SCORE) {
      this.logger.warn(
        `CAPTCHA score insuficiente: ${verifyResult.score}. Posible tráfico automatizado.`,
      );
      throw new BadRequestException({
        message: 'Verificación CAPTCHA fallida. Comportamiento sospechoso detectado.',
        code: 'CAPTCHA_SCORE_LOW',
      });
    }

    this.logger.log(`CAPTCHA válido. Score: ${verifyResult.score ?? 'N/A'}`);
    return true;
  }

  /**
   * Realiza la verificación contra la API de Google usando el módulo
   * nativo `node:https`. Esto elimina cualquier intermediario (Axios,
   * fetch-polyfill) que pueda recodificar el token antes de enviarlo.
   */
  private verifyWithGoogle(
    secret: string,
    response: string,
  ): Promise<RecaptchaVerifyResponse> {
    // querystring.stringify es el codificador canónico de Node.js para
    // application/x-www-form-urlencoded. Maneja correctamente tokens
    // largos con caracteres especiales sin doble codificación.
    const postBody = querystring.stringify({ secret, response });

    const options: https.RequestOptions = {
      hostname: this.RECAPTCHA_HOST,
      path: this.RECAPTCHA_PATH,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postBody),
      },
    };

    return new Promise((resolve, reject) => {
      const req = https.request(options, (res) => {
        let raw = '';
        res.setEncoding('utf8');
        res.on('data', (chunk: string) => { raw += chunk; });
        res.on('end', () => {
          try {
            resolve(JSON.parse(raw) as RecaptchaVerifyResponse);
          } catch {
            reject(new Error(`Respuesta JSON inválida de Google: ${raw}`));
          }
        });
      });

      req.on('error', reject);

      // Timeout de 7 segundos para la llamada a Google
      req.setTimeout(7000, () => {
        req.destroy(new Error('Timeout al verificar CAPTCHA con Google'));
      });

      req.write(postBody);
      req.end();
    });
  }
}