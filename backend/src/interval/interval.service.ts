import { Injectable } from '@nestjs/common';
import { CreateIntervalDto } from './DTOs/create-interval.dto';
import { UpdateIntervalDto } from './DTOs/update-interval.dto';
import { Interval } from './entities/interval.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EnumRanks, IRequestParams } from 'src/common/types';

@Injectable()
export class IntervalService {
  constructor(
    @InjectRepository(Interval)
    private repo: Repository<Interval>,
  ) { }
  
  create(createIntervalDto: CreateIntervalDto) {
    throw new Error('Method not implemented.');
    //return this.repo.save(createIntervalDto);
  }

  findAll(params:IRequestParams) {
    console.log("🚀 ~ IntervalService ~ findAll ~ params:", params)
    //return `This action returns all interval`;
    const filters = params.queryParams;
    const orderBy = params.orderBy || 'intervalNo';
    const orderDir = params.orderDir || 'ASC';
    return this.repo.find({
      order: {
        [orderBy]: orderDir
      },
      take: params.take,
      skip: params.skip,
      //relations: ['species'],
      where: {...filters},
      cache: true, //The list is not going to change often, so we can cache it
    })
  }

  findOne(id: number) {
    return this.repo.findOneBy({ intervalNo: id });
  }

  update(id: number, updateIntervalDto: UpdateIntervalDto) {
    throw new Error('Method not implemented.');
     //return this.repo.update(id, updateIntervalDto); 
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
  findByRecordType(recordType: string) {
    console.log("🚀 ~ IntervalService ~ findByRecordType ~ recordType:", recordType)
    return this.repo.findBy({ recordType: recordType });
  }

  doesIntervalExists(intervalName: string) {
    return this.repo.exists({ where: { intervalName: intervalName } })
  }
}
