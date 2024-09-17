import { StrataService } from './strata.service';
import {Strata} from './strata.entity'; 
//import { Controller, Get } from '@nestjs/common';
import {Controller, Get, Param, Response} from '@nestjs/common';
import { get } from 'http';

@Controller('/api/v1/strata')
export class StrataController {
  private readonly service: StrataService;
  constructor(private readonly strataService: StrataService) {
    this.service = strataService;
  }
  @Get('/test')
  getHello(): string {
    return 'Test String';
  }
  @Get('/')
  async getAll(): Promise<Strata[]> {
    return await this.service.findAll();
  }

  @Get('/ping')
  async getstratas(): Promise<string> {
   return new Date().getTime().toString();
   }

  @Get('/')
  async findAll(): Promise<Strata[]> {
    console.log('findAll called from controller');
    return this.service.findAll();
  }
   @Get('/:id')
  async findById(@Param('id') id: number): Promise<Strata | null> {
    console.log('findById called from controller');
    const occurance = await this.service.findById(id);
    return occurance;
  }
}
