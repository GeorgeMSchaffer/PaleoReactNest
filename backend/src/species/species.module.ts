import { Module } from '@nestjs/common';
import { SpeciesService } from './species.service';
import { SpeciesController } from './species.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Species } from './entities/species.entity';
import { MysqlDbConfigService } from 'src/common/MysqlDbConfigService';
@Module({
  imports: [TypeOrmModule.forFeature([Species])],
  exports: [SpeciesService,TypeOrmModule],
  controllers: [SpeciesController],
  providers: [SpeciesService,MysqlDbConfigService],
})
export class SpeciesModule {}
