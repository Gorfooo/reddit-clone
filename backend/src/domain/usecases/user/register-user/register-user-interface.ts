import { UserData } from '../../../entities/user-entities/user/user-data';
import { RegisterUserResponse } from './register-user-response';

export interface IRegisterUser {
  execute: (user: UserData) => Promise<RegisterUserResponse>;
}
