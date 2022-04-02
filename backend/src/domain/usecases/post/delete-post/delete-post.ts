import { PostRepository } from '../../ports/post-repository';
import { IDeletePost } from './delete-post-interface';

export class DeletePost implements IDeletePost {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(idPost: number): Promise<boolean> {
    await this.deletePostTags(idPost);

    await this.deletePost(idPost);

    return true;
  }

  private async deletePost(idPost: number): Promise<void> {
    await this.postRepository.delete(idPost);
  }

  private async deletePostTags(idPost: number): Promise<void> {
    await this.postRepository.deletePostTags(idPost);
  }
}
