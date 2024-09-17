import { Injectable } from "@nestjs/common";
import {
  Repository,
  LessThan,
  LessThanOrEqual,
  MoreThan,
  MoreThanOrEqual,
  Between
} from "typeorm";
import { Species } from './species.entity';
import { InjectRepository } from "@nestjs/typeorm";
import { AppDataSource } from "../common/MysqlDbConfigService";
//import { EnumoccurrenceType } from 'src/common/types';
@Injectable()
export class SpeciesService {

 constructor(
  @InjectRepository(Species)
  private repo: Repository<Species>,
) { 
  console.log("Species Service constructor");
}

  async findAll(): Promise<Species[]> {
    return this.repo.find();
  }
  async getAll(): Promise<Species[]> {
    //return AppDataSource.query<Species[]>(query);
    return this.repo.find();
  }
  async findById(id: number): Promise<Species | null> {
    const results = await this.repo.findBy({
      occurrenceNo:id
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
