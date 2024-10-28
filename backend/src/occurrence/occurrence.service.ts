import { Injectable } from '@nestjs/common';
import { CreateOccurrenceDto } from './DTOs/create-occurrence.dto';
import { UpdateOccurrenceDto } from './DTOs/update-occurrence.dto';
import { Occurrence } from '../occurrence/entities/occurrence.entity';
import { Repository } from 'typeorm';
import {Interval} from '../interval/entities/interval.entity';
import { IntervalService } from '../interval/interval.service';
import { InjectRepository } from '@nestjs/typeorm';
import {IRequestParams,EnumRanks} from "../common/types"
@Injectable()
export class OccurrenceService {
  constructor(
    @InjectRepository(Occurrence)
    private repo: Repository<Occurrence>,
    private intervalService: IntervalService,
  ) { }
  
  create(createOccurrenceDto: CreateOccurrenceDto) {
    return this.repo.create(createOccurrenceDto)
  }

  findAll(params:IRequestParams) {
    const filters = params.queryParams;
    console.log("🚀 ~ OccurrenceService ~ findAll ~ filters:", filters)
    const orderBy = params.orderBy || 'occurrenceNo';
    const orderDir = params.orderDir || 'ASC';
    return this.repo.find({
      order: {
        [orderBy]: orderDir
      },
      take: params.take,
      skip: params.skip,
     // relations: ['species'],
      where: {...filters},
//      cache: true,
    });
  }

  findOne(id: number) {
    return this.repo.findOneBy({ occurrenceNo: id });
  }

  async getDiversityByIntervalName(intervalName: string) {
    return this.getDiversityCounts(intervalName);
  }
  async getDiversity() {
    return this.getDiversityCounts();
  }

  private async getDiversityCounts(intervalName: string = "") {
    var query =  this.repo.createQueryBuilder('o')
      .select('o.early_interval', 'intervalName')
      .addSelect('COUNT(DISTINCT o.occurrence_no)', 'countOfOccurrences')
      .addSelect('COUNT(DISTINCT o.phylum)', 'countOfPhyla')
      .addSelect('COUNT(DISTINCT o.class)', 'countOfClasses')
      .addSelect('COUNT(DISTINCT o.order)', 'countOfOrders')
      .addSelect('COUNT(DISTINCT o.family)', 'countOfFamilies')
      .addSelect('COUNT(DISTINCT o.genus)', 'countOfGenera')
      .addSelect('MAX(o.max_ma)', 'maxMa')//phylum,class,order,family,genus
      .addSelect('MIN(o.min_ma)', 'minMa')
      //.addSelect('i.color', 'color')
      //.leftJoin(Interval, 'i', 'o.early_interval = i.intervalName')
      .where('o.early_interval IS NOT NULL')
      .groupBy('o.early_interval')
      .orderBy('MIN(o.min_ma)', 'DESC');
      //.addGroupBy('i.color')
//      .getRawMany();
    if(intervalName.length){
      query.andWhere(`o.early_interval = '${intervalName}'`)
    }
    return query.getRawMany();
  }
  update(id: number, updateOccurrenceDto: UpdateOccurrenceDto) {
    return this.repo.update(id, updateOccurrenceDto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
  getDiversityByRankAndInterval(intervalName:string,rank:EnumRanks){
    //[TODO] add join to intervals
    return this.repo.find({
      where: [{
        earlyInterval: intervalName,
        acceptedRank: rank,
    }],
    order: {earlyInterval: "ASC"} 
  })
    
  }

  getOccurrencesByIntervalName(intervalName:string){
    return this.repo.find({
      where: {earlyInterval:intervalName},
      order: {earlyInterval: "ASC"} 
    })
  }

}
