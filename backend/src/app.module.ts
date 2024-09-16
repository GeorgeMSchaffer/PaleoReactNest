import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IntervalService } from './intervals/interval.service'; // Adjust the path as necessary
import { IntervalModule } from './intervals/interval.module';
import {OccurrenceService} from './occurrences/occurrence.service';
import {occurrenceModule} from './occurrences/occurrence.module';
import {Interval} from './intervals/interval.entity';
import { MysqlDbConfigService } from './common/MysqlDbConfigService';
import { ConfigModule } from '@nestjs/config';
import { Occurrence } from './occurrences/occurrence.entity';
import {OccurrenceController} from './occurrences/occurrence.controller'
import { IntervalController } from './intervals/interval.controller';
import { TaxaModule } from './taxa/taxa.module';
import { Taxa } from './taxa/taxa.entity';
import { TaxaController } from './taxa/taxa.controller';
import { TaxonService } from './taxon/taxon.service';
import {Taxon} from './taxon/taxon.entity';
import { TaxonModule } from './taxon/taxon.module';
import { TaxaService } from './taxa/taxa.service';
import { TaxonController } from './taxon/taxon.controller';
@Module({
  imports: [
    IntervalModule,
    occurrenceModule,
    TaxonModule,
//    occurrenceModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      useClass: MysqlDbConfigService,
      inject: [MysqlDbConfigService]
    })
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'rsbr220Sql!',
    //   database: 'paleo',
    //   logging: true,
    //   autoLoadEntities: true,
    //   //synchronize: true,
    // }),
  ],
  controllers:[IntervalController,OccurrenceController,TaxonController],
  providers:[IntervalService,MysqlDbConfigService,OccurrenceService,TaxonService]
})
export class AppModule {
}
  