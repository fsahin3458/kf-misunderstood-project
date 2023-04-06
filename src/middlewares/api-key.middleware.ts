import { Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response } from 'express';

@Injectable()
export class ApiKeyMiddleware implements NestMiddleware {
  private readonly validApiKeys = this.configService.get('API_KEY');
  constructor(private configService: ConfigService) {}

  use(req: Request, res: Response, next: Function) {
    const apiKey = req.headers['api-key'];
    if (!apiKey || !this.validApiKeys.includes(apiKey)) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    next();
  }
}
