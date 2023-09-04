import { Test, TestingModule } from '@nestjs/testing';
import { SortController } from './sort.controller';

describe('SortController', () => {
  let controller: SortController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SortController],
    }).compile();

    controller = module.get<SortController>(SortController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
