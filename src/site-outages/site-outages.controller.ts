import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SiteOutagesService } from './site-outages.service';
import { CreateSiteOutageDto } from './dto/create-site-outage.dto';

@Controller('/site-outages/')
export class SiteOutagesController {
  constructor(private readonly siteOutagesService: SiteOutagesService) {}

  @Post(':id')
  create(
    @Param('id') id: string,
    @Body() createSiteOutageDto: CreateSiteOutageDto,
  ) {
    console.log(`id:`, id, 'body:', createSiteOutageDto);
    return this.siteOutagesService.create(createSiteOutageDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.siteOutagesService.findOne(id);
  }
}
