import { HttpRequest, HttpResponse } from '../ports/http';
import { serverError, ok } from '../helpers/http-helper';
import { ISubredditAddUser } from '../../../../domain/usecases/subreddit/subreddit-add-user/subreddit-add-user-interface';

export class SubredditAddUserController {
  private readonly subredditAddUser: ISubredditAddUser;

  constructor(subredditAddUser: ISubredditAddUser) {
    this.subredditAddUser = subredditAddUser;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const subredditUserData = {
        idUsuario: httpRequest.data.idUsuario,
        idSubreddit: httpRequest.data.idSubreddit,
        moderador: httpRequest.data.moderador,
      };

      const subredditAddUserResponse: boolean =
        await this.subredditAddUser.execute(subredditUserData);

      return ok(subredditAddUserResponse);
    } catch (error) {
      return serverError(error);
    }
  }
}
