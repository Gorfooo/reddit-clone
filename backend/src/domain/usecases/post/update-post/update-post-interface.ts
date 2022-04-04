import { UpdatePostData } from '../../../entities/post-entities/post/update-post-data';
import { UpdatePostResponse } from './update-post-response';

export interface IUpdatePost {
  execute: (post: UpdatePostData) => Promise<UpdatePostResponse>;
}
