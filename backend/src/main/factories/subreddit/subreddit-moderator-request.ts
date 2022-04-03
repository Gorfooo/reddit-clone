import { SubredditModeratorRequestController } from '../../../adapters/presentation/controllers/subreddit/subreddit-moderator-request-controller';
import { SubredditModeratorRequest } from '../../../domain/usecases/subreddit/subreddit-moderator-request/subreddit-moderator-request';
import { PostgresSubredditRepository } from '../../../external/repositories/subreddit-repository';

export const makeSubredditModeratorRequestController =
  (): SubredditModeratorRequestController => {
    const subredditRepository = new PostgresSubredditRepository();
    const subredditModeratorRequestUseCase = new SubredditModeratorRequest(
      subredditRepository,
    );
    const subredditModeratorRequestController =
      new SubredditModeratorRequestController(subredditModeratorRequestUseCase);
    return subredditModeratorRequestController;
  };
