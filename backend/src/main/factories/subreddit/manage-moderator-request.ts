import { ManageModeratorRequestController } from '../../../adapters/presentation/controllers/subreddit/manage-moderator-request-controller';
import { ManageModeratorRequest } from '../../../domain/usecases/subreddit/manage-moderator-request/manage-moderator-request';
import { PostgresSubredditRepository } from '../../../external/repositories/subreddit-repository';

export const makeManageModeratorRequestController =
  (): ManageModeratorRequestController => {
    const subredditRepository = new PostgresSubredditRepository();
    const manageModeratorRequestUseCase = new ManageModeratorRequest(
      subredditRepository,
    );
    const manageModeratorRequestController =
      new ManageModeratorRequestController(manageModeratorRequestUseCase);
    return manageModeratorRequestController;
  };
