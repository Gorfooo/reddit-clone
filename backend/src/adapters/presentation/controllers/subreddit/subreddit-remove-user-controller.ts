import { HttpRequest, HttpResponse } from '../ports/http';
import { serverError, ok } from '../helpers/http-helper';
import { ISubredditRemoveUser } from '../../../../domain/usecases/subreddit/subreddit-remove-user/subreddit-remove-user-interface';

export class SubredditRemoveUserController {
  private readonly subredditRemoveUser: ISubredditRemoveUser;

  constructor(subredditRemoveUser: ISubredditRemoveUser) {
    this.subredditRemoveUser = subredditRemoveUser;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const subredditUserData = {
        idUsuario: httpRequest.data.idUsuario,
        idSubreddit: httpRequest.data.idSubreddit,
      };

      const subredditRemoveUserResponse: boolean =
        await this.subredditRemoveUser.execute(subredditUserData);

      return ok(subredditRemoveUserResponse);
    } catch (error) {
      return serverError(error);
    }
  }
}
