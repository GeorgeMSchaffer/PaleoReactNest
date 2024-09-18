import { Controller,Req, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IntervalService } from './interval.service';
import { CreateIntervalDto } from './dto/create-interval.dto';
import { UpdateIntervalDto } from './dto/update-interval.dto';

@Controller('/api/v1/interval')
export class IntervalController {
  constructor(private readonly intervalService: IntervalService) {}

  @Post("/")
  create(@Body() createIntervalDto: CreateIntervalDto) {
    return this.intervalService.create(createIntervalDto);
  }

  @Get("/")
  findAll() {
    return this.intervalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.intervalService.findOne(+id);
  }

  @Get('/ages')
  getAges() {
    return this.intervalService.findByRecordType('age');
  }
  @Get('/eons')
  getEons() {
    return this.intervalService.findByRecordType('eon');
  }
  @Get('/periods')
  getPeriods() {
    return this.intervalService.findByRecordType('period');
  }
  @Get('/epochs')
  getEpochs() {
    return this.intervalService.findByRecordType('epoch');
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIntervalDto: UpdateIntervalDto) {
    return this.intervalService.update(+id, updateIntervalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.intervalService.remove(+id);
  }
}
