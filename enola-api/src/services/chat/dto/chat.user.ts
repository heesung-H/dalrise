import { BaseModel, ModelArray } from 'src/services/base/dto/base.model';
import { ModelArrayInFile } from 'src/services/base/dto/base.persistence';
export interface User extends BaseModel {
  token: string;
  googleId: string | null;
  isAdmin: boolean;
  nick: string;
}

const users = new ModelArrayInFile<User>();

export function findUserByToken(token: string): User | undefined {
  return undefined;
  //return users.chain.find(user => user.token === token).value();
}
