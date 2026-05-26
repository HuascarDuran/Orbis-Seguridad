import { PartialType } from '@nestjs/mapped-types';
import { CreateRiesgoDto } from './create-riesgo.dto';

export class UpdateRiesgoDto extends PartialType(CreateRiesgoDto) {}