import { PostAnswearData } from '../../entities/post-entities/post/post-answear-data';
import { PostCommentData } from '../../entities/post-entities/post/post-comment-data';
import { RegisterPostData } from '../../entities/post-entities/post/register-post-data';
import { UpdatePostData } from '../../entities/post-entities/post/update-post-data';
import { ManagedId } from './repository';

export interface PostRepository {
  add: (post: RegisterPostData) => Promise<ManagedId>;
  insertPostTags: (idPost: number, tags: number[]) => Promise<boolean>;
  update: (postData: UpdatePostData, idPost: number) => Promise<void>;
  updatePostTags: (idPost: number, tags: number[]) => Promise<boolean>;
  delete: (idPost: number) => Promise<void>;
  deletePostTags: (tags: number) => Promise<void>;
  addComment: (postComment: PostCommentData) => Promise<void>;
  addAnswear: (postAnswear: PostAnswearData) => Promise<void>;
}
