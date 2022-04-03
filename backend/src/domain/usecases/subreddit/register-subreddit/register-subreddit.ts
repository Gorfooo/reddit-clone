import { SubredditData } from '../../../entities/subreddit-entities/subreddit/subreddit-data';
import { ManagedId } from '../../ports/repository';
import { SubredditRepository } from '../../ports/subreddit-repository';
import { ISubreddit } from './register-subreddit-interface';

export class RegisterSubreddit implements ISubreddit {
  constructor(private readonly subredditRepository: SubredditRepository) {}

  async execute(subreddit: SubredditData): Promise<boolean> {
    const subredditId = await this.saveSubreddit(subreddit);

    await this.saveSubredditCreatorUser(
      subreddit.idUsuarioCriador,
      subredditId.id,
    );

    return true;
  }

  private async saveSubreddit(subreddit: SubredditData): Promise<ManagedId> {
    const subredditId = await this.subredditRepository.add(subreddit);

    return subredditId;
  }

  private async saveSubredditCreatorUser(
    idUsuario: number,
    idSubreddit: number,
  ): Promise<void> {
    const subredditUser = { idUsuario, idSubreddit, moderador: 'S' };

    await this.subredditRepository.addUser(subredditUser);
  }
}
