import { IsString, IsInt, Min, Max, IsEnum, IsNotEmpty } from 'class-validator';
// CORREGIDO: Importación relativa al mismo directorio plano
import {
  TipoControl,
  NivelControl,
  FrecuenciaControl,
} from './riesgo.entity';

export class CreateRiesgoDto {
  @IsString()
  @IsNotEmpty()
  activo_informacion!: string;

  @IsString()
  @IsNotEmpty()
  aplicativos_sistemas!: string;

  @IsString()
  @IsNotEmpty()
  amenaza_vulnerabilidad!: string;

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

  @IsString()
  @IsNotEmpty()
  tratamiento_riesgo!: string;

  @IsString()
  @IsNotEmpty()
  controles_implementar!: string;

  @IsEnum(TipoControl)
  tipo_control!: TipoControl;

  @IsEnum(NivelControl)
  nivel_control!: NivelControl;

  @IsEnum(FrecuenciaControl)
  frecuencia_control!: FrecuenciaControl;

  @IsInt()
  @Min(1)
  @Max(5)
  probabilidad_residual!: number;

  @IsInt()
  @Min(1)
  @Max(5)
  impacto_residual!: number;
}