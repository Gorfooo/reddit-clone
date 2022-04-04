import { HttpRequest, HttpResponse } from '../ports/http';
import { serverError, ok } from '../helpers/http-helper';
import { ISubredditRemoveRule } from '../../../../domain/usecases/subreddit/subreddit-remove-rule/subreddit-remove-rule-interface';

export class SubredditRemoveRuleController {
  private readonly subredditRemoveRule: ISubredditRemoveRule;

  constructor(subredditRemoveRule: ISubredditRemoveRule) {
    this.subredditRemoveRule = subredditRemoveRule;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const subredditRuleData = {
        idRegra: httpRequest.data.idRegra,
      };

      const subredditRemoveRuleResponse: boolean =
        await this.subredditRemoveRule.execute(subredditRuleData);

      return ok(subredditRemoveRuleResponse);
    } catch (error) {
      return serverError(error);
    }
  }
}
