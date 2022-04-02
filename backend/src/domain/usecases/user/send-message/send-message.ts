import { MessageData } from '../../../entities/user-entities/user/message-data';
import { UserRepository } from '../../ports/user-repository';
import { ISendMessage } from './send-message-interface';

export class SendMessage implements ISendMessage {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(messageData: MessageData): Promise<boolean> {
    await this.sendMessage(messageData);

    return true;
  }

  private async sendMessage(messageData: MessageData): Promise<void> {
    await this.userRepository.sendMessage(messageData);
  }
}
