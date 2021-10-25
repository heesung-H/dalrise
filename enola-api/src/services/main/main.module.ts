import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from 'src/database/repository/user.repository';
import { MainController } from './main.controller';
import { MainService } from './main.service';
@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  controllers: [MainController],
  providers: [MainService],
  exports: [],
})
export class MainModule {}
