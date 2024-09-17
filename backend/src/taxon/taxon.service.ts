import { Injectable } from "@nestjs/common";
import {
  Repository,
  LessThan,
  LessThanOrEqual,
  MoreThan,
  MoreThanOrEqual,
  Between
} from "typeorm";
import { Taxon } from './taxon.entity';
import { InjectRepository } from "@nestjs/typeorm";
//import { TaxonProvider } from "./taxon.providers";
import { AppDataSource } from "../common/MysqlDbConfigService";
//import { EnumoccurrenceType } from 'src/common/types';
// const query = "
//   SELECT
//       occurrence_no,
//       record_type,
//       reid_no,
//       flags,
//       collection_no,
//       identified_name,
//       identified_rank,
//       identified_no,
//       difference,
//       accepted_name,
//       accepted_rank,
//       accepted_no,
//       early_interval,
//       late_interval,
//       max_ma,
//       min_ma,
//       reference_no,
//       cc,
//       state,
//       county,
//       latlng_basis,
//       latlng_precision,
//       geogscale,
//       geogcomments,
//       phylum,
//       class,
//       order,
//       family,
//       genus,
//       interval_no
//     FROM
//     occurrences
//     ";
@Injectable()
export class TaxonService {
  // constructor(
  //   @InjectRepository(Taxon)
  //   private occurrenceRepository: Repository<Taxon>
  // ) {}


  // Problematic nesting in services object:
 // constructor(private readonly services: { occurrences: TaxonService }) { }

 constructor(
  @InjectRepository(Taxon)
  private repo: Repository<Taxon>,
) { 
  console.log("\r\n TAXON SERVICE constructor");
}

  async findAll(): Promise<Taxon[]> {
    return this.repo.find();
  }
  async getAll(): Promise<Taxon[]> {
    //return AppDataSource.query<Taxon[]>(query);
    return this.repo.find();
  }
  async findById(id: number): Promise<Taxon | null> {
    const results = await this.repo.findBy({
      taxonNo:id
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
  // async getoccurrenceByStartMYA(
  //   startMYA: number,
  //   endMya: number
  // ): Promise<Taxon[]> {
  //   let occurrences: Taxon[] = [];
  //   //[TODO] https://orkhan.gitbook.io/typeorm/docs/find-options
  //   this.occurrenceRepository
  //     .findBy({
  //       maxMya: Between(startMYA, endMya)
  //     })
  //     .then((data: Taxon[]) => {
  //       occurrences = data;
  //       return occurrences;
  //     })
  //     .catch((err: any) => {
  //       console.error("Error in getoccurrenceByStartMYA", err);
  //     })
  //     .finally(() => {
  //       return occurrences;
  //     });
  //   return occurrences;
  // }
  // async createoccurrence(occurrence: Partial<Taxon>): Promise<Taxon> {
  //   // Ensure non-nullable fields are provided
  //   console.log("Creating occurrence", occurrence);
  //   // if (!occurrence.acceptedName || !occurrence.abbrev || occurrence.startMYA === undefined || occurrence.endMYA === undefined) {
  //   //[TODO] Need to figure out what fields to validate still
  //   throw new Error("Missing required fields");
  //   //}
  //   return this.occurrenceRepository.save(occurrence);
  // }
