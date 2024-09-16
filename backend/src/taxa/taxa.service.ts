import { Injectable } from '@nestjs/common';
import {
    Repository,
    LessThan,
    LessThanOrEqual,
    MoreThan,
    MoreThanOrEqual,
    Between
  } from "typeorm";
  import { InjectRepository } from "@nestjs/typeorm";
import { AppDataSource } from "../common/MysqlDbConfigService";
import { Taxa } from './taxa.entity';

@Injectable()
export class TaxaService {
    constructor(
        @InjectRepository(Taxa)
        private repo: Repository<Taxa>,
      ) { }
      
      async findAll(): Promise<Taxa[]> {
        return this.repo.find();
      }
      async findById(id: number): Promise<Taxa | null> {
        const results = await this.repo.findBy({
          taxonNo:id
        })
        if(results && results.length){
          return results.at(0)
        }
        return null;
      }
}
