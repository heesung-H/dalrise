import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async getUserGroup() {
    return await this.createQueryBuilder('u')
      .select('u.name', 'name')
      .groupBy('u.name')
      .getRawMany();
  }

  async getUserByEmail(email: string) {
    return await this.findOne({ email: email });
  }
}
