import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TaxaService } from './taxa.service';
import { CreateTaxaDto } from './dto/create-taxa.dto';
import { UpdateTaxaDto } from './dto/update-taxa.dto';
import { buildRequestParams } from 'src/common/utils';
@Controller('/api/v1/taxa')
export class TaxaController {
  constructor(private readonly service: TaxaService) {}

  @Post()
  create(@Body() createTaxaDto: CreateTaxaDto) {
    return this.service.create(createTaxaDto);
  }

  @Get()
  findAll(@Query() query) {
    const params = buildRequestParams(query);
    return this.service.findAll(params);

  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaxaDto: UpdateTaxaDto) {
    return this.service.update(+id, updateTaxaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
