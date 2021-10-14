import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from '../../database/entities/member/user.entity';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {}
