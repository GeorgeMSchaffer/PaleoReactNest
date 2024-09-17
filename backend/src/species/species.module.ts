import { Module } from '@nestjs/common';
import { SpeciesService  } from './species.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Species} from './species.entity';
import {SpeciesController} from './species.controller';
import { MysqlDbConfigService } from '../common/MysqlDbConfigService';

@Module({
  imports: [TypeOrmModule.forFeature([Species])],
  exports: [TypeOrmModule],
  controllers: [SpeciesController],
  providers: [SpeciesService,MysqlDbConfigService],
})
export class SpeciesModule {}
