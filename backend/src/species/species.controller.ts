import { SpeciesService } from './species.service';
import {Species} from './species.entity'; 
//import { Controller, Get } from '@nestjs/common';
import {Controller, Get, Param, Response} from '@nestjs/common';
import { get } from 'http';

@Controller('/api/v1/species')
export class SpeciesController {
  private readonly service: SpeciesService;
  constructor(private readonly speciesService: SpeciesService) {
    this.service = speciesService;
  }
  @Get('/test')
  getHello(): string {
    return 'Test String';
  }
  @Get('/')
  async getAll(): Promise<Species[]> {
    return await this.service.findAll();
  }

  @Get('/ping')
  async getspeciess(): Promise<string> {
   return new Date().getTime().toString();
   }

  @Get('/')
  async findAll(): Promise<Species[]> {
    console.log('findAll called from controller');
    return this.service.findAll();
  }
   @Get('/:id')
  async findById(@Param('id') id: number): Promise<Species | null> {
    console.log('findById called from controller');
    const occurance = await this.service.findById(id);
    return occurance;
  }
}
