import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { UserRepository } from '@enola/api-data';
import { AuthService, LocalAuthGuard, LocalStrategy } from '@enola/api-service';
//import { AccountController } from './account.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository]),
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: 'process.env.SECRET_KEY',
        signOptions: {
          expiresIn: '60m',
        },
      }),
    }),
  ],
  //controllers: [AccountController],
  providers: [LocalStrategy, AuthService],
  exports: [],
})
export class AccountModule {}
