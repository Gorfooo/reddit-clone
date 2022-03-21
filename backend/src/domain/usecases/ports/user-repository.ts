import { UserData } from '../../entities/user-entities/user/user-data';
import { InsertedId } from './repository';

export interface UserRepository {
  add: (User: UserData) => Promise<InsertedId>;
  // update: (User: UserData) => Promise<void>;
}
