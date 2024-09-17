import { Module } from '@nestjs/common';
import { TaxonService } from './taxon.service';
//import {TaxonProvider} from './taxon.providers';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Taxon} from './taxon.entity';
import {TaxonController} from './taxon.controller';
import { MysqlDbConfigService } from '../common/MysqlDbConfigService';
/*
@Module({
  imports: [TypeOrmModule.forRoot()],
  providers: [occurrenceService,...occurrenceProviders],
})
export class occurrenceModule {}
*/
@Module({
  imports: [TypeOrmModule.forFeature([Taxon]),],
  exports: [TaxonService],
  controllers: [TaxonController],
  providers: [TaxonService]
})
export class TaxonModule {}
