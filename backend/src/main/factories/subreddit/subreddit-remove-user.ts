import { SubredditRemoveUserController } from '../../../adapters/presentation/controllers/subreddit/subreddit-remove-user-controller';
import { SubredditRemoveUser } from '../../../domain/usecases/subreddit/subreddit-remove-user/subreddit-remove-user';
import { PostgresSubredditRepository } from '../../../external/repositories/subreddit-repository';

export const makeSubredditRemoveUserController =
  (): SubredditRemoveUserController => {
    const subredditRepository = new PostgresSubredditRepository();
    const subredditRemoveUserUseCase = new SubredditRemoveUser(
      subredditRepository,
    );
    const subredditRemoveUserController = new SubredditRemoveUserController(
      subredditRemoveUserUseCase,
    );
    return subredditRemoveUserController;
  };
