import { UpdateSubredditData } from '../../../entities/subreddit-entities/subreddit/update-subreddit-data';
import { SubredditRepository } from '../../ports/subreddit-repository';
import { IUpdateSubreddit } from './update-subreddit-interface';
import { UpdateSubredditResponse } from './update-subreddit-response';

export class UpdateSubreddit implements IUpdateSubreddit {
  constructor(private readonly subredditRepository: SubredditRepository) {}

  async execute(
    subreddit: UpdateSubredditData,
  ): Promise<UpdateSubredditResponse> {
    await this.updateSubreddit(subreddit);

    return true;
  }

  private async updateSubreddit(subreddit: UpdateSubredditData): Promise<void> {
    await this.subredditRepository.update(subreddit);
  }
}
