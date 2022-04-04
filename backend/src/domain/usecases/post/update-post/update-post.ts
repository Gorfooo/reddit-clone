import { UpdatePostData } from '../../../entities/post-entities/post/update-post-data';
import { PostRepository } from '../../ports/post-repository';
import { IUpdatePost } from './update-post-interface';
import { UpdatePostResponse } from './update-post-response';

export class UpdatePost implements IUpdatePost {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(postData: UpdatePostData): Promise<UpdatePostResponse> {
    await this.updatePost(postData);

    await this.updatePostTags(postData);

    return true;
  }

  private async updatePost(postData: UpdatePostData): Promise<void> {
    await this.postRepository.update(
      {
        titulo: postData.titulo,
        conteudo: postData.conteudo,
      },
      postData.idPost,
    );
  }

  private async updatePostTags(post: UpdatePostData): Promise<void> {
    await this.postRepository.updatePostTags(post.idPost, post.tags);
  }
}
