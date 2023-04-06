import { Test, TestingModule } from '@nestjs/testing';
import { SiteOutagesController } from './site-outages.controller';
import { SiteOutagesService } from './site-outages.service';

describe('SiteOutagesController', () => {
  let controller: SiteOutagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SiteOutagesController],
      providers: [SiteOutagesService],
    }).compile();

    controller = module.get<SiteOutagesController>(SiteOutagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
