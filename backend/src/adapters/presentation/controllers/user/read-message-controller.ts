import { HttpRequest, HttpResponse } from '../ports/http';
import { serverError, ok } from '../helpers/http-helper';
import { ReadMessageResponse } from '../../../../domain/usecases/user/read-message/read-message-response';
import { IReadMessage } from '../../../../domain/usecases/user/read-message/read-message-interface';

export class ReadMessageController {
  private readonly readMessage: IReadMessage;

  constructor(readMessage: IReadMessage) {
    this.readMessage = readMessage;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const userData = {
        idLeitor: httpRequest.data.idLeitor,
        idEscritor: httpRequest.data.idEscritor,
      };

      const readMessageResponse: ReadMessageResponse =
        await this.readMessage.execute(userData);

      return ok(readMessageResponse);
    } catch (error) {
      return serverError(error);
    }
  }
}
