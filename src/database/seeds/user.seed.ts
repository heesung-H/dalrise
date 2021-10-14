import { Factory, Seeder } from 'typeorm-seeding';
import { UserEntity } from '../entities/member/user.entity';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory): Promise<any> {
    console.log('create users');
    await factory(UserEntity)().createMany(10);
  }
}
