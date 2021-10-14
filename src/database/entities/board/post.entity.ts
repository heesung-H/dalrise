import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('posts')
export class PostEntity {
  @PrimaryGeneratedColumn({ name: 'post_id' })
  id!: number;

  @Column()
  title!: string;

  @Column()
  content!: string;
}
