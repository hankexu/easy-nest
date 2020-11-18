import { IsNumberString } from 'class-validator';
import { WhereOptions, Op } from 'sequelize';
import { plainToClass } from 'class-transformer';

type OrderItem = [string, 'DESC' | 'ASC'];
type And = 'AND' | 'and';
type Or = 'OR' | 'or';
type QueryItem = {
  name: string;
  condition: {
    op: 'eq' | 'in';
    value: string | number | string[] | number[];
  };
};

export class QueryDto {
  @IsNumberString()
  page = 1;
  @IsNumberString()
  limit = 10;
  sort: string | [string];
  query: string;
  search: string;

  getPage() {
    return +this.page;
  }

  getLimit() {
    return +this.limit;
  }

  getSort(): OrderItem[] {
    if (!this.sort) return null;
    const sortStrTrans = (str): OrderItem => {
      if (str.startsWith('-')) {
        return [str.slice(1), 'DESC'];
      } else if (str.startsWith('+')) {
        return [str.slice(1), 'ASC'];
      } else {
        return [str, 'ASC'];
      }
    };
    if (typeof this.sort === 'object') {
      return this.sort.map((item) => sortStrTrans(item));
    } else if (typeof this.sort === 'string') {
      return [sortStrTrans(this.sort)];
    }
  }

  getQuery(): WhereOptions {
    const queryEntries = Object.entries(JSON.parse(this.query));
    const valueParser = (value) => {

    };
    const where: WhereOptions = {};
    for (const [key, value] of queryEntries) {
      if (key.toUpperCase() === 'AND') {
        Object.assign(where, {
          [Op.and]: value,
        });
      } else if (key.toUpperCase() === 'OR') {
        Object.assign(where, { [Op.or]: value });
      } else {

      }
    }
    return where;
  }
}

const query = {
  and: [{ id: 44 }, { username: 'xffff' }],
  or: [{ id: 55 }, { username: 'xffff' }],
  id: [1, 2, 3, 4],
  username: 'xxxxxxxxxxxx',
  age: [{ gt: 5, lt: 4 }],
  level: { between: [1, 4] },
};
console.log(JSON.stringify(query));
