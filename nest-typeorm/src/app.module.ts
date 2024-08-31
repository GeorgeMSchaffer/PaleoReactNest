import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IntervalService } from './intervals/interval.service'; // Adjust the path as necessary
import { IntervalModule } from './intervals/interval.module';
import {Interval} from './intervals/interval.entity';
import { MysqlDbConfigService } from './common/MysqlDbConfigService';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    IntervalModule,
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
  providers:[IntervalService,MysqlDbConfigService]
})
export class AppModule {
}
