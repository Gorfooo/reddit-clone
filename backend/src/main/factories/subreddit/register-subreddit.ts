import { RegisterSubredditController } from '../../../adapters/presentation/controllers/subreddit/register-subreddit-controller';
import { RegisterSubreddit } from '../../../domain/usecases/subreddit/register-subreddit/register-subreddit';
import { PostgresSubredditRepository } from '../../../external/repositories/subreddit-repository';

export const makeRegisterSubredditController =
  (): RegisterSubredditController => {
    const subredditRepository = new PostgresSubredditRepository();
    const registerSubredditUseCase = new RegisterSubreddit(subredditRepository);
    const registerSubredditController = new RegisterSubredditController(
      registerSubredditUseCase,
    );
    return registerSubredditController;
  };
