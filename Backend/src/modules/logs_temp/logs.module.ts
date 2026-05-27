/**
 * @file logs.module.ts
 * @description Módulo global de auditoría.
 * Se declara como @Global() para que LogsService sea inyectable en cualquier
 * módulo sin necesidad de re-importar LogsModule.
 */

import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Log } from './log.entity';
import { LogsService } from './logs.service';
import { LogsController } from './logs.controller';

@Global()
@Module({
    imports: [TypeOrmModule.forFeature([Log])],
    providers: [LogsService],
    controllers: [LogsController],
    exports: [LogsService],
})
export class LogsModule {}
