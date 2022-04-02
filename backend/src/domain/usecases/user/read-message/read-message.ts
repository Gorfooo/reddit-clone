import { MessageData } from '../../../entities/user-entities/user/message-data';
import { UserRepository } from '../../ports/user-repository';
import { IReadMessage } from './read-message-interface';

export class ReadMessage implements IReadMessage {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userIds: MessageData): Promise<boolean> {
    await this.readMessage(userIds);

    return true;
  }

  private async readMessage(userIds: MessageData): Promise<void> {
    await this.userRepository.readMessage(userIds);
  }
}
