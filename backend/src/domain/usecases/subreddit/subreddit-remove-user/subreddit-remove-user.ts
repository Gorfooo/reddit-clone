import { SubredditUserData } from '../../../entities/subreddit-entities/subreddit/subreddit-user-data';
import { SubredditRepository } from '../../ports/subreddit-repository';
import { ISubredditRemoveUser } from './subreddit-remove-user-interface';
import { SubredditRemoveUserResponse } from './subreddit-remove-user-response';

export class SubredditRemoveUser implements ISubredditRemoveUser {
  constructor(private readonly subredditRepository: SubredditRepository) {}

  async execute(
    subredditUserData: SubredditUserData,
  ): Promise<SubredditRemoveUserResponse> {
    await this.removeSubredditUser(subredditUserData);

    return true;
  }

  private async removeSubredditUser(
    subredditUserData: SubredditUserData,
  ): Promise<void> {
    await this.subredditRepository.removeUser(subredditUserData);
  }
}
