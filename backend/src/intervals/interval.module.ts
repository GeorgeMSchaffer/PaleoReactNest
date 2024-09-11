import { Module } from '@nestjs/common';
import { IntervalService } from './interval.service';
import {intervalProviders} from './interval.providers';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Interval} from './interval.entity';
import {IntervalController} from './interval.controller';
import { MysqlDbConfigService } from 'src/common/MysqlDbConfigService';
/*
@Module({
  imports: [TypeOrmModule.forRoot()],
  providers: [IntervalService,...intervalProviders],
})
export class IntervalModule {}
*/
@Module({
  imports: [TypeOrmModule.forFeature([Interval])],
  exports: [TypeOrmModule],
  controllers: [IntervalController],
  providers: [IntervalService,MysqlDbConfigService],
})
export class IntervalModule {}
