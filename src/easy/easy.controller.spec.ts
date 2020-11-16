import { Test, TestingModule } from '@nestjs/testing';
import { EasyController } from './easy.controller';

describe('EasyController', () => {
  let controller: EasyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EasyController],
    }).compile();

    controller = module.get<EasyController>(EasyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
