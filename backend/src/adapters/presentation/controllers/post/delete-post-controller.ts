import { HttpRequest, HttpResponse } from '../ports/http';
import { serverError, ok } from '../helpers/http-helper';
import { IDeletePost } from '../../../../domain/usecases/post/delete-post/delete-post-interface';

export class DeletePostController {
  private readonly deletePost: IDeletePost;

  constructor(deletePost: IDeletePost) {
    this.deletePost = deletePost;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const postData = httpRequest.data.idPost;

      const deletePostResponse: boolean = await this.deletePost.execute(
        postData,
      );

      return ok(deletePostResponse);
    } catch (error) {
      return serverError(error);
    }
  }
}
