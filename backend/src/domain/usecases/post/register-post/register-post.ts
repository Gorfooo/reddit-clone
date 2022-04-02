import { PostData } from '../../../entities/post-entities/post/post-data';
import { PostRepository } from '../../ports/post-repository';
import { IRegisterPost } from './register-post-interface';

export class RegisterPost implements IRegisterPost {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(postData: PostData): Promise<boolean> {
    const post = await this.savePost(postData);

    await this.savePostTags(post);

    return true;
  }

  private async savePost(postData: PostData): Promise<PostData> {
    const { id: postId } = await this.postRepository.add({
      idUsuario: postData.idUsuario,
      titulo: postData.titulo,
      conteudo: postData.conteudo,
    });

    const post = postData;
    post.idPost = postId;

    return post;
  }

  private async savePostTags(post: PostData): Promise<boolean> {
    const savedTags = await this.postRepository.insertPostTags(
      post.idPost,
      post.tags,
    );

    return savedTags;
  }
}
