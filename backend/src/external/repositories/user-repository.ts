import { UserData } from '../../domain/entities/user-entities/user/user-data';
import { UserRepository } from '../../domain/usecases/ports/user-repository';
import { ManagedId } from '../../domain/usecases/ports/repository';
import { Tables } from '../database/ports/tables';
import { knexClient } from '../database/postgres/knex/client';

export class PostgresUserRepository implements UserRepository {
  async add(user: UserData): Promise<ManagedId> {
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

  async update(user: UserData, id: number): Promise<ManagedId> {
    const [userUpdatedId] = await knexClient(Tables.User)
      .update(user)
      .where('id_usuario', id)
      .returning('id_usuario');

    return { id: userUpdatedId };
  }

  async findUser(user: UserData): Promise<ManagedId> {
    const [userFoundId] = await knexClient(Tables.User)
      .select('id_usuario')
      .where('email', user.email)
      .where('senha', user.senha);

    return { id: userFoundId };
  }
}
