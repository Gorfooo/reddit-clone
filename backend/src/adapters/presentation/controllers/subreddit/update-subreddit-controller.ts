import { HttpRequest, HttpResponse } from '../ports/http';
import { serverError, ok } from '../helpers/http-helper';
import { IUpdateSubreddit } from '../../../../domain/usecases/subreddit/update-subreddit/update-subreddit-interface';

export class UpdateSubredditController {
  private readonly updateSubreddit: IUpdateSubreddit;

  constructor(updateSubreddit: IUpdateSubreddit) {
    this.updateSubreddit = updateSubreddit;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const subredditData = {
        idSubreddit: httpRequest.data.idSubreddit,
        sobre: httpRequest.data.sobre,
        banner: httpRequest.data.banner,
        nome: httpRequest.data.nome,
      };

      const updateSubredditResponse: boolean =
        await this.updateSubreddit.execute(subredditData);

      return ok(updateSubredditResponse);
    } catch (error) {
      return serverError(error);
    }
  }
}
