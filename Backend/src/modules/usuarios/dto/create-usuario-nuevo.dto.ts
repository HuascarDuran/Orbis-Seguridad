import {
    IsString, IsEmail, IsNotEmpty, IsOptional,
    IsArray, IsInt,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUsuarioNuevoDto {
    @ApiProperty({ example: 'Octavio' })
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @ApiProperty({ example: 'Luna' })
    @IsString()
    @IsNotEmpty()
    apellidoPaterno: string;

    @ApiPropertyOptional({ example: 'García' })
    @IsString()
    @IsOptional()
    apellidoMaterno?: string;

    @ApiProperty({ example: 'octavio.personal@gmail.com' })
    @IsEmail()
    correoReal: string;

    @ApiProperty({ example: 3 })
    @IsInt()
    @IsNotEmpty()
    idRol: number;

    @IsArray()
    @IsInt({ each: true })
    @IsOptional()
    @ApiPropertyOptional({ type: [Number] })
    rubrosAsignados?: number[];
}
