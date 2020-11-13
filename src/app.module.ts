import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseProviders } from './database.providers';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, UserModule],
  controllers: [AppController],
  providers: [AppService, ...databaseProviders],
  exports: [...databaseProviders],
})
export class AppModule {}
