import { Module } from '@nestjs/common';
import { occurrenceService } from './occurrence.service';
import {occurrenceProviders} from './occurrence.providers';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Occurrence} from './occurrence.entity';
import {occurrenceController} from './occurrence.controller';
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
  exports: [TypeOrmModule],
  controllers: [occurrenceController],
  providers: [occurrenceService,MysqlDbConfigService],
})
export class occurrenceModule {}
