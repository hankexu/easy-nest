import { Inject } from '@nestjs/common';
import { Connection, Model, Schema} from 'mongoose';
import { createHash } from 'crypto';
import { PROVIDERS_TOKEN } from '../common/constant';
import {isEmpty} from 'lodash';

export class CollectionProvider {
  private modelMap: Map<string, Model<any>>;
  constructor(
    @Inject(PROVIDERS_TOKEN.MONGOOSE)
    private readonly connection: Connection,
  ) {
    this.modelMap = new Map<string, Model<any>>();
  }

  async getModel(schema: Schema, collectionName?: string): Promise<Model<any>> {
    const hash = createHash('md5');
    const modelName = hash.update(JSON.stringify(schema))
      .digest('hex');
    if (isEmpty(collectionName)) {
      collectionName = modelName;
    }
    if (this.modelMap.has(collectionName)) {
      return this.modelMap.get(collectionName);
    }
    const model = this.connection.model(modelName, schema, collectionName);
    this.modelMap.set(collectionName, model);
    return model;
  }
}

export const collectionsProvider = {
  provide: PROVIDERS_TOKEN.COLLECTION,
  useFactory: (connection: Connection): CollectionProvider =>
    new CollectionProvider(connection),
  inject: [PROVIDERS_TOKEN.MONGOOSE],
};
