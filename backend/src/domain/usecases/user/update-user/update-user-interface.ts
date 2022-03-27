import { UserData } from '../../../entities/user-entities/user/user-data';
import { UpdateUserResponse } from './update-user-response';

export interface IUpdateUser {
  execute: (user: UserData) => Promise<UpdateUserResponse>;
}
