import { UserData } from '../../entities/user-entities/user/user-data';
import { ManagedId } from './repository';

export interface UserRepository {
  add: (user: UserData) => Promise<ManagedId>;
  update: (user: UserData, id: number) => Promise<ManagedId>;
  findIdenticalEmail: (email: string) => Promise<string | null>;
  findUser: (user: UserData) => Promise<ManagedId>;
}
