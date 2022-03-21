import { UserData } from '../../domain/entities/user-entities/user/user-data';
import { UserRepository } from '../../domain/usecases/ports/user-repository';
import { InsertedId } from '../../domain/usecases/ports/repository';
import { Tables } from '../database/ports/tables';
import { knexClient } from '../database/postgres/knex/client';

export class PostgresUserRepository implements UserRepository {
  async add(user: UserData): Promise<InsertedId> {
    const [insertedId] = await knexClient(Tables.User)
      .insert(user)
      .returning('id_usuario');

    return { id: insertedId };
  }

  async findIdenticalEmail(email: string): Promise<string | null> {
    const [emailFound] = await knexClient(Tables.User)
      .select('usuario.email')
      .where('email', email);

    if (!emailFound) return null;

    return emailFound;
  }
}
