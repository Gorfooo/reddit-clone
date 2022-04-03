import { HttpRequest, HttpResponse } from '../ports/http';
import { serverError, ok } from '../helpers/http-helper';
import { ISubreddit } from '../../../../domain/usecases/subreddit/register-subreddit/register-subreddit-interface';

export class RegisterSubredditController {
  private readonly registerSubreddit: ISubreddit;

  constructor(registerSubreddit: ISubreddit) {
    this.registerSubreddit = registerSubreddit;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const subredditData = {
        idUsuarioCriador: httpRequest.data.idUsuarioCriador,
        sobre: httpRequest.data.sobre,
        banner: httpRequest.data.banner,
        nome: httpRequest.data.nome,
      };

      const subredditResponse: boolean = await this.registerSubreddit.execute(
        subredditData,
      );

      return ok(subredditResponse);
    } catch (error) {
      return serverError(error);
    }
  }
}
