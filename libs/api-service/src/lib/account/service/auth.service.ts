import { Injectable } from '@nestjs/common';
import { User } from '@enola/api-data';
import { UserRepository } from '@enola/api-data';
import { JwtPayload } from '../dto/JwtPayload';
import { LoginUserDto } from '../dto/user-login.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userRepository: UserRepository) {}

  async login(dto: LoginUserDto) {
    const user = await this.validateAccount(dto);
    if (user) {
      //const payload = { username: user.username, sub: user.email };
      const payload: JwtPayload = {
        email: user.email,
        id: user.id,
        access_token: '324234234234234234', //this.jwtService.sign(payload),
      };
      return payload;
    }
    return user;
  }

  async validateAccount(dto: LoginUserDto) {
    const user = await this.userRepository.getUserByEmail(dto.email);
    if (user) {
      // user.password 암호 처리
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
