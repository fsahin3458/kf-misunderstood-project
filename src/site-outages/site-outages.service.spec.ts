import { Test, TestingModule } from '@nestjs/testing';
import { SiteOutagesService } from './site-outages.service';

describe('SiteOutagesService', () => {
  let service: SiteOutagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SiteOutagesService],
    }).compile();

    service = module.get<SiteOutagesService>(SiteOutagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
