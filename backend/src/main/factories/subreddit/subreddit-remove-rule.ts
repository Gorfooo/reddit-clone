import { SubredditRemoveRuleController } from '../../../adapters/presentation/controllers/subreddit/subreddit-remove-rule-controller';
import { SubredditRemoveRule } from '../../../domain/usecases/subreddit/subreddit-remove-rule/subreddit-remove-rule';
import { PostgresSubredditRepository } from '../../../external/repositories/subreddit-repository';

export const makeSubredditRemoveRuleController =
  (): SubredditRemoveRuleController => {
    const subredditRepository = new PostgresSubredditRepository();
    const subredditRemoveRuleUseCase = new SubredditRemoveRule(
      subredditRepository,
    );
    const subredditRemoveRuleController = new SubredditRemoveRuleController(
      subredditRemoveRuleUseCase,
    );
    return subredditRemoveRuleController;
  };
