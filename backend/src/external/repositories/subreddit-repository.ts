import { RegisterSubredditData } from '../../domain/entities/subreddit-entities/subreddit/register-subreddit-data';
import { SubredditRepository } from '../../domain/usecases/ports/subreddit-repository';
import { ManagedId } from '../../domain/usecases/ports/repository';
import { Tables } from '../database/ports/tables';
import { knexClient } from '../database/postgres/knex/client';
import { SubredditUserData } from '../../domain/entities/subreddit-entities/subreddit/subreddit-user-data';
import { SubredditModeratorRequestData } from '../../domain/entities/subreddit-entities/subreddit/subreddit-moderator-request-data';
import { ManageModeratorRequestData } from '../../domain/entities/subreddit-entities/subreddit/manage-moderator-request-data';
import { UpdateSubredditData } from '../../domain/entities/subreddit-entities/subreddit/update-subreddit-data';
import { SubredditAddRuleData } from '../../domain/entities/subreddit-entities/subreddit/subreddit-add-rule-data';
import { SubredditRemoveRuleData } from '../../domain/entities/subreddit-entities/subreddit/subreddit-remove-rule-data';

export class PostgresSubredditRepository implements SubredditRepository {
  async add(subreddit: RegisterSubredditData): Promise<ManagedId> {
    const [insertedId] = await knexClient(Tables.Subreddit)
      .insert(subreddit)
      .returning('idSubreddit');

    return { id: insertedId };
  }

  async update(subreddit: UpdateSubredditData): Promise<void> {
    await knexClient(Tables.Subreddit)
      .update(subreddit)
      .where('idSubreddit', subreddit.idSubreddit);
  }

  async addUser(subredditUser: SubredditUserData): Promise<void> {
    await knexClient(Tables.SubredditUser).insert(subredditUser);
  }

  async removeUser(subredditUserData: SubredditUserData): Promise<void> {
    await knexClient(Tables.SubredditUser)
      .where('idSubreddit', subredditUserData.idSubreddit)
      .where('idUsuario', subredditUserData.idUsuario)
      .del();
  }

  async addModeratorRequest(
    moderatorRequestData: SubredditModeratorRequestData,
  ): Promise<void> {
    await knexClient(Tables.ModeratorRequest).insert(moderatorRequestData);
  }

  async manageModeratorRequest(
    moderatorRequestData: ManageModeratorRequestData,
  ): Promise<void> {
    await knexClient(Tables.ModeratorRequest)
      .update(moderatorRequestData)
      .where(
        'idSolicitacaoModerador',
        moderatorRequestData.idSolicitacaoModerador,
      );
  }

  async addRule(subredditRuleData: SubredditAddRuleData): Promise<void> {
    await knexClient(Tables.SubredditRule).insert(subredditRuleData);
  }

  async removeRule(subredditRuleData: SubredditRemoveRuleData): Promise<void> {
    await knexClient(Tables.SubredditRule)
      .where('idRegra', subredditRuleData.idRegra)
      .del();
  }
}
