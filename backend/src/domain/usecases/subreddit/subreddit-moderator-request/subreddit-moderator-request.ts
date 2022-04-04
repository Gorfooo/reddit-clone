import { SubredditModeratorRequestData } from '../../../entities/subreddit-entities/subreddit/subreddit-moderator-request-data';
import { SubredditRepository } from '../../ports/subreddit-repository';
import { ISubredditModeratorRequest } from './subreddit-moderator-request-interface';
import { SubredditModeratorRequestResponse } from './subreddit-moderator-request-response';

export class SubredditModeratorRequest implements ISubredditModeratorRequest {
  constructor(private readonly subredditRepository: SubredditRepository) {}

  async execute(
    moderatorRequestData: SubredditModeratorRequestData,
  ): Promise<SubredditModeratorRequestResponse> {
    await this.saveSubredditModeratorRequest(moderatorRequestData);

    return true;
  }

  private async saveSubredditModeratorRequest(
    moderatorRequestData: SubredditModeratorRequestData,
  ): Promise<void> {
    await this.subredditRepository.addModeratorRequest(moderatorRequestData);
  }
}
