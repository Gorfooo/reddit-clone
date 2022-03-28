import { PostData } from '../../../entities/post-entities/post/post-data';
import { RegisterPostResponse } from './register-post-response';

export interface IRegisterPost {
  execute: (post: PostData) => Promise<RegisterPostResponse>;
}
