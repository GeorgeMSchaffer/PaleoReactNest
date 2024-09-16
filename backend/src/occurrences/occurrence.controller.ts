import { occurrenceService } from './occurrence.service';
import {Occurrence} from './occurrence.entity'; 
//import { Controller, Get } from '@nestjs/common';
import {Controller, Get, Param} from '@nestjs/common';
import { get } from 'http';

@Controller('/api/v1/occurrences')
export class occurrenceController {
  private readonly service: occurrenceService;
  constructor(private readonly occurrenceService: occurrenceService) {
    this.service = occurrenceService;
  }
  @Get('/test')
  getHello(): string {
    return 'Test String';
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
  async findById(@Param('id') id: number): Promise<Occurrence> {
    console.log('findById called from controller');
    const occurance = await this.service.findById(id);
    return occurance;
  }
}
