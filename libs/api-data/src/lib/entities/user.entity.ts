import {
  BaseEntity,
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
@Index(['id'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'user_id' })
  id!: number;

  @Column({ length: 100 })
  name!: string;

  @Column({ length: 100 })
  username!: string;

  @Column({ length: 200 })
  email!: string;

  @Column({ length: 250 })
  password!: string;
}
