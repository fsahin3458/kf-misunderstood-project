import { Module } from '@nestjs/common';
import { SiteOutagesService } from './site-outages.service';
import { SiteOutagesController } from './site-outages.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [SiteOutagesController],
  providers: [SiteOutagesService, PrismaService]
})
export class SiteOutagesModule {}
