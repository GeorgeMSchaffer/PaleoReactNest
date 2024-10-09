import { Injectable } from '@nestjs/common';
import { CreateOccurrenceDto } from './dto/create-occurrence.dto';
import { UpdateOccurrenceDto } from './dto/update-occurrence.dto';
import { Occurrence } from '../occurrence/entities/occurrence.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
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
      relations: ['species'],
      where: {...filters},
//      cache: true,
    });
  }

  findOne(id: number) {
    return this.repo.findOneBy({ occurrenceNo: id });
  }

  update(id: number, updateOccurrenceDto: UpdateOccurrenceDto) {
    return this.repo.update(id, updateOccurrenceDto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
