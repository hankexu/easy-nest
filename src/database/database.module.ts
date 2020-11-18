import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { loggerConfig } from '../config/logger.config';
import { databaseProviders } from './database.providers';
import { collectionsProvider } from './collection.provider';
@Module({
  imports:[WinstonModule.forRoot(loggerConfig)],
  providers: [...databaseProviders, collectionsProvider],
  exports: [...databaseProviders, collectionsProvider],
})
export class DatabaseModule {}
