import { Injectable } from "@nestjs/common";
import {
  Repository,
  LessThan,
  LessThanOrEqual,
  MoreThan,
  MoreThanOrEqual,
  Between
} from "typeorm";
import { Occurrence } from './occurrence.entity';
import { InjectRepository } from "@nestjs/typeorm";
import { AppDataSource } from "../common/MysqlDbConfigService";

@Injectable()
export class OccurrenceService {
 
 constructor(
  @InjectRepository(Occurrence)
  private repo: Repository<Occurrence>,
) { 
  console.log("OccurrenceService constructor");
}

  async findAll(): Promise<Occurrence[]> {
    return this.repo.find();
  }
  async getAll(): Promise<Occurrence[]> {
    //return AppDataSource.query<Occurrence[]>(query);
    return this.repo.find({
      relations: {
        species: true
      },
    });
  }
  async findById(id: number): Promise<Occurrence | null> {
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
