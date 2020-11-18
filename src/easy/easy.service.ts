import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { QueryDto } from './dto/query.dto';

const resources = {
  user: {
    table: 'user',
    columns: [
      {
        column: 'username',
        name: 'username',
        title: '用户名',
      },
    ],
  },
};

@Injectable()
export class EasyService {
  async list(resource: string, query: QueryDto) {
    console.log(query.getQuery());
    return query;
  }
}
