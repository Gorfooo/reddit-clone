import { HttpRequest, HttpResponse } from '../ports/http';
import { serverError, ok } from '../helpers/http-helper';
import { ISubredditModeratorRequest } from '../../../../domain/usecases/subreddit/subreddit-moderator-request/subreddit-moderator-request-interface';

export class SubredditModeratorRequestController {
  private readonly subredditModeratorRequest: ISubredditModeratorRequest;

  constructor(subredditModeratorRequest: ISubredditModeratorRequest) {
    this.subredditModeratorRequest = subredditModeratorRequest;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const subredditModeratorRequestData = {
        idSubreddit: httpRequest.data.idSubreddit,
        idUsuario: httpRequest.data.idUsuario,
        solicitacao: httpRequest.data.solicitacao,
      };

      const subredditModeratorRequestResponse: boolean =
        await this.subredditModeratorRequest.execute(
          subredditModeratorRequestData,
        );

      return ok(subredditModeratorRequestResponse);
    } catch (error) {
      return serverError(error);
    }
  }
}
