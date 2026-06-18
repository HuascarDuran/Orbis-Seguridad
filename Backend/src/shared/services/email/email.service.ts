/**
 * @file email.service.ts (REFACTORIZADO — añadido enviarVerificacionEmail)
 *
 * CAMBIOS RESPECTO A LA VERSIÓN ANTERIOR:
 * ─────────────────────────────────────────────────────────────────────────────
 * [NUEVO] enviarVerificacionEmail(correo, verifyUrl)
 *         Envía el link de verificación al visitante recién registrado.
 *         El link apunta a /verify-email?token=<rawToken> en el frontend.
 *         El diseño visual sigue exactamente el mismo estilo HTML inline
 *         de los demás métodos (botón #F29E38, font Arial, max-width 600px).
 *
 * TODO LO DEMÁS ES IDÉNTICO — sendEmailAsync, sendEmail y todos los métodos
 * existentes no se tocaron.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import axios from 'axios';

interface EmailAttachment {
    filename:     string;
    content:      Buffer | string;
    contentType?: string;
}

interface EmailOptions {
    to:           string | string[];
    subject:      string;
    text?:        string;
    html?:        string;
    attachments?: EmailAttachment[];
    template?:    string;
    context?:     Record<string, unknown>;
}

@Injectable()
export class EmailService {
    constructor(private readonly mailerService: MailerService) {}

    private async sendEmailAsync(options: EmailOptions): Promise<void> {
        try {
            const brevoApiKey = process.env.BREVO_API_KEY;
            const resendApiKey = process.env.RESEND_API_KEY;
            const sendgridApiKey = process.env.SENDGRID_API_KEY;

            if (brevoApiKey) {
                const senderEmail = process.env.USER_EMAIL || 'noreply@orbis.com';
                const recipients = Array.isArray(options.to) ? options.to : [options.to];
                await axios.post('https://api.brevo.com/v3/smtp/email', {
                    sender: { name: 'Orbis', email: senderEmail },
                    to: recipients.map(email => ({ email })),
                    subject: options.subject,
                    htmlContent: options.html,
                    textContent: options.text,
                }, {
                    headers: {
                        'accept': 'application/json',
                        'api-key': brevoApiKey,
                        'content-type': 'application/json',
                    }
                });
                return;
            }

            if (resendApiKey) {
                const senderEmail = process.env.USER_EMAIL || 'onboarding@resend.dev';
                const recipients = Array.isArray(options.to) ? options.to : [options.to];
                await axios.post('https://api.resend.com/emails', {
                    from: `Orbis <${senderEmail}>`,
                    to: recipients,
                    subject: options.subject,
                    html: options.html,
                    text: options.text,
                }, {
                    headers: {
                        'Authorization': `Bearer ${resendApiKey}`,
                        'Content-Type': 'application/json',
                    }
                });
                return;
            }

            if (sendgridApiKey) {
                const senderEmail = process.env.USER_EMAIL || 'noreply@orbis.com';
                const recipients = Array.isArray(options.to) ? options.to : [options.to];
                await axios.post('https://api.sendgrid.com/v3/mail/send', {
                    personalizations: [{
                        to: recipients.map(email => ({ email })),
                    }],
                    from: { email: senderEmail, name: 'Orbis' },
                    subject: options.subject,
                    content: [
                        { type: 'text/html', value: options.html },
                    ],
                }, {
                    headers: {
                        'Authorization': `Bearer ${sendgridApiKey}`,
                        'Content-Type': 'application/json',
                    }
                });
                return;
            }

            // Fallback to Gmail SMTP
            await this.mailerService.sendMail({
                to:          options.to,
                subject:     options.subject,
                text:        options.text,
                html:        options.html,
                template:    options.template,
                context:     options.context,
                attachments: options.attachments?.map((att) => ({
                    filename:    att.filename,
                    content:     att.content,
                    contentType: att.contentType,
                })),
            });
        } catch (error) {
            console.error(
                '[EmailService] Error al enviar correo:',
                error instanceof Error ? error.message : error,
            );
        }
    }

    async sendEmail(options: EmailOptions): Promise<void> {
        setImmediate(() => {
            this.sendEmailAsync(options);
        });
    }

    // ─── [NUEVO] Verificación de correo electrónico ───────────────────────────
    /**
     * Envía el link de verificación al visitante que acaba de registrarse.
     *
     * @param correo    - Dirección de destino (la que ingresó en el formulario)
     * @param verifyUrl - URL completa con el token en claro como query param
     *                    Ej: https://orbis-seguridad.vercel.app/verify-email?token=abc123
     *
     * SEGURIDAD: el token viaja en el link del correo, nunca en el body de la
     * respuesta HTTP al cliente. Solo quien tenga acceso al buzón puede usarlo.
     */
    async enviarVerificacionEmail(correo: string, verifyUrl: string): Promise<void> {
        await this.sendEmail({
            to:      correo,
            subject: 'Orbis — Verifica tu correo electrónico',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #072D42;">Confirma tu correo para activar tu cuenta</h2>
                    <p>Gracias por registrarte en <strong>Orbis Seguridad</strong>.</p>
                    <p>Para completar tu registro y poder iniciar sesión, haz clic en el botón de abajo.
                       El enlace es válido por <strong>24 horas</strong>.</p>
                    <div style="text-align: center; margin: 28px 0;">
                        <a href="${verifyUrl}"
                           style="background: #F29E38; color: #ffffff; padding: 13px 28px;
                                  border-radius: 6px; text-decoration: none;
                                  font-weight: bold; font-size: 15px;">
                            Verificar mi correo
                        </a>
                    </div>
                    <p style="color: #555555; font-size: 14px;">
                        Si el botón no funciona, copia y pega este enlace en tu navegador:
                    </p>
                    <p style="word-break: break-all; font-size: 13px; color: #072D42;">
                        ${verifyUrl}
                    </p>
                    <hr style="margin: 24px 0; border: none; border-top: 1px solid #eeeeee;" />
                    <p style="color: #9298A6; font-size: 12px;">
                        Si no creaste una cuenta en Orbis, puedes ignorar este correo con seguridad.
                        Tu dirección no será utilizada.
                    </p>
                </div>
            `,
        });
    }

    // ─── Métodos existentes (sin cambios) ─────────────────────────────────────

    async enviarCuentaBloqueada(correo: string, usuario: string): Promise<void> {
        await this.sendEmail({
            to:      correo,
            subject: 'Orbis — Tu cuenta ha sido bloqueada',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #c0392b;">Cuenta bloqueada temporalmente</h2>
                    <p>Hola <strong>${usuario}</strong>,</p>
                    <p>Tu cuenta fue bloqueada por múltiples intentos de inicio de sesión fallidos.</p>
                    <p>Podrás intentar nuevamente después del período de bloqueo, o contactar a un
                       administrador para desbloquearla de inmediato.</p>
                    <p style="color: #7f8c8d; font-size: 12px;">
                        Si no fuiste tú, cambia tu contraseña en cuanto puedas acceder.
                    </p>
                </div>
            `,
        });
    }

    async enviarResetPassword(
        correo: string,
        resetUrl: string,
        expiresInMinutes: number,
    ): Promise<void> {
        await this.sendEmail({
            to:      correo,
            subject: 'Orbis — Recuperación de contraseña',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #1a1a2e;">Restablecer contraseña</h2>
                    <p>Recibimos una solicitud para restablecer la contraseña de tu cuenta.</p>
                    <p>Haz clic en el siguiente botón para crear una nueva contraseña.
                       El enlace expirará en <strong>${expiresInMinutes} minutos</strong>.</p>
                    <div style="text-align: center; margin: 24px 0;">
                        <a href="${resetUrl}"
                           style="background: #F29E38; color: #fff; padding: 12px 24px;
                                  border-radius: 6px; text-decoration: none; font-weight: bold;">
                            Restablecer contraseña
                        </a>
                    </div>
                    <p style="color: #7f8c8d; font-size: 12px;">
                        Si no solicitaste esto, ignora este correo. Tu contraseña no cambiará.
                    </p>
                </div>
            `,
        });
    }

    async enviarPasswordCambiada(correo: string): Promise<void> {
        await this.sendEmail({
            to:      correo,
            subject: 'Orbis — Tu contraseña fue cambiada',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #27ae60;">Contraseña actualizada</h2>
                    <p>Tu contraseña fue cambiada exitosamente.</p>
                    <p>Si no realizaste este cambio, contacta inmediatamente a un administrador.</p>
                </div>
            `,
        });
    }

    async enviarPasswordExpirada(correo: string, usuario: string): Promise<void> {
        await this.sendEmail({
            to:      correo,
            subject: 'Orbis — Tu contraseña ha expirado',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #e67e22;">Contraseña expirada</h2>
                    <p>Hola <strong>${usuario}</strong>,</p>
                    <p>Tu contraseña ha expirado. Deberás crear una nueva contraseña la próxima vez
                       que inicies sesión.</p>
                    <p>El sistema te redirigirá automáticamente al formulario de cambio de contraseña.</p>
                </div>
            `,
        });
    }

    async enviarAccesoFormularioExterno(
        correoReal: string,
        alias: string,
        pwd: string,
        formularioUrl: string,
    ): Promise<void> {
        await this.sendEmail({
            to:      correoReal,
            subject: 'Orbis — Tu cuenta y acceso al formulario de empresas',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #1a1a2e;">Bienvenido a Orbis</h2>
                    <p>Tu cuenta ha sido creada. Tus credenciales de acceso son:</p>
                    <div style="background: #f4f4f4; padding: 16px; border-radius: 8px; margin: 16px 0;">
                        <p><strong>Usuario:</strong> ${alias}@orbis.com</p>
                        <p><strong>Contraseña temporal:</strong>
                           <code style="font-size: 16px; color: #e74c3c;">${pwd}</code></p>
                    </div>
                    <p>⚠️ <strong>Esta contraseña es temporal.</strong>
                       Al ingresar, serás redirigido a cambiarla.</p>
                    <hr style="margin: 24px 0; border: none; border-top: 1px solid #eee;" />
                    <h3 style="color: #0f2c4a;">Acceso al formulario de registro de empresas</h3>
                    <p>También tienes acceso al formulario externo de registro de empresas:</p>
                    <div style="text-align: center; margin: 20px 0;">
                        <a href="${formularioUrl}"
                           style="background: #F29E38; color: #fff; padding: 12px 24px;
                                  border-radius: 6px; text-decoration: none; font-weight: bold;">
                            Abrir formulario de empresas
                        </a>
                    </div>
                    <p style="color: #7f8c8d; font-size: 12px;">
                        Este correo es confidencial. No lo compartas con nadie.
                    </p>
                </div>
            `,
        });
    }

    async enviarPasswordTemporal(
        correoReal: string,
        alias: string,
        pwd: string,
    ): Promise<void> {
        await this.sendEmail({
            to:      correoReal,
            subject: 'Orbis — Tu cuenta ha sido creada',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #1a1a2e;">Bienvenido a Orbis</h2>
                    <p>Tu cuenta ha sido creada. Tus credenciales de acceso son:</p>
                    <div style="background: #f4f4f4; padding: 16px; border-radius: 8px; margin: 16px 0;">
                        <p><strong>Usuario:</strong> ${alias}@orbis.com</p>
                        <p><strong>Contraseña temporal:</strong>
                           <code style="font-size: 16px; color: #e74c3c;">${pwd}</code></p>
                    </div>
                    <p>⚠️ <strong>Esta contraseña es temporal.</strong>
                       Al ingresar, serás redirigido a cambiarla.</p>
                    <p>Este correo es confidencial. No lo compartas con nadie.</p>
                </div>
            `,
        });
    }
}