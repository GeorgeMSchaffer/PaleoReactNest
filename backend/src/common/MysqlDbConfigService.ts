import { DataSource } from "typeorm"
import {Taxa} from '../taxa/entities/taxa.entity';
import {Interval} from '../interval/entities/interval.entity';
import {Species} from '../species/entities/species.entity';
import {Occurrence} from '../occurrence/entities/occurrence.entity';
import { Diversity } from "src/occurrence/DTOs/diversity.dto";
// import {Taxa} from '../taxa/taxa.entity';
// import {Taxon} from '../taxon/taxon.entity';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
//[Usefull] if we want to not use service inject but a datasource itself as in AppDataSource.findOne(1)
export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'rsbr220Sql!',
    synchronize: false,
    database: 'paleo',
    entities: [Interval,Occurrence,Taxa,Species]
});
@Injectable()
export class MysqlDbConfigService implements TypeOrmOptionsFactory {

    constructor(private configService: ConfigService) { 
        console.log("MysqlDbConfigService constructor");
    }

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'rsbr220Sql!',
            database: 'paleo',
            logging: true,
            synchronize:false,
            entities: [Interval,Occurrence,Taxa,Species]
        };
    }
}
AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized! - app datasource")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
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
