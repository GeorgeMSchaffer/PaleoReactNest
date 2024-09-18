/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { SpeciesController } from './species.controller';
import { SpeciesService } from './species.service';
import { Species } from './species.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MysqlDbConfigService } from '../common/MysqlDbConfigService';

@Module({
    imports: [TypeOrmModule.forFeature([Species])],
    exports: [TypeOrmModule,SpeciesService],
    controllers: [SpeciesController],
    providers: [SpeciesService,MysqlDbConfigService],
})
export class SpeciesModule {}
