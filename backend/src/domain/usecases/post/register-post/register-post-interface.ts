import { RegisterPostData } from '../../../entities/post-entities/post/register-post-data';
import { RegisterPostResponse } from './register-post-response';

export interface IRegisterPost {
  execute: (post: RegisterPostData) => Promise<RegisterPostResponse>;
}
