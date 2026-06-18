import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivoInformacion, AmenazaVulnerabilidad, RiesgoSeguridad } from './riesgo.entity';
import { RiesgosService } from './riesgos.service';
import { RiesgosController } from './riesgos.controller';

@Module({
    imports: [TypeOrmModule.forFeature([ActivoInformacion, AmenazaVulnerabilidad, RiesgoSeguridad])],
    providers: [RiesgosService],
    controllers: [RiesgosController],
    exports: [RiesgosService],
})
export class RiesgosModule {}
