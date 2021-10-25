import { Controller, Get, UseFilters } from '@nestjs/common';
import { MainService } from './main.service';
import { ExceptionHandler } from 'src/library/global/ExceptionHandler';
//import { HttpException, HttpStatus } from '@nestjs/common';
@Controller()
@UseFilters(ExceptionHandler)
export class MainController {
  constructor(private readonly mainService: MainService) {}

  @Get()
  getHello(): string {
    return this.mainService.getHello();
  }

  @Get('test')
  getTest() {
    return this.mainService.getUserList();
  }
}
