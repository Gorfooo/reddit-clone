import { PostCommentData } from '../../../entities/post-entities/post/post-comment-data';
import { PostRepository } from '../../ports/post-repository';
import { IPostComment } from './post-comment-interface';
import { PostCommentResponse } from './post-comment-response';

export class PostComment implements IPostComment {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(postComment: PostCommentData): Promise<PostCommentResponse> {
    await this.saveComment(postComment);

    return true;
  }

  private async saveComment(postComment: PostCommentData): Promise<void> {
    await this.postRepository.addComment(postComment);
  }
}
