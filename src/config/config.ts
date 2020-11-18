import { Dialect } from 'sequelize/types';
import dotenv from 'dotenv';
import * as models from '../model';

console.log(models);
dotenv.config();
export default {
  env: process.env.ENV,
  database: {
    dialect: 'mysql' as Dialect,
    host: process.env.MYSQL_HOST,
    port: +process.env.MYSQL_PORT,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB,
    timezone: '+08:00',
    logging: process.env.MYSQL_LOG === 'true',
    models: Object.values(models),
  },
  rabbitmq: {
    hostname: process.env.RABBITMQ_HOST,
    port: +process.env.RABBITMQ_PORT,
    username: process.env.RABBITMQ_USER,
    password: process.env.RABBITMQ_PASS,
    vhost: process.env.RABBITMQ_VHOST,
  },
  redis: {
    host: process.env.REDIS_HOST,
    port: +process.env.REDIS_PORT,
    db: +process.env.REDIS_DB,
    password: process.env.REDIS_PASS,
  },
  mongo: {
    url: process.env.MONGO_URL,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  logger: {
    level: process.env.LOG_LEVEL || 'warn',
  },
  other: {
    offlineTime: +process.env.OFFLINE_TIME * 60 || 0,
  },
};
