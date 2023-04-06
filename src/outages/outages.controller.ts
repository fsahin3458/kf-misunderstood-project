import { Controller, Get } from '@nestjs/common';
import { OutagesService } from './outages.service';

@Controller('/outages')
export class OutagesController {
  constructor(private readonly outagesService: OutagesService) {}

  @Get()
  findAll() {
    return this.outagesService.findAll();
  }
}
