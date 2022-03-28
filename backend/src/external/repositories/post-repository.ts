import { PostData } from '../../domain/entities/post-entities/post/post-data';
import { PostRepository } from '../../domain/usecases/ports/post-repository';
import { ManagedId } from '../../domain/usecases/ports/repository';
import { Tables } from '../database/ports/tables';
import { knexClient } from '../database/postgres/knex/client';

export class PostgresPostRepository implements PostRepository {
  async add(post: PostData): Promise<ManagedId> {
    const [insertedId] = await knexClient(Tables.Post)
      .insert(post)
      .returning('id_post');

    return { id: insertedId };
  }
}
