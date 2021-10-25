import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { UserRepository } from 'src/database/repository/user.repository';
import { AuthService } from './service/auth.service';
import { AccountController } from './account.controller';
import { LocalAuthGuard, LocalStrategy } from './jwt.strategy';

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
  controllers: [AccountController],
  providers: [LocalStrategy, AuthService],
  exports: [],
})
export class AccountModule {}
