import { Injectable } from "@nestjs/common";
import {
  Repository,
  LessThan,
  LessThanOrEqual,
  MoreThan,
  MoreThanOrEqual,
  Between
} from "typeorm";
import { Strata } from './strata.entity';
import { InjectRepository } from "@nestjs/typeorm";
import { AppDataSource } from "../common/MysqlDbConfigService";
import { IRequestParams } from "src/common/types";
//import { EnumoccurrenceType } from 'src/common/types';
@Injectable()
export class StrataService {

 constructor(
  @InjectRepository(Strata)
  private repo: Repository<Strata>,
) { 
  console.log("Strata Service constructor");
}

  async findAll(params:IRequestParams): Promise<Strata[]> {
    const filters = params.queryParams;
    console.log("🚀 ~ OccurrenceService ~ findAll ~ filters:", filters)

    return this.repo.find({
      order: {
        [params.orderBy]: params.orderDir
      },
      take: params.take,
      skip: params.skip,
      where: {...filters},
//      cache: true,
    });
    return this.repo.find();
  }
  async getAll(): Promise<Strata[]> {
    //return AppDataSource.query<Strata[]>(query);
    return this.repo.find();
  }
  async findById(id: number): Promise<Strata | null> {
    const results = await this.repo.findBy({
      id:id
    })
    if(results && results.length){
      return results.at(0)
    }
    return null;
  }



  helloWorld(): string {
    return "hello";
  }
}
