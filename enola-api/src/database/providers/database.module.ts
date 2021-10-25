import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Language } from '../entities/languages.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Language]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'mariadb',
      database: 'mariadb',
      entities: [User, Language],
      //entities: ['src/entities/*.entity.ts'],
      //factories: ['src/database/factories/*.factory{.ts,.js}'],
      //seeds: ['src/database/seeds/*.seed{.ts,.js}'],
      logging: true,
      synchronize: true, // 개발용
      //name: 'dalrise',
    }),
  ],
})
export class MysqlDatabaseProviderModule {}
