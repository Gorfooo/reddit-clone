import { PostData } from '../../../entities/post-entities/post/post-data';
import { RegisterPostResponse } from './register-post-response';
import { PostRepository } from '../../ports/post-repository';
import { IRegisterPost } from './register-post-interface';

export class RegisterPost implements IRegisterPost {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(postData: PostData): Promise<RegisterPostResponse> {
    const userIdOrError = await this.savePost(postData);

    return { id: userIdOrError.id };
  }

  private async savePost(postData: PostData): Promise<RegisterPostResponse> {
    const { id: postId } = await this.postRepository.add({
      idUsuario: postData.idUsuario,
      titulo: postData.titulo,
      conteudo: postData.conteudo,
      // tags
    });

    return { id: postId };
  }
}
