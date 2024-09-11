import { Injectable } from '@nestjs/common';
import { Repository,LessThan,LessThanOrEqual,MoreThan,MoreThanOrEqual } from 'typeorm';
import { Interval } from './interval.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {AppDataSource } from '../common/MysqlDbConfigService';
import { EnumIntervalType } from 'src/common/types';
const query = `
      SELECT interval_no, interval_name, abbrev, b_age AS startMYA, t_age AS endMYA, abbrev, color, parent_no, record_type, reference_no, scale_no 
      FROM intervals
    `;
@Injectable()
    export class IntervalService {
  constructor(
    @InjectRepository(Interval)
    private intervalRepository: Repository<Interval>,
  ) { }

  async findAll(): Promise<Interval[]> {
   
    return this.intervalRepository.query(query);
  }
  async getAll(): Promise<Interval[]> {
    return AppDataSource.query<Interval[]>(query);
  }
  async findById(id: number): Promise<Interval>{
    return this.intervalRepository.findOne({
      where: { intervalNo: id },
    });
  }
  // [TODO] remove for reference superseded by getIntervalsByType;
  // async getAges(): Promise<Interval[]> { 
  //   return this.intervalRepository.find({
  //     where: { recordType: EnumIntervalType.AGE },
  //   })
  // }
  // async getPeriods(): Promise<Interval[]> {
  //   return this.intervalRepository.find({
  //     where: { recordType: EnumIntervalType.PERIOD },
  //   })
  // }
  // async getEons(): Promise<Interval[]> {
  //   return this.intervalRepository.find({
  //     where: { recordType: EnumIntervalType.EON },
  //   })
  // }
  // async getEpochs(): Promise<Interval[]> {
  //   return this.intervalRepository.find({
  //     where: { recordType: EnumIntervalType.EPOCH },
  //   })
  // }
  // async getEras(): Promise<Interval[]> {
  //   return this.intervalRepository.find({
  //     where: { recordType: EnumIntervalType.ERA },
  //   })
  // }
  async getIntervalsByType(type:EnumIntervalType): Promise<Interval[]> {
    return this.intervalRepository.find({
      where: { recordType: type },
    });
  }

  async deleteInterval(intervalNo:number): Promise<Boolean> {
      return this.intervalRepository.delete({ intervalNo }).then(() => true).catch(() => false);
  }
  async getIntervalByStartMYA(startMYA:number): Promise<Interval[]> {
    let intervals:Interval[] = [];
    //[TODO] https://orkhan.gitbook.io/typeorm/docs/find-options
    this.intervalRepository.findBy({
      startMYA: MoreThanOrEqual(startMYA),
      endMYA: LessThanOrEqual(startMYA)
    })
    .then((data) => {
      intervals = data;
      return intervals;
    })
    .catch((err) =>{
      console.error('Error in getIntervalByStartMYA', err);
    })
    .finally(() => {
      return intervals;
    })
    return intervals;
  }
  async createInterval(interval: Partial<Interval>): Promise<Interval> {
    // Ensure non-nullable fields are provided
    console.log('Creating Interval', interval);
    if (!interval.intervalName || !interval.abbrev || interval.startMYA === undefined || interval.endMYA === undefined) {
      throw new Error('Missing required fields');
    }
    return this.intervalRepository.save(interval);
  }

  helloWorld(): string {
    return 'hello';
  }
}
