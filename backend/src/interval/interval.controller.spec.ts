import { Test, TestingModule } from '@nestjs/testing';
import { IntervalController } from './interval.controller';
import { IntervalService } from './interval.service';

describe('IntervalController', () => {
  let controller: IntervalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IntervalController],
      providers: [IntervalService],
    }).compile();

    controller = module.get<IntervalController>(IntervalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
