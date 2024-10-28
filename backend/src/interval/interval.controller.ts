import { Controller,Req, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { IntervalService } from './interval.service';
import { CreateIntervalDto } from './DTOs/create-interval.dto';
import { UpdateIntervalDto } from './DTOs/update-interval.dto';
import { EnumRanks,IRequestParams } from 'src/common/types';
import { buildRequestParams } from 'src/common/utils';


@Controller('/api/v1/interval')
export class IntervalController {
  constructor(private readonly service: IntervalService) {}

  @Post("/")
  create(@Body() createIntervalDto: CreateIntervalDto) {
    return this.service.create(createIntervalDto);
    return this.service.create(createIntervalDto);
  }

  @Get("/")
  findAll(@Query() query) {
    console.log('Get All INTERVALS with query:',query);
    const params = buildRequestParams(query);
    console.log("🚀 ~ IntervalController ~ findAll ~ params:", params)
    //if there is not orderBy, we use a defualt one specific to the interval entity, hence the overwrite of the default orderBy
    if(!query.orderBy){
      params.orderBy = 'intervalNo';
    }
    console.log("🚀 ~ IntervalController ~ findAll ~ params:", params)
    return this.service.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Get('/ages')
  getAges() {
    return this.service.findByRecordType('age');
  }
  @Get('/eons')
  getEons() {
    return this.service.findByRecordType('eon');
  }
  @Get('/periods')
  getPeriods() {
    return this.service.findByRecordType('period');
  }
  @Get('/epochs')
  getEpochs() {
    return this.service.findByRecordType('epoch');
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIntervalDto: UpdateIntervalDto) {
    return this.service.update(+id, updateIntervalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
