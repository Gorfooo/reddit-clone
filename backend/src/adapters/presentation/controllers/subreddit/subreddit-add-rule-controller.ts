import { HttpRequest, HttpResponse } from '../ports/http';
import { serverError, ok } from '../helpers/http-helper';
import { ISubredditAddRule } from '../../../../domain/usecases/subreddit/subreddit-add-rule/subreddit-add-rule-interface';

export class SubredditAddRuleController {
  private readonly subredditAddRule: ISubredditAddRule;

  constructor(subredditAddRule: ISubredditAddRule) {
    this.subredditAddRule = subredditAddRule;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const subredditRuleData = {
        idSubreddit: httpRequest.data.idSubreddit,
        descricao: httpRequest.data.descricao,
      };

      const subredditAddRuleResponse: boolean =
        await this.subredditAddRule.execute(subredditRuleData);

      return ok(subredditAddRuleResponse);
    } catch (error) {
      return serverError(error);
    }
  }
}
