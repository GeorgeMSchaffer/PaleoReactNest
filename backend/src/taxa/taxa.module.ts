import { Module } from '@nestjs/common';
import { TaxaService } from './taxa.service';
import { TaxaController } from './taxa.controller';
import {Taxa} from './taxa.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MysqlDbConfigService } from '../common/MysqlDbConfigService';

@Module({
  imports: [TypeOrmModule.forFeature([Taxa])],
  providers: [TaxaService,MysqlDbConfigService],
  controllers: [TaxaController],
  exports:[TypeOrmModule,TaxaService]
})
export class TaxaModule {}
