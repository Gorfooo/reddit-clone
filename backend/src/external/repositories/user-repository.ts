import { RegisterUserData } from '../../domain/entities/user-entities/user/register-user-data';
import { UserRepository } from '../../domain/usecases/ports/user-repository';
import { ManagedId } from '../../domain/usecases/ports/repository';
import { Tables } from '../database/ports/tables';
import { knexClient } from '../database/postgres/knex/client';
import { FollowerData } from '../../domain/entities/user-entities/user/follower-data';
import { BlockData } from '../../domain/entities/user-entities/user/block-data';
import { MessageData } from '../../domain/entities/user-entities/user/message-data';
import { ReportData } from '../../domain/entities/user-entities/user/report-data';
import { UpdateUserData } from '../../domain/entities/user-entities/user/update-user-data';
import { LoginUserData } from '../../domain/entities/user-entities/user/login-user-data';

export class PostgresUserRepository implements UserRepository {
  async add(user: RegisterUserData): Promise<ManagedId> {
    const [insertedId] = await knexClient(Tables.User)
      .insert(user)
      .returning('idUsuario');

    return { id: insertedId };
  }

  async findIdenticalEmail(email: string): Promise<string | null> {
    const [emailFound] = await knexClient(Tables.User)
      .select('usuario.email')
      .where('email', email);

    if (!emailFound) return null;

    return emailFound;
  }

  async update(user: UpdateUserData, id: number): Promise<ManagedId> {
    const [userUpdatedId] = await knexClient(Tables.User)
      .update(user)
      .where('idUsuario', id)
      .returning('idUsuario');

    return { id: userUpdatedId };
  }

  async findUser(user: LoginUserData): Promise<ManagedId | null> {
    const [userFoundId] = await knexClient(Tables.User)
      .select('idUsuario')
      .where('email', user.email)
      .where('senha', user.senha);

    if (!userFoundId) return null;

    return { id: userFoundId };
  }

  async addNewFollower(userIds: FollowerData): Promise<void> {
    await knexClient(Tables.Followers).insert(userIds);
  }

  async deleteFollower(userIds: FollowerData): Promise<void> {
    await knexClient(Tables.Followers)
      .where('idSeguidor', userIds.idSeguidor)
      .where('idSeguido', userIds.idSeguido)
      .del();
  }

  async block(userIds: BlockData): Promise<void> {
    await knexClient(Tables.Block).insert(userIds);
  }

  async unblock(userIds: BlockData): Promise<void> {
    await knexClient(Tables.Block)
      .where('idBloqueador', userIds.idBloqueador)
      .where('idBloqueado', userIds.idBloqueado)
      .del();
  }

  async sendMessage(messageData: MessageData): Promise<void> {
    await knexClient(Tables.Chat).insert(messageData);
  }

  async readMessage(userIds: MessageData): Promise<void> {
    await knexClient(Tables.Chat)
      .update('lido', 'S')
      .where('idLeitor', userIds.idLeitor)
      .where('idEscritor', userIds.idEscritor);
  }

  async report(report: ReportData): Promise<void> {
    await knexClient(Tables.Report).insert(report);
  }
}
