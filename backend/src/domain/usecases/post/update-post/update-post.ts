import { PostData } from '../../../entities/post-entities/post/post-data';
import { PostRepository } from '../../ports/post-repository';
import { IUpdatePost } from './update-post-interface';

export class UpdatePost implements IUpdatePost {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(postData: PostData): Promise<boolean> {
    await this.updatePost(postData);

    await this.updatePostTags(postData);

    return true;
  }

  private async updatePost(postData: PostData): Promise<void> {
    await this.postRepository.update(
      {
        titulo: postData.titulo,
        conteudo: postData.conteudo,
      },
      postData.idPost,
    );
  }

  private async updatePostTags(post: PostData): Promise<void> {
    await this.postRepository.updatePostTags(post.idPost, post.tags);
  }
}
