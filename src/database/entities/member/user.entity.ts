import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'user_id' })
  id!: number;

  @Column({ length: 100 })
  name!: string;

  @Column({ length: 100 })
  username!: string;

  @Column({ length: 250 })
  password!: string;
}
