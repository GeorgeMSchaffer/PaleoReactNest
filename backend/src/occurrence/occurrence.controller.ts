import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { OccurrenceService } from './occurrence.service';
import { CreateOccurrenceDto } from './DTOs/create-occurrence.dto';
import { UpdateOccurrenceDto } from './DTOs/update-occurrence.dto';
import { IRequestParams } from 'src/common/types';
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
    const params = buildRequestParams(query);
    return this.service.findAll(params);
  }

  // @Get('/:id')
  // findOne(@Param('id') id: string) {
  //   return this.service.findOne(+id);
  // }

  @Get('/diversity/:intervalName')
  getDiversityByIntervalName(@Param('intervalName') intervalName: string) {
    return this.service.getDiversityByIntervalName(intervalName);
  }

  @Get('/diversity')
  getDiversity() {
    return this.service.getDiversity();
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
