import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';

@Injectable()
export class ConfigService {
  constructor() {
    dotenv.config();
  }

  config() {
    return {
      mysql: {
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
      },
    };
  }
}
