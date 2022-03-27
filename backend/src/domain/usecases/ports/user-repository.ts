import { UserData } from '../../entities/user-entities/user/user-data';
import { ManagedId } from './repository';

export interface UserRepository {
  add: (User: UserData) => Promise<ManagedId>;
  update: (User: UserData, id: number) => Promise<ManagedId>;
  findIdenticalEmail: (email: string) => Promise<string | null>;
  findUser: (user: UserData) => Promise<ManagedId>;
}
