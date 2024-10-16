import { Injectable } from '@nestjs/common';
import { CreateTaxaDto } from './dto/create-taxa.dto';
import { UpdateTaxaDto } from './dto/update-taxa.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {Taxa} from "./entities/taxa.entity";
import { IRequestParams } from "../common/types"
@Injectable()
export class TaxaService {
   
 constructor(
  @InjectRepository(Taxa)
  private repo: Repository<Taxa>,
) {}

  create(createTaxaDto: CreateTaxaDto) {
    return this.repo.save(createTaxaDto);
    //return 'This action adds a new taxa';
  }

  findAll(params:IRequestParams) {
    const filters = params.queryParams;

    return this.repo.find({
      order: {
        [params.orderBy]: params.orderDir
      },
      take: params.take,
      skip: params.skip,
      where: {...filters},
    });
//    return `This action returns all taxa`;
  }

  findOne(taxonNo: number) {
    return this.repo.findOneBy({taxonNo:taxonNo});
  }

  update(id: number, updateTaxaDto: UpdateTaxaDto) {
    return `This action updates a #${id} taxa`;
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
