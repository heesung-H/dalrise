import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { UserEntity } from '../entities/member/user.entity';

define(UserEntity, (faker: typeof Faker) => {
  const gender = faker.random.number({ min: 0, max: 1 });
  const firstName = faker.name.firstName(gender);
  const lastName = faker.name.lastName(gender);

  const user = new UserEntity();
  user.name = `${firstName} ${lastName}`;
  user.username = `${firstName} ${lastName}`;
  user.password = faker.random.word();
  return user;
});
