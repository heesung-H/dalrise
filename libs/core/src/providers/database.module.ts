import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User, Language } from '@enola/api-data';

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
      logging: process.env.NODE_ENV === 'development',
      synchronize: process.env.NODE_ENV === 'development', // 개발용
      //name: 'dalrise',
    }),
  ],
})
export class MysqlDatabaseProviderModule {}
