import { UpdateUserData } from '../../../entities/user-entities/user/update-user-data';
import { UpdateUserResponse } from './update-user-response';

export interface IUpdateUser {
  execute: (user: UpdateUserData) => Promise<UpdateUserResponse>;
}
