import { Module } from '@nestjs/common';
import { StrataService  } from './strata.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Strata} from './strata.entity';
import {StrataController} from './strata.controller';
import { MysqlDbConfigService } from '../common/MysqlDbConfigService';

@Module({
  imports: [TypeOrmModule.forFeature([Strata])],
  exports: [TypeOrmModule],
  controllers: [StrataController],
  providers: [StrataService,MysqlDbConfigService],
})
export class StrataModule {}
