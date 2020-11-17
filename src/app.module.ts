import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { EasyModule } from './easy/easy.module';
import { SharedModule } from './shared/shared.module';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { ApiExceptionFilter } from './filters/api-exception.filter';

@Module({
  imports: [AuthModule, UserModule, EasyModule, SharedModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: ApiExceptionFilter,
    }
  ],
})
export class AppModule {}
