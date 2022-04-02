import { PostData } from '../../../entities/post-entities/post/post-data';

export interface IRegisterPost {
  execute: (post: PostData) => Promise<boolean>;
}
