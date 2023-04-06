import { Module } from '@nestjs/common';
import { OutagesService } from './outages.service';
import { OutagesController } from './outages.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [OutagesController],
  providers: [OutagesService, PrismaService],
})
export class OutagesModule {}
