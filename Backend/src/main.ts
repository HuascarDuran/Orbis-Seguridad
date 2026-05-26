import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { MyConfigModule } from './config/config.module';
import { MyConfigService } from './config/config.service';

// --- IMPORTACIONES DE SEGURIDAD (NUEVAS) ---
import helmet from 'helmet';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const configService = app.get(MyConfigService); // Obtenemos el servicio de configuración

    // Habilitamos el "shutdown hook" para que Nest cierre conexiones correctamente
    app.enableShutdownHooks();

    const isDev = configService.get('NODE_ENV') !== 'production';

    // ─── 1. HELMET — Cabeceras de seguridad HTTP ──────────────────────────────
    // Protege contra XSS y Clickjacking, permitiendo los scripts de Google reCAPTCHA
    app.use(
        helmet({
            contentSecurityPolicy: {
                directives: {
                    defaultSrc: ["'self'"],
                    scriptSrc: [
                        "'self'",
                        'https://www.google.com',          // reCAPTCHA
                        'https://www.gstatic.com',         // reCAPTCHA assets
                    ],
                    styleSrc: ["'self'", "'unsafe-inline'"],
                    imgSrc: ["'self'", 'data:', 'https:'],
                    connectSrc: ["'self'"],
                    fontSrc: ["'self'", 'https:', 'data:'],
                    objectSrc: ["'none'"],
                    upgradeInsecureRequests: [],
                },
            },
            crossOriginEmbedderPolicy: false,
            hsts: {
                maxAge: 31536000,          // 1 año
                includeSubDomains: true,
                preload: true,
            },
        }),
    );

    // Orígenes siempre permitidos en producción (hardcoded + env var extra)
    const HARDCODED_ORIGINS = ['https://orbis-seguridad.vercel.app'];
    const envOrigins = (configService.get<string>('FRONTEND_URL') ?? '')
        .split(',')
        .map((u) => u.trim().replace(/\/$/, ''))
        .filter(Boolean);
    const allowedOrigins = [...new Set([...HARDCODED_ORIGINS, ...envOrigins])];

    console.log(`[CORS] mode=${isDev ? 'dev' : 'prod'} allowed=${JSON.stringify(allowedOrigins)}`);

    // ─── 2. CORS — Solo orígenes autorizados ─────────────────────────────────
    app.enableCors({
        origin: isDev
            ? (origin, callback) => callback(null, true)
            : (origin, callback) => {
                  const normalized = (origin ?? '').replace(/\/$/, '');
                  if (!origin || allowedOrigins.includes(normalized)) {
                      callback(null, true);
                  } else {
                      console.warn(`[CORS] Rejected origin: "${origin}"`);
                      callback(new Error(`CORS: origen no permitido → ${origin}`));
                  }
              },
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        allowedHeaders: [
            'Content-Type',
            'Authorization',
            'x-captcha-token', // ← AGREGADO: Vital para que el frontend pueda mandar el token
        ],
        credentials: true,
        maxAge: 86400, // Pre-flight cache 24h
    });

    // ─── 3. COOKIE PARSER ────────────────────────────────────────────────────
    app.use(cookieParser());

    // ─── 4. VALIDACIÓN GLOBAL ESTRICTA DE DTOs ───────────────────────────────
    app.useGlobalPipes(new ValidationPipe({
        transform: true,
        whitelist: true,            // ← AGREGADO: Elimina campos basura inyectados por atacantes
        forbidNonWhitelisted: true, // ← AGREGADO: Lanza error si mandan campos que no están en el DTO
        transformOptions: {
            enableImplicitConversion: true, 
        },
    }));

    // Desactivamos Swagger en producción por seguridad
    if (configService.get('NODE_ENV') !== 'production') {
        const config = new DocumentBuilder()
            .setTitle('Backend del Bicentenario')
            .setDescription('Documentación de la API del proyecto Bicentenario')
            .setVersion('1.0')
            .addBearerAuth(
                {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
                'access-token',
            )
            .build();
        const document = SwaggerModule.createDocument(app, config);
        SwaggerModule.setup('api/documentation', app, document);
    }

    // El puerto se lee desde las variables de entorno
    await app.listen(configService.get('PORT') ?? 3000, '0.0.0.0');
}
bootstrap().catch((err) => {
    console.error('[BOOTSTRAP ERROR]', err);
    process.exit(1);
});