import { TaxaService } from './taxa.service';
import {Taxa} from './taxa.entity';
import {Controller, Get, Param, Response} from '@nestjs/common';

@Controller('/api/v1/taxa')
export class TaxaController {
    private readonly service: TaxaService;
    constructor(private readonly taxaService: TaxaService) {
      this.service = taxaService;
    }
    @Get('/')
    async getAll(): Promise<Taxa[]> {
      return await this.service.findAll();
    }
  
    @Get('/ping')
    async getPing(): Promise<string> {
     return new Date().getTime().toString();
     }
  
}
