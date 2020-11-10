import { MaxLength } from 'class-validator';

class Role {
  name: string;
}

/**
 * xxfdf
 * @property {string} name xgffj
 */
export class HelloDto {
  /**
   * name
   * @example xxx
   */
  @MaxLength(20)
  name: string;
  /**
   * A list of user's roles
   * @example ['admin']
   */
  roles: Role[];
}
