import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MysqlDatabaseProviderModule } from './database/providers/database.module';
import { AccountModule } from './services/account/account.module';
import { MainModule } from './services/main/main.module';
import { ChatModule } from './services/chat/chat.module';
import { PokemonModule } from './services/pokemon/pokemon.module';
// import { AppController } from './domain/main/main.controller';
// import { AppService } from './domain/main/main.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MysqlDatabaseProviderModule,
    AccountModule,
    MainModule,
    ChatModule,
    PokemonModule,
  ],
})
export class AppModule {}
