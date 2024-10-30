import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { OccurrenceService } from './occurrence.service';
import { CreateOccurrenceDto } from './DTOs/create-occurrence.dto';
import { UpdateOccurrenceDto } from './DTOs/update-occurrence.dto';
import { EnumRanks, IRequestParams } from 'src/common/types';
import { buildRequestParams } from 'src/common/utils';
import { get } from 'http';
@Controller('/api/v1/occurrence')
export class OccurrenceController {
  constructor(private readonly service: OccurrenceService) {}


  @Post()
  create(@Body() createOccurrenceDto: CreateOccurrenceDto) {
    return this.service.create(createOccurrenceDto);
    return this.service.create(createOccurrenceDto);
  }
 

  
  @Get("/")
  findAll(@Query() query) {
    console.log('Get All occurrences with query:',query);
    // if(!query.orderBy){
    //   query.orderBy = 'occurrenceNo';
    // }
    // if(!query.orderDir){
    //   query.orderDir = 'ASC';
    // }
    const params = buildRequestParams(query);
    return this.service.findAll(params);
  }

  // @Get('/:id')
  // findOne(@Param('id') id: string) {
  //   return this.service.findOne(+id);
  // }

  @Get('/diversity')
  getDiversity() {
    return this.service.getDiversity();
  }

  @Get('/interval/:intervalName/:rank')
  //[TODO:] Add pagination interface
  getDiversityByIntervalName(@Param('intervalName') intervalName: string,@Param('rank') rank:EnumRanks) {
    return this.service.getDiversityByRankAndInterval(intervalName,rank);
  }

  @Get('/interval/:intervalName/')
  //[TODO:] Add pagination interface
  getOccurrencesByIntervalName(@Param('intervalName') intervalName: string) {
    return this.service.getOccurrencesByIntervalName(intervalName);
  }



  
  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateOccurrenceDto: UpdateOccurrenceDto) {
    return this.service.update(+id, updateOccurrenceDto);
    return this.service.update(+id, updateOccurrenceDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
    return this.service.remove(+id);
  }
}
