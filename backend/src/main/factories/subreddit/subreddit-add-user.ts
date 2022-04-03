import { SubredditAddUserController } from '../../../adapters/presentation/controllers/subreddit/subreddit-add-user-controller';
import { SubredditAddUser } from '../../../domain/usecases/subreddit/subreddit-add-user/subreddit-add-user';
import { PostgresSubredditRepository } from '../../../external/repositories/subreddit-repository';

export const makeSubredditAddUserController =
  (): SubredditAddUserController => {
    const subredditRepository = new PostgresSubredditRepository();
    const subredditAddUserUseCase = new SubredditAddUser(subredditRepository);
    const subredditAddUserController = new SubredditAddUserController(
      subredditAddUserUseCase,
    );
    return subredditAddUserController;
  };
