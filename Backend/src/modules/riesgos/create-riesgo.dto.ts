import { IsString, IsInt, Min, Max, IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import {
  TratamientoRiesgo,
  TipoControl,
  NivelControl,
  NivelImplementacion,
  FrecuenciaControl,
} from './riesgo.entity';

export class ActivoManualDto {
  @IsString()
  @IsNotEmpty()
  nombre!: string;

  @IsString()
  @IsNotEmpty()
  tipo!: string;

  @IsInt()
  @Min(1)
  @Max(5)
  criticidad!: number;
}

export class AmenazaManualDto {
  @IsString()
  @IsNotEmpty()
  nombre!: string;

  @IsString()
  @IsNotEmpty()
  tipo!: string;

  @IsOptional()
  @IsString()
  descripcion?: string;
}

export class CreateRiesgoDto {
  @IsOptional()
  @IsInt()
  id_activo?: number;

  @IsOptional()
  @ValidateNested()
  @Type(() => ActivoManualDto)
  activo_manual?: ActivoManualDto;

  @IsOptional()
  @IsInt()
  id_amenaza?: number;

  @IsOptional()
  @ValidateNested()
  @Type(() => AmenazaManualDto)
  amenaza_manual?: AmenazaManualDto;

  @IsString()
  @IsNotEmpty()
  riesgo_consecuencia!: string;

  @IsInt()
  @Min(1)
  @Max(5)
  probabilidad_inherente!: number;

  @IsInt()
  @Min(1)
  @Max(5)
  impacto_inherente!: number;

  @IsEnum(TratamientoRiesgo)
  tratamiento_riesgo!: TratamientoRiesgo;

  @IsOptional()
  @IsString()
  controles_implementar?: string;

  @IsOptional()
  @IsEnum(TipoControl)
  tipo_control?: TipoControl;

  @IsOptional()
  @IsEnum(NivelControl)
  nivel_control?: NivelControl;

  @IsOptional()
  @IsEnum(NivelImplementacion)
  nivel_implementacion?: NivelImplementacion;

  @IsOptional()
  @IsEnum(FrecuenciaControl)
  frecuencia_control?: FrecuenciaControl;
}