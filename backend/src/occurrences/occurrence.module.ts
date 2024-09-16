import { Module } from '@nestjs/common';
import { OccurrenceService } from './occurrence.service';
import {occurrenceProviders} from './occurrence.providers';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Occurrence} from './occurrence.entity';
import {OccurrenceController} from './occurrence.controller';
import { MysqlDbConfigService } from '../common/MysqlDbConfigService';
/*
@Module({
  imports: [TypeOrmModule.forRoot()],
  providers: [occurrenceService,...occurrenceProviders],
})
export class occurrenceModule {}
*/
@Module({
  imports: [TypeOrmModule.forFeature([Occurrence])],
  exports: [TypeOrmModule,OccurrenceService],
  controllers: [OccurrenceController],
  providers: [OccurrenceService,MysqlDbConfigService],
})
export class occurrenceModule {}
