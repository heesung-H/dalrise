import {
  Controller,
  Get,
  Post,
  Body,
  Req,
  Res,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
//import { AuthGuard } from '@nestjs/passport';
//import { Response } from 'express';
//import { Response, Response } from 'express';
import { AuthService } from './service/auth.service';
import { LoginUserDto } from './dto/user-login.dto';
import { UseFilters } from '@nestjs/common';
import { ExceptionHandler } from 'src/library/global/ExceptionHandler';
import { LocalAuthGuard } from './jwt.strategy';

@Controller('account')
@UseFilters(ExceptionHandler)
export class AccountController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/User/login')
  async login(@Body() dto: LoginUserDto) {
    return await this.authService.login(dto);
  }

  //로그아웃
  @Get('logout')
  logout(@Req() req, @Res() res) {
    req.logout();
    res.json({ loggedOut: true });
  }
}
