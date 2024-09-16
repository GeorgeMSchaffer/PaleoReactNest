import { TaxonService } from './taxon.service';
import {Taxon} from './taxon.entity'; 
//import { Controller, Get } from '@nestjs/common';
import {Controller, Get, Param, Response} from '@nestjs/common';
import { get } from 'http';

@Controller('/api/v1/occurrences')
export class TaxonController {
  private readonly service: TaxonService;
  constructor(private readonly occurrenceService: TaxonService) {
    this.service = occurrenceService;
  }
  @Get('/test')
  getHello(): string {
    return 'Test String';
  }
  @Get('/')
  async getAll(): Promise<Taxon[]> {
    return await this.service.findAll();
  }

  @Get('/ping')
  async getoccurrences(): Promise<string> {
   return new Date().getTime().toString();
   }

  @Get('/')
  async findAll(): Promise<Taxon[]> {
    console.log('findAll called from controller');
    return this.service.findAll();
  }
   @Get('/:id')
  async findById(@Param('id') id: number): Promise<Taxon | null> {
    console.log('findById called from controller');
    const occurance = await this.service.findById(id);
    return occurance;
  }
}
