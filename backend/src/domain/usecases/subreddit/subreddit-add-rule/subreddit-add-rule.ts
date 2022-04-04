import { SubredditAddRuleData } from '../../../entities/subreddit-entities/subreddit/subreddit-add-rule-data';
import { SubredditRepository } from '../../ports/subreddit-repository';
import { ISubredditAddRule } from './subreddit-add-rule-interface';
import { SubredditAddRuleResponse } from './subreddit-add-rule-response';

export class SubredditAddRule implements ISubredditAddRule {
  constructor(private readonly subredditRepository: SubredditRepository) {}

  async execute(
    subredditRuleData: SubredditAddRuleData,
  ): Promise<SubredditAddRuleResponse> {
    await this.saveSubredditRule(subredditRuleData);

    return true;
  }

  private async saveSubredditRule(
    subredditRuleData: SubredditAddRuleData,
  ): Promise<void> {
    await this.subredditRepository.addRule(subredditRuleData);
  }
}
