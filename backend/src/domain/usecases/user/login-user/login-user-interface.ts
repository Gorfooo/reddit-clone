import { UserData } from '../../../entities/user-entities/user/user-data';
import { LoginUserResponse } from './login-user-response';

export interface ILoginUser {
  execute: (user: UserData) => Promise<LoginUserResponse>;
}
