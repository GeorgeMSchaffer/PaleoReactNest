import { OccurrenceService } from './occurrence.service';
import {Occurrence} from './occurrence.entity'; 
//import { Controller, Get } from '@nestjs/common';
import {Controller, Get, Param, Response} from '@nestjs/common';
import { get } from 'http';

@Controller('/api/v1/occurrences')
export class OccurrenceController {
  private readonly service: OccurrenceService;
  constructor(private readonly occurrenceService: OccurrenceService) {
    this.service = occurrenceService;
  }
  @Get('/test')
  getHello(): string {
    return 'Test String';
  }
  @Get('/')
  async getAll(): Promise<Occurrence[]> {
    return await this.service.findAll();
  }


  @Get('/ping')
  async getoccurrences(): Promise<string> {
   return new Date().getTime().toString();
   }

  @Get('/')
  async findAll(): Promise<Occurrence[]> {
    console.log('findAll called from controller');
    return this.service.findAll();
  }
   @Get('/:id')
  async findById(@Param('id') id: number): Promise<Occurrence | null> {
    console.log('findById called from controller');
    const occurance = await this.service.findById(id);
    return occurance;
  }
}
