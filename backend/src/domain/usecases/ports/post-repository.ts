import { PostData } from '../../entities/post-entities/post/post-data';
import { ManagedId } from './repository';

export interface PostRepository {
  add: (post: PostData) => Promise<ManagedId>;
  insertPostTags: (idPost: number, tags: number[]) => Promise<boolean>;
  update: (postData: PostData, idPost: number) => Promise<void>;
  updatePostTags: (idPost: number, tags: number[]) => Promise<boolean>;
  delete: (idPost: number) => Promise<void>;
  deletePostTags: (tags: number) => Promise<void>;
}
