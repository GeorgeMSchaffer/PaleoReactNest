
import { Injectable } from '@nestjs/common';
import { Repository,LessThan,LessThanOrEqual,MoreThan,MoreThanOrEqual,Between } from 'typeorm';
import { Occurrence } from './occurrence.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {AppDataSource } from '../common/MysqlDbConfigService';
//import { EnumoccurrenceType } from 'src/common/types';
const query = `
  SELECT
        record_type,
        reid_no,
        flags,
        collection_no,
        identified_name,
        identified_rank,
        identified_no,
        difference,
        accepted_name,
        accepted_rank,
        accepted_no,
        early_interval,
        late_interval,
        max_ma,
        min_ma,
        reference_no,
        cc,
        state,
        county,
        latlng_basis,
        latlng_precision,
        geogscale,
        geogcomments,
        phylum,
        class,
        order,
        family,
        genus,
        interval_no
  FROM occurances;
  WHERE 1=1
  `;
@Injectable()
    export class occurrenceService {
  constructor(
    @InjectRepository(Occurrence)
    private occurrenceRepository: Repository<Occurrence>,
  ) { }

  async findAll(): Promise<Occurrence[]> {
   
    return this.occurrenceRepository.query(query);
  }
  async getAll(): Promise<Occurrence[]> {
    return AppDataSource.query<Occurrence[]>(query);
  }
  async findById(id: number): Promise<Occurrence>{
    const occ =  this.occurrenceRepository.findOne({
      where: { occurrenceNo: id },
    });
    if(!occ){
      throw new Error('occurrence not found');
    }
    return occ;
  }
  // [TODO] remove for reference superseded by getoccurrencesByType;
  // async getAges(): Promise<Occurrence[]> { 
  //   return this.occurrenceRepository.find({
  //     where: { recordType: EnumoccurrenceType.AGE },
  //   })
  // }
  // async getPeriods(): Promise<Occurrence[]> {
  //   return this.occurrenceRepository.find({
  //     where: { recordType: EnumoccurrenceType.PERIOD },
  //   })
  // }
  // async getEons(): Promise<Occurrence[]> {
  //   return this.occurrenceRepository.find({
  //     where: { recordType: EnumoccurrenceType.EON },
  //   })
  // }
  // async getEpochs(): Promise<Occurrence[]> {
  //   return this.occurrenceRepository.find({
  //     where: { recordType: EnumoccurrenceType.EPOCH },
  //   })
  // }
  // async getEras(): Promise<Occurrence[]> {
  //   return this.occurrenceRepository.find({
  //     where: { recordType: EnumoccurrenceType.ERA },
  //   })
  // }

  async deleteoccurrence(occurrenceNo:number): Promise<Boolean> {
      return this.occurrenceRepository.delete({ occurrenceNo }).then(() => true).catch(() => false);
  }
  async getoccurrenceByStartMYA(startMYA:number,endMya:number): Promise<Occurrence[]> {
    let occurrences:Occurrence[] = [];
    //[TODO] https://orkhan.gitbook.io/typeorm/docs/find-options
    this.occurrenceRepository.findBy({
      maxMya:Between(startMYA,endMya)
    })
    .then((data:Occurrence[]) => {
      occurrences = data;
      return occurrences;
    })
    .catch((err:any) =>{
      console.error('Error in getoccurrenceByStartMYA', err);
    })
    .finally(() => {
      return occurrences;
    })
    return occurrences;
  }
  async createoccurrence(occurrence: Partial<Occurrence>): Promise<Occurrence> {
    // Ensure non-nullable fields are provided
    console.log('Creating occurrence', occurrence);
   // if (!occurrence.acceptedName || !occurrence.abbrev || occurrence.startMYA === undefined || occurrence.endMYA === undefined) {
    //[TODO] Need to figure out what fields to validate still 
    throw new Error('Missing required fields');
    //}
    return this.occurrenceRepository.save(occurrence);
  }

  helloWorld(): string {
    return 'hello';
  }
}
