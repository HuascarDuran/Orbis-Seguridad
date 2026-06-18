import { IsString, IsNotEmpty, IsArray, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
    @ApiProperty({ example: 'Auditor Externo' })
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @ApiProperty({ example: ['usuarios:leer', 'logs:leer'] })
    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    permisos?: string[];
}
