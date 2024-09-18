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
@Injectable()
export class SpeciesService {
 constructor(
  @InjectRepository(Species)
  private repo: Repository<Species>,
) { 
  console.log("OccurrenceService constructor");
}

  async findAll(): Promise<Species[]> {
    return this.repo.find();
  }
  async getAll(): Promise<Species[]> {
    //return AppDataSource.query<Occurrence[]>(query);
    return this.repo.find();
  }
  async findById(id: number): Promise<Species | null> {
    const results = await this.repo.findBy({
      specimenNo:id
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