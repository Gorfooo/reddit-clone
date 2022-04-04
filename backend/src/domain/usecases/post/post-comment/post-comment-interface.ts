import { PostCommentData } from '../../../entities/post-entities/post/post-comment-data';
import { PostCommentResponse } from './post-comment-response';

export interface IPostComment {
  execute: (postComment: PostCommentData) => Promise<PostCommentResponse>;
}
