import { Sequelize } from 'sequelize-typescript';
import { connect } from 'mongoose';
import config from '../config/config';
import { PROVIDERS_TOKEN } from '../common/constant';
import { Logger } from 'winston';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
export const databaseProviders = [
  {
    provide: PROVIDERS_TOKEN.SEQUELIZE,
    useFactory: async (logger: Logger) => {
      if (config.database.logging) {
        Object.assign(config.database, {
          logging: (...msg) => {
            logger.info(msg[0], msg[1].bind);
          },
        });
      }
      return new Sequelize(config.database);
    },
    inject: [WINSTON_MODULE_PROVIDER],
  },
  {
    provide: PROVIDERS_TOKEN.MONGOOSE,
    useFactory: async () => {
      const mongoose = await connect(config.mongo.url, config.mongo.options);
      mongoose.set('useCreateIndex', true);
      return mongoose;
    },
  },
];
