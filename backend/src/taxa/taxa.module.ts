import { Module } from '@nestjs/common';
import { TaxaService } from './taxa.service';
import { TaxaController } from './taxa.controller';
import { MysqlDbConfigService } from 'src/common/MysqlDbConfigService';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Taxa} from './entities/taxa.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Taxa])],
  controllers: [TaxaController],
  providers: [TaxaService,MysqlDbConfigService],
})
export class TaxaModule {}
