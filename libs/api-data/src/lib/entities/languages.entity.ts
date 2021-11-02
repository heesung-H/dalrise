import {
  BaseEntity,
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ILanguage } from './languages.interface';

@Entity('language')
@Index(['id'])
export class Language extends BaseEntity implements ILanguage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
