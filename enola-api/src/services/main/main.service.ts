import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/database/repository/user.repository';
@Injectable()
export class MainService {
  constructor(
    //@InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  getHello(): string {
    return 'Hello World!!!';
  }

  async getUserList() {
    const list = await this.userRepository.find();
    return list;
  }
}
