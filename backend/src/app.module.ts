import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Interval} from './intervals/interval.entity';
import { IntervalService } from './intervals/interval.service'; // Adjust the path as necessary
import { IntervalModule } from './intervals/interval.module';
import { IntervalController } from './intervals/interval.controller';
import { MysqlDbConfigService } from './common/MysqlDbConfigService';
import {OccurrenceService} from './occurrences/occurrence.service';
import {occurrenceModule} from './occurrences/occurrence.module';
import {OccurrenceController} from './occurrences/occurrence.controller'
import { Occurrence } from './occurrences/occurrence.entity';
// import { TaxaModule } from './taxa/taxa.module';
// import { Taxa } from './taxa/taxa.entity';
// import { TaxaController } from './taxa/taxa.controller';
// import { TaxonService } from './taxon/taxon.service';
import {Taxon} from './taxon/taxon.entity';
import { TaxonModule } from './taxon/taxon.module';
import { TaxonService } from './taxon/taxon.service';
import { TaxonController } from './taxon/taxon.controller';
import { DevtoolsModule } from 'nestjs-devtools-loader';
@Module({
  imports: [
    IntervalModule,
    occurrenceModule,
    TaxonModule,
    ConfigModule.forRoot({
      isGlobal: true
  }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'rsbr220Sql!',
      database: 'paleo',
      logging: true,
      synchronize: false,
      entities: [
        Taxon,Occurrence,Interval
        //__dirname + '/../**/*.entity{.ts,.js}',
    ]
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
  controllers:[],
  providers:[]
})
export class AppModule {
}
  