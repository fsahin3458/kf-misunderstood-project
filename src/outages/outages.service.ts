import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetOutageDto } from './dto/get-outage.dto';

@Injectable()
export class OutagesService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<GetOutageDto[]> {
    return await this.prisma.outages.findMany({
      select: { id: true, begin: true, end: true },
    });
  }
}
