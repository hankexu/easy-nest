import { Injectable } from '@nestjs/common';

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
  async list(resource: string, query: any) {

  }
}
