import { StrataService } from './strata.service';
import {Strata} from './strata.entity'; 
//import { Controller, Get } from '@nestjs/common';
import {Controller, Get, Param, Query, Response} from '@nestjs/common';
import {IRequestParams} from "../common/types"
import {buildRequestParams} from "../common/utils"
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


  @Get('/ping')
  async getstratas(): Promise<string> {
   return new Date().getTime().toString();
   }

  @Get('/')
  async findAll(@Query() query): Promise<Strata[]> {
    console.log('findAll called from controller');
    const params:IRequestParams = buildRequestParams(query);

    return this.service.findAll(params);
  }
   @Get('/:id')
  async findById(@Param('id') id: number): Promise<Strata | null> {
    console.log('findById called from controller');
    const occurance = await this.service.findById(id);
    return occurance;
  }
}
