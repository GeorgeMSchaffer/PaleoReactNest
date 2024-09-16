import { DataSource } from "typeorm"
import {Interval} from '../intervals/interval.entity';
import {Occurrence} from '../occurrences/occurrence.entity';
import {Taxa} from '../taxa/taxa.entity';
import {Taxon} from '../taxon/taxon.entity';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'rsbr220Sql!',
    database: 'paleo',
    entities: [Interval,Occurrence,Taxon]
});
@Injectable()
export class MysqlDbConfigService implements TypeOrmOptionsFactory {

    constructor(private configService: ConfigService) { }

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'rsbr220Sql!',
            database: 'paleo',
            logging: true,
            autoLoadEntities: true,
            entities: [Interval,Taxon,Occurrence]
        };
    }
}
AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })
export {
    AppDataSource
}
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
