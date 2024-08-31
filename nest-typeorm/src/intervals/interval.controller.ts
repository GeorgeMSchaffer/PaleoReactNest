import { IntervalService } from '../intervals/interval.service';
import {Interval} from '../intervals/interval.entity'; 
import { Controller, Get } from '@nestjs/common';
import { get } from 'http';

@Controller('/api/v1/intervals')
export class IntervalController {
  private readonly service: IntervalService;
  constructor(private readonly intervalService: IntervalService) {
    this.service = intervalService;
  }
  @Get('/test')
  getHello(): string {
    return 'Test String';
  }
  @Get('/ping')
  async getIntervals(): Promise<string> {
   return new Date().getTime().toString();
   }

  @Get('/')
  async findAll(): Promise<Interval[]> {
    console.log('findAll called from controller');
    return this.service.findAll();
  }
   @Get('/:{id}')
  async findById(id:number): Promise<Interval[]> {
    console.log('findAll called from controller');
    return this.service.findAll();
  }
}
