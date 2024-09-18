import { OccurrenceService } from './occurrence.service';
import {Occurrence} from './occurrence.entity'; 
//import { Controller, Get } from '@nestjs/common';
import {Controller, Get, Param, Query, Response,Req} from '@nestjs/common';
import { IRequestParams } from 'src/common/types';

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

  @Get('/species')
  async findAll(@Req() request): Promise<Occurrence[]> {
    console.log('Getting Occurance species with request.params', request.params, 'request.query', request.query);
    const params:IRequestParams = {
      take: request.query.take || 10,
      skip: request.query.skip || 0,
      orderBy: request.query.orderBy || 'occurrenceNo',
      orderDir: request.query.orderDir || 'DESC',
      queryParams: {

      },
    };

    // Take all of the query params supplied and exclude anything that is also needed by IRequestParams.
    // [TODO] there has to be validation somewhere to ensure that the query params are valid keys on the entities being filtered 
    Object.keys(request.query).map((key) => {
      if (key !== 'take' && key !== 'skip' && key !== 'orderBy' && key !== 'orderDir') {
        params.queryParams[key] = request.query[key];
      }
    })
    return this.service.findWithSpecies(params)
  }
   @Get('/:id')
  async findById(@Param('id') id: number): Promise<Occurrence | null> {
    console.log('findById called from controller');
    const occurance = await this.service.findById(id);
    return occurance;
  }
}
