import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';
import { logger, LoggerMiddleware } from './logger/logger.middleware';

@Module({
  imports: [CatsModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {

    consumer
      .apply(LoggerMiddleware,logger)
      .exclude(
        { path: 'cats', method: RequestMethod.GET },
        { path: 'cats', method: RequestMethod.POST },
        'cats/{*splat}',
      )
      .forRoutes(CatsController);
      

  }
}
