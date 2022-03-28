import { PostData } from '../../entities/post-entities/post/post-data';
import { ManagedId } from './repository';

export interface PostRepository {
  add: (post: PostData) => Promise<ManagedId>;
  // update: (User: UserData, id: number) => Promise<ManagedId>;
  // findIdenticalEmail: (email: string) => Promise<string | null>;
  // findUser: (user: UserData) => Promise<ManagedId>;
}
