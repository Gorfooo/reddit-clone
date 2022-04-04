import { RegisterUserData } from '../../../entities/user-entities/user/register-user-data';
import { RegisterUserResponse } from './register-user-response';

export interface IRegisterUser {
  execute: (user: RegisterUserData) => Promise<RegisterUserResponse>;
}
