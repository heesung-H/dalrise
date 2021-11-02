import { PassportStrategy, AuthGuard } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { JwtPayload } from './dto/JwtPayload';
import { LoginUserDto } from './dto/user-login.dto';
export class LocalAuthGuard extends AuthGuard('local') {}

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: false,
    });
    //super();

    // console.log(
    //   '================== LocalStrategy constructor ==================',
    // );
  }

  async validate(email: string, password: string) {
    //console.log('================== validate ==================');
    const dto: LoginUserDto = {
      email,
      password,
    };
    //const payload: JwtPayload = { email, password };
    const user = await this.authService.validateAccount(dto);
    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }
}
