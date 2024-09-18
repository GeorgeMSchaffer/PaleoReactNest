import { Controller,Query, Get,Req, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpeciesService } from './species.service';
import { CreateSpeciesDto } from './dto/create-species.dto';
import { UpdateSpeciesDto } from './dto/update-species.dto';
import { IRequestParams } from 'src/common/types';
import { query } from 'express';

@Controller('/api/v1/species/')
export class SpeciesController {
  constructor(private readonly speciesService: SpeciesService) {}

  @Post()
  create(@Body() createSpeciesDto: CreateSpeciesDto) {
    return this.speciesService.create(createSpeciesDto);
  }

  @Get("/")
  findAll(@Query() query) {
    console.log('Getting all Species with request.params', query);
    //const query = req.body.values;
    const params: IRequestParams = {
      take: query?.take || 10,
      skip: query?.skip || 0,
      orderBy: query?.orderBy || 'specimenNo',
      orderDir: query?.orderDir || 'DESC',
      queryParams: {

      },
    }
      const filterKeys = Object.keys(query);
      console.log("🚀 ~ SpeciesController ~ findAll ~ filterKeys:", filterKeys)

      if(filterKeys.length){
        filterKeys.forEach(key => {
          //Ignore pagination and sorting params
          if(key === "take" || key === "skip" || key === "orderBy" || key === "orderDir"){
            return;
          }
          const filterValue = query.queryParams[key]
          //[TODO] checking the entity for a valid field via hasOwnProperty does not work with the entity objects so we need to find a way to validate the keys

          if(filterValue?.length ) {
            query.andWhere(`${key} LIKE :${key}`, {[key]: `%${filterValue}%`})
          }
        })
    };
    return this.speciesService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.speciesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpeciesDto: UpdateSpeciesDto) {
    return this.speciesService.update(+id, updateSpeciesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.speciesService.remove(+id);
  }
}
