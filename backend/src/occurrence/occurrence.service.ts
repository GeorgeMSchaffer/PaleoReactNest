import { Injectable } from '@nestjs/common';
import { CreateOccurrenceDto } from './DTOs/create-occurrence.dto';
import { UpdateOccurrenceDto } from './DTOs/update-occurrence.dto';
import { Occurrence } from '../occurrence/entities/occurrence.entity';
import { Repository } from 'typeorm';
import {Interval} from '../interval/entities/interval.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {IRequestParams} from "../common/types"
import {IRequestParams} from "../common/types"
@Injectable()
export class OccurrenceService {
  constructor(
    @InjectRepository(Occurrence)
    private repo: Repository<Occurrence>,
  ) { }
  
  create(createOccurrenceDto: CreateOccurrenceDto) {
    return this.repo.create(createOccurrenceDto)
  }

  findAll(params:IRequestParams) {
    const filters = params.queryParams;
    console.log("🚀 ~ OccurrenceService ~ findAll ~ filters:", filters)

    return this.repo.find({
      order: {
        [params.orderBy]: params.orderDir
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
      .select('o.early_interval', 'early_interval')
      .addSelect('COUNT(DISTINCT o.occurrence_no)', 'intervalName')
      .addSelect('COUNT(DISTINCT o.family)', 'countOfFamilies')
      .addSelect('COUNT(DISTINCT o.class)', 'countOfClasses')
      .addSelect('COUNT(DISTINCT o.phylum)', 'countOfOrders')
      .addSelect('COUNT(DISTINCT o.order)', 'num_order')
      .addSelect('COUNT(DISTINCT o.genus)', 'countOfGenera')
      //.addSelect('i.color', 'color')
      //.leftJoin(Interval, 'i', 'o.early_interval = i.intervalName')
      .where('o.early_interval IS NOT NULL')
      .groupBy('o.early_interval')
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
}
