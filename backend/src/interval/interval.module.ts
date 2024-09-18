import { Module } from '@nestjs/common';
import { IntervalService } from './interval.service';
import { IntervalController } from './interval.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Interval} from './entities/interval.entity';
import { MysqlDbConfigService } from 'src/common/MysqlDbConfigService';
@Module({
  imports: [TypeOrmModule.forFeature([Interval])],
  exports: [TypeOrmModule, IntervalService],
  controllers: [IntervalController],
  providers: [IntervalService,MysqlDbConfigService],
})
export class IntervalModule {}
