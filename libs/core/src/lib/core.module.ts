import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configuration } from './config/configuration';
import { validationSchema } from './config/validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      //envFilePath: ['.env.development.local', '.env.production'],
      envFilePath:
        process.env.NODE_ENV === 'development'
          ? '.env.development.local'
          : '.env.production',
      ignoreEnvFile: process.env.NODE_ENV === 'production',
      isGlobal: true,
      load: [configuration],
      validationSchema,
    }),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class CoreModule {}
