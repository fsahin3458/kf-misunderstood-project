import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSiteOutageDto } from './dto/create-site-outage.dto';
import { ResponseCreateSiteOutageDto } from './dto/response-create-site-outages';

@Injectable()
export class SiteOutagesService {
  constructor(private prisma: PrismaService) { }

  async create(
    createSiteOutageDto: CreateSiteOutageDto,
  ): Promise<ResponseCreateSiteOutageDto> {
    // const newDevice = await this.prisma.device.create({
    //   data: {
    //     name: createSiteOutageDto.name,
    //     siteId: createSiteOutageDto.id,
    //     site: { connect: { ObjectId: createSiteOutageDto.id } },
    //   },
    // });

    const response = await this.prisma.siteInfo.create({
      data: {
        id: createSiteOutageDto.id,
        begin: createSiteOutageDto.begin,
        end: createSiteOutageDto.end,
        name: createSiteOutageDto.name,
        // device: {
        //   connect: [{ id: createSiteOutageDto.id.toString() }],
        // },
      },
    });
    if (response) {
      return { message: 'Successfully processed request.', code: 200 };
    }
    return {
      message: 'You have requested a resource that does not exist.',
      code: 404,
    };
  }

  async findOne(id: string) {
    const outages = await this.prisma.siteInfo.findMany({
      where: { id },
      select: { id: true, name: true, device: true },
    });
    if (outages.length == 0) {
      return 404;
    }
    return outages;
  }
}
