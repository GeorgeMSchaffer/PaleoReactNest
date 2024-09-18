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
import { Species } from "src/species/species.entity";
import { IRequestParams } from "src/common/types";
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
        species: true,
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
  
  async findWithSpecies(
    params: IRequestParams
  ): Promise<Occurrence[]> {
    const query = this.repo
      .createQueryBuilder("occurrence")
      .innerJoinAndSelect("occurrence.species", "species")
      
      const filters = params.queryParams;
      const filterKeys = Object.keys(filters)
      if(filterKeys.length){
        filterKeys.forEach(key => {
          const filterValue = filters[key]
          console.log(`Key ${key} value ${filterValue} - has property? ${Object(Occurrence).hasOwnProperty(key)}`)
          //[TODO] checking the entity for a valid field via hasOwnProperty does not work with the entity objects so we need to find a way to validate the keys

          if(filterValue?.length ) {
            query.andWhere(`occurrence.${key} LIKE :${key}`, {[key]: `%${filterValue}%`})
          }
        })
      }
    // Apply filters based on the provided IRequestParams
    // if (params.filters) {
  
    //   if (speciesName) {
    //     query.andWhere("species.speciesName LIKE :speciesName", {
    //       speciesName: `%${speciesName}%`,
    //     });
    //   }
  
    //   if (locationName) {
    //     query.andWhere("occurrence.locationName LIKE :locationName", {
    //       locationName: `%${locationName}%`,
    //     });
    //   }
  
    //   if (dateCollected) {
    //     const [startDate, endDate] = dateCollected.split(",");
    //     query.andWhere("occurrence.dateCollected BETWEEN :startDate AND :endDate", {
    //       startDate: new Date(startDate),
    //       endDate: new Date(endDate),
    //     });
    //   }
    // }
  
    // // Apply sorting based on the provided IRequestParams
    // if (params.sortBy) {
    //   const { field, order } = params.sortBy;
    //   query.addOrderBy(`occurrence.${field}`, order);
    // }
      console.log(`Query: ${query.getQuery()}`,query);
    return query.getMany();
  }
  
   


  helloWorld(): string {
    return "hello";
  }
}
