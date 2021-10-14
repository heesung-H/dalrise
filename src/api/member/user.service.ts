import { getConnection } from 'typeorm';
import { UserEntity } from '../../database/entities/member/user.entity';
import { UserRepository } from './user.repository';

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository =
      getConnection('dalrise').getCustomRepository(UserRepository);
  }

  public index = async () => {
    const users = await this.userRepository.find();

    return users;
  };
}
