/**
 * @file riesgos.module.ts
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Riesgo } from './riesgo.entity';
import { RiesgosService } from './riesgos.service';
import { RiesgosController } from './riesgos.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Riesgo])],
    providers: [RiesgosService],
    controllers: [RiesgosController],
    exports: [RiesgosService],
})
export class RiesgosModule {}
