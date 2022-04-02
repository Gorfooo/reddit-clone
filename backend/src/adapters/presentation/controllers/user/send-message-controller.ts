import { HttpRequest, HttpResponse } from '../ports/http';
import { serverError, ok } from '../helpers/http-helper';
import { SendMessageResponse } from '../../../../domain/usecases/user/send-message/send-message-response';
import { ISendMessage } from '../../../../domain/usecases/user/send-message/send-message-interface';

export class SendMessageController {
  private readonly sendMessage: ISendMessage;

  constructor(sendMessage: ISendMessage) {
    this.sendMessage = sendMessage;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const messageData = {
        idLeitor: httpRequest.data.idLeitor,
        idEscritor: httpRequest.data.idEscritor,
        dataHora: httpRequest.data.dataHora,
        mensagem: httpRequest.data.mensagem,
      };

      const sendMessageResponse: SendMessageResponse =
        await this.sendMessage.execute(messageData);

      return ok(sendMessageResponse);
    } catch (error) {
      return serverError(error);
    }
  }
}
