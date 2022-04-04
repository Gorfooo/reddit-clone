import { RegisterPostData } from '../../../entities/post-entities/post/register-post-data';
import { PostRepository } from '../../ports/post-repository';
import { IRegisterPost } from './register-post-interface';
import { RegisterPostResponse } from './register-post-response';

export class RegisterPost implements IRegisterPost {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(postData: RegisterPostData): Promise<RegisterPostResponse> {
    const post = await this.savePost(postData);

    await this.savePostTags(post);

    return true;
  }

  private async savePost(
    postData: RegisterPostData,
  ): Promise<RegisterPostData> {
    const { id: postId } = await this.postRepository.add({
      idUsuario: postData.idUsuario,
      titulo: postData.titulo,
      conteudo: postData.conteudo,
    });

    const post = postData;
    post.idPost = postId;

    return post;
  }

  private async savePostTags(post: RegisterPostData): Promise<boolean> {
    const savedTags = await this.postRepository.insertPostTags(
      post.idPost,
      post.tags,
    );

    return savedTags;
  }
}
