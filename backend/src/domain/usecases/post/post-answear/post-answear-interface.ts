import { PostAnswearData } from '../../../entities/post-entities/post/post-answear-data';
import { PostAnswearResponse } from './post-answear-response';

export interface IPostAnswear {
  execute: (postAnswear: PostAnswearData) => Promise<PostAnswearResponse>;
}
