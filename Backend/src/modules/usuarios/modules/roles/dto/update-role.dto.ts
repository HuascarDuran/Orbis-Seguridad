import { IsString, IsOptional, IsArray } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateRoleDto {
    @ApiPropertyOptional({ example: 'Auditor Externo Modificado' })
    @IsString()
    @IsOptional()
    nombre?: string;

    @ApiPropertyOptional({ example: ['usuarios:leer', 'logs:leer'] })
    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    permisos?: string[];
}
