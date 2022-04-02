import { PostData } from '../../../entities/post-entities/post/post-data';

export interface IUpdatePost {
  execute: (post: PostData) => Promise<boolean>;
}
