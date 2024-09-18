import { Injectable } from '@nestjs/common';
import { CreateSpeciesDto } from './dto/create-species.dto';
import { UpdateSpeciesDto } from './dto/update-species.dto';
import { Species } from './entities/species.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IRequestParams } from "../common/types"
@Injectable()
export class SpeciesService {
  constructor(
    @InjectRepository(Species)
    private repo: Repository<Species>,
  ) { 
    console.log("Species constructor");
  }
  
  create(createSpeciesDto: CreateSpeciesDto) {
    return this.repo.save(createSpeciesDto);
  }

  findAll(params:IRequestParams) {
    const filters = params.queryParams;
    console.log("🚀 ~ SpeciesService ~ findAll ~ filters:", filters)

    return this.repo.find({
      relationLoadStrategy: "join",
        
      order: {
        [params.orderBy]: params.orderDir
      },
      take: params.take,
      skip: params.skip,
      relations: ['occurence'],
      where: {...filters},
      cache: true,
    });
  }

  findOne(id: number) {
    return this.repo.findOneBy({ specimenNo: id });
  }

  update(id: number, updateSpeciesDto: UpdateSpeciesDto) {
    return this.repo.update(id, updateSpeciesDto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
