import { SpeciesService } from "./species/species.service";
import { SpeciesController } from "./species/species.controller";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Interval } from "./interval/entities/interval.entity";
import { IntervalService } from "./interval/interval.service"; // Adjust the path as necessary
import { IntervalModule } from "./interval/interval.module";
import { IntervalController } from "./interval/interval.controller";
import { MysqlDbConfigService } from "./common/MysqlDbConfigService";
import { OccurrenceService } from "./occurrence/occurrence.service";
import { OccurrenceModule } from "./occurrence/occurrence.module";
import { OccurrenceController } from "./occurrence/occurrence.controller";
import { Occurrence } from "./occurrence/entities/occurrence.entity";
import { DevtoolsModule } from "@nestjs/devtools-integration";
import { Strata } from "./strata/strata.entity";
import { Species } from "./species/entities/species.entity";
import { TaxaModule } from './taxa/taxa.module';
import {Taxa} from "./taxa/entities/taxa.entity";
import { SpeciesModule } from './species/species.module';
@Module({
  imports: [
    SpeciesModule,
    IntervalModule,
    SpeciesModule,
    OccurrenceModule,
    TaxaModule,
    SpeciesModule,
    DevtoolsModule.register({
      http: true,
      port: 8000
    }),

    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "rsbr220Sql!",
      database: "paleo",
      logging: true,
      synchronize: true,
      entities: [
        Taxa,
        Occurrence,
        Interval,
        Strata,
        Species,
        //__dirname + '/../**/*.entity{.ts,.js}',
      ]
    }),
    OccurrenceModule,
    

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
  controllers: [],
  providers: []
})
export class AppModule {}
