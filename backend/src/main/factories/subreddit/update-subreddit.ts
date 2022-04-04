import { UpdateSubredditController } from '../../../adapters/presentation/controllers/subreddit/update-subreddit-controller';
import { UpdateSubreddit } from '../../../domain/usecases/subreddit/update-subreddit/update-subreddit';
import { PostgresSubredditRepository } from '../../../external/repositories/subreddit-repository';

export const makeUpdateSubredditController = (): UpdateSubredditController => {
  const subredditRepository = new PostgresSubredditRepository();
  const updateSubredditUseCase = new UpdateSubreddit(subredditRepository);
  const updateSubredditController = new UpdateSubredditController(
    updateSubredditUseCase,
  );
  return updateSubredditController;
};
