import { Injectable } from '@nestjs/common';
import { CreateOccurrenceDto } from './dto/create-occurrence.dto';
import { UpdateOccurrenceDto } from './dto/update-occurrence.dto';
import { Occurrence } from 'src/occurrences-bak/occurrence.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OccurrenceService {
  constructor(
    @InjectRepository(Occurrence)
    private repo: Repository<Occurrence>,
  ) { }
  
  create(createOccurrenceDto: CreateOccurrenceDto) {
    return this.repo.create(createOccurrenceDto)
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ occurrenceNo: id });
  }

  update(id: number, updateOccurrenceDto: UpdateOccurrenceDto) {
    return this.repo.update(id, updateOccurrenceDto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}