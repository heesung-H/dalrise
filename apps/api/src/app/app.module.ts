import { Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import {
  CoreModule,
  MysqlDatabaseProviderModule,
  LoggerMiddleware,
} from '@enola/core';
import { AuthModule } from '@enola/auth';

import { HelloModule } from './hellow/hello.module';
import { AccountModule } from './account/account.module';

@Module({
  imports: [
    CoreModule,
    MysqlDatabaseProviderModule,
    AccountModule,
    AuthModule,
    HelloModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('hello');
  }
}
