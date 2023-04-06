import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OutagesModule } from './outages/outages.module';
import { SiteOutagesModule } from './site-outages/site-outages.module';
import { ConfigModule } from '@nestjs/config';
import { ApiKeyMiddleware } from './middlewares/api-key.middleware';

@Module({
  imports: [
    OutagesModule,
    SiteOutagesModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ApiKeyMiddleware).forRoutes('*');
  }
}
