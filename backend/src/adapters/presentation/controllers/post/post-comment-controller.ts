import { HttpRequest, HttpResponse } from '../ports/http';
import { serverError, ok } from '../helpers/http-helper';
import { IPostComment } from '../../../../domain/usecases/post/post-comment/post-comment-interface';

export class PostCommentController {
  private readonly postComment: IPostComment;

  constructor(postComment: IPostComment) {
    this.postComment = postComment;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const postCommentData = {
        idPost: httpRequest.data.idPost,
        idUsuario: httpRequest.data.idUsuario,
        comentario: httpRequest.data.comentario,
      };

      const postCommentResponse: boolean = await this.postComment.execute(
        postCommentData,
      );

      return ok(postCommentResponse);
    } catch (error) {
      return serverError(error);
    }
  }
}
