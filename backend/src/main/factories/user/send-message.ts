import { SendMessageController } from '../../../adapters/presentation/controllers/user/send-message-controller';
import { SendMessage } from '../../../domain/usecases/user/send-message/send-message';
import { PostgresUserRepository } from '../../../external/repositories/user-repository';

export const makeSendMessageController = (): SendMessageController => {
  const userRepository = new PostgresUserRepository();
  const sendMessageUseCase = new SendMessage(userRepository);
  const sendMessageController = new SendMessageController(sendMessageUseCase);
  return sendMessageController;
};
