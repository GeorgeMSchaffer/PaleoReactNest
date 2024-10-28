import { Module } from '@nestjs/common';
import { OccurrenceService } from './occurrence.service';
import { OccurrenceController } from './occurrence.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Occurrence } from './entities/occurrence.entity';
import { MysqlDbConfigService } from 'src/common/MysqlDbConfigService';
import { IntervalModule } from 'src/interval/interval.module';
import { IntervalService } from 'src/interval/interval.service';
@Module({
  imports: [TypeOrmModule.forFeature([Occurrence]),IntervalModule],
  exports: [TypeOrmModule, OccurrenceService],

  controllers: [OccurrenceController],
  providers: [OccurrenceService,MysqlDbConfigService],
})
export class OccurrenceModule {}


// imports: [TypeOrmModule.forFeature([Interval])],
// exports: [TypeOrmModule, IntervalService],
// controllers: [IntervalController],
// providers: [IntervalService,MysqlDbConfigService],