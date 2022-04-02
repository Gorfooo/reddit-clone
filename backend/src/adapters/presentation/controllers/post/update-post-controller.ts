import { HttpRequest, HttpResponse } from '../ports/http';
import { serverError, ok } from '../helpers/http-helper';
import { IUpdatePost } from '../../../../domain/usecases/post/update-post/update-post-interface';

export class UpdatePostController {
  private readonly updatePost: IUpdatePost;

  constructor(updatePost: IUpdatePost) {
    this.updatePost = updatePost;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const postData = {
        idPost: httpRequest.data.idPost,
        titulo: httpRequest.data.titulo,
        conteudo: httpRequest.data.conteudo,
        tags: httpRequest.data.tags,
      };

      const updatePostResponse: boolean = await this.updatePost.execute(
        postData,
      );

      return ok(updatePostResponse);
    } catch (error) {
      return serverError(error);
    }
  }
}
