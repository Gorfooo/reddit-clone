import { LoginUserData } from '../../../entities/user-entities/user/login-user-data';
import { LoginUserResponse } from './login-user-response';

export interface ILoginUser {
  execute: (user: LoginUserData) => Promise<LoginUserResponse>;
}
