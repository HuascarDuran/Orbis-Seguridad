/**
 * @file register-public.dto.ts
 *
 * DTO usado EXCLUSIVAMENTE en el endpoint público de auto-registro.
 *
 * SEGURIDAD: este DTO NO expone `idRol`. El backend forzará Rol.VISITANTE
 * sin importar lo que llegue del cliente. Esta es una defensa explícita
 * contra Mass Assignment (OWASP A04).
 */

import {
    IsEmail,
    IsNotEmpty,
    IsOptional,
    IsString,
    MaxLength,
    MinLength,
    Matches,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class RegisterPublicDto {
    @IsString()
    @IsNotEmpty({ message: 'El nombre es obligatorio.' })
    @MinLength(2, { message: 'El nombre debe tener al menos 2 caracteres.' })
    @MaxLength(50, { message: 'El nombre no puede superar 50 caracteres.' })
    @Matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]+$/, {
        message: 'El nombre solo puede contener letras, espacios, apóstrofes y guiones.',
    })
    @Transform(({ value }: { value: string }) =>
        typeof value === 'string' ? value.trim() : value,
    )
    nombre: string;

    @IsString()
    @IsNotEmpty({ message: 'El apellido paterno es obligatorio.' })
    @MinLength(2, { message: 'El apellido paterno debe tener al menos 2 caracteres.' })
    @MaxLength(50, { message: 'El apellido paterno no puede superar 50 caracteres.' })
    @Matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]+$/, {
        message:
            'El apellido paterno solo puede contener letras, espacios, apóstrofes y guiones.',
    })
    @Transform(({ value }: { value: string }) =>
        typeof value === 'string' ? value.trim() : value,
    )
    apellidoPaterno: string;

    @IsString()
    @IsOptional()
    @MaxLength(50, { message: 'El apellido materno no puede superar 50 caracteres.' })
    @Matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]*$/, {
        message:
            'El apellido materno solo puede contener letras, espacios, apóstrofes y guiones.',
    })
    @Transform(({ value }: { value: string }) =>
        typeof value === 'string' ? value.trim() : value,
    )
    apellidoMaterno?: string;

    @IsEmail({}, { message: 'El correo electrónico no es válido.' })
    @MaxLength(120, { message: 'El correo no puede superar 120 caracteres.' })
    @Transform(({ value }: { value: string }) =>
        typeof value === 'string' ? value.toLowerCase().trim() : value,
    )
    correo: string;

    @IsString()
    @IsNotEmpty({ message: 'La contraseña es obligatoria.' })
    @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres.' })
    @MaxLength(128, { message: 'La contraseña no puede superar 128 caracteres.' })
    contrasenia: string;
}