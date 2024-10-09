import { Injectable } from '@nestjs/common';
import { CreateIntervalDto } from './dto/create-interval.dto';
import { UpdateIntervalDto } from './dto/update-interval.dto';
import { Interval } from './entities/interval.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IRequestParams } from 'src/common/types';

@Injectable()
export class IntervalService {
  constructor(
    @InjectRepository(Interval)
    private repo: Repository<Interval>,
  ) { }
  
  create(createIntervalDto: CreateIntervalDto) {
    return this.repo.save(createIntervalDto);
  }

  findAll(params:IRequestParams) {
    //return `This action returns all interval`;
    const filters = params.queryParams;

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
    return this.repo.findOneBy({ intervalNo: id });
  }

  update(id: number, updateIntervalDto: UpdateIntervalDto) {
     return this.repo.update(id, updateIntervalDto); 
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
  findByRecordType(recordType: string) {
    console.log("🚀 ~ IntervalService ~ findByRecordType ~ recordType:", recordType)
    return this.repo.findBy({ recordType: recordType });
  }
}
