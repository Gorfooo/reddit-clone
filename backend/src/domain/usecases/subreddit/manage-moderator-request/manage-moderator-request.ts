import { ManageModeratorRequestData } from '../../../entities/subreddit-entities/subreddit/manage-moderator-request-data';
import { SubredditRepository } from '../../ports/subreddit-repository';
import { IManageModeratorRequest } from './manage-moderator-request-interface';
import { ManageModeratorRequestResponse } from './manage-moderator-request-response';

export class ManageModeratorRequest implements IManageModeratorRequest {
  constructor(private readonly subredditRepository: SubredditRepository) {}

  async execute(
    moderatorRequestData: ManageModeratorRequestData,
  ): Promise<ManageModeratorRequestResponse> {
    await this.manageModeratorRequest(moderatorRequestData);

    return true;
  }

  private async manageModeratorRequest(
    moderatorRequestData: ManageModeratorRequestData,
  ): Promise<void> {
    await this.subredditRepository.manageModeratorRequest(moderatorRequestData);
  }
}
