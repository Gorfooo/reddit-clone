import { SubredditData } from '../../domain/entities/subreddit-entities/subreddit/subreddit-data';
import { SubredditRepository } from '../../domain/usecases/ports/subreddit-repository';
import { ManagedId } from '../../domain/usecases/ports/repository';
import { Tables } from '../database/ports/tables';
import { knexClient } from '../database/postgres/knex/client';
import { SubredditUserData } from '../../domain/entities/subreddit-entities/subreddit/subreddit-user-data';
import { SubredditModeratorRequestData } from '../../domain/entities/subreddit-entities/subreddit/subreddit-moderator-request-data';

export class PostgresSubredditRepository implements SubredditRepository {
  async add(subreddit: SubredditData): Promise<ManagedId> {
    const [insertedId] = await knexClient(Tables.Subreddit)
      .insert(subreddit)
      .returning('idSubreddit');

    return { id: insertedId };
  }

  async addUser(subredditUser: SubredditUserData): Promise<void> {
    await knexClient(Tables.SubredditUser).insert(subredditUser);
  }

  async addModeratorRequest(
    moderatorRequestData: SubredditModeratorRequestData,
  ): Promise<void> {
    await knexClient(Tables.ModeratorRequest).insert(moderatorRequestData);
  }
}
