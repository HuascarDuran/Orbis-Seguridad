/**
 * @file create-riesgo.dto.ts / update-riesgo.dto.ts
 * @description DTOs con validación estricta para el módulo de riesgos.
 *
 * SEGURIDAD: `nivelRiesgo` y `puntuacion` están AUSENTES del DTO de forma
 * deliberada. El servidor los calcula siempre vía @BeforeInsert/@BeforeUpdate.
 */

import {
    IsDateString,
    IsEnum,
    IsInt,
    IsNotEmpty,
    IsOptional,
    IsString,
    Max,
    MaxLength,
    Min,
    MinLength,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CategoriaRiesgo, EstadoRiesgo } from './riesgo.entity';

export class CreateRiesgoDto {
    @ApiProperty({ example: 'Acceso no autorizado a base de datos de empresas' })
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(200)
    titulo: string;

    @ApiProperty({ example: 'Un actor interno podría explotar credenciales débiles...' })
    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    descripcion: string;

    @ApiProperty({ enum: CategoriaRiesgo, example: CategoriaRiesgo.SEGURIDAD_INFORMACION })
    @IsEnum(CategoriaRiesgo)
    categoria: CategoriaRiesgo;

    @ApiProperty({ minimum: 1, maximum: 5, description: '1=Muy improbable, 5=Casi seguro' })
    @IsInt()
    @Min(1)
    @Max(5)
    probabilidad: number;

    @ApiProperty({ minimum: 1, maximum: 5, description: '1=Insignificante, 5=Catastrófico' })
    @IsInt()
    @Min(1)
    @Max(5)
    impacto: number;

    @ApiProperty({ example: 'Exposición de datos confidenciales de 200+ empresas.' })
    @IsString()
    @IsNotEmpty()
    consecuencias: string;

    @ApiProperty({ example: 'Implementar MFA en 30 días, auditoría de accesos mensual.' })
    @IsString()
    @IsNotEmpty()
    planAccion: string;

    @ApiPropertyOptional({ example: 'Política de contraseñas vigente, firewall configurado.' })
    @IsOptional()
    @IsString()
    controlesExistentes?: string;

    @ApiProperty({ example: '2026-05-24', description: 'Fecha de identificación del riesgo (ISO 8601)' })
    @IsDateString()
    fechaIdentificacion: string;

    @ApiPropertyOptional({ example: '2026-06-24' })
    @IsOptional()
    @IsDateString()
    fechaRevision?: string;

    @ApiProperty({ description: 'ID del usuario responsable del seguimiento' })
    @IsInt()
    @Min(1)
    idResponsable: number;
}

export class UpdateRiesgoDto extends PartialType(CreateRiesgoDto) {
    @ApiPropertyOptional({ enum: EstadoRiesgo })
    @IsOptional()
    @IsEnum(EstadoRiesgo)
    estado?: EstadoRiesgo;

    @ApiPropertyOptional({ example: '2026-05-30' })
    @IsOptional()
    @IsDateString()
    fechaCierre?: string;
}
