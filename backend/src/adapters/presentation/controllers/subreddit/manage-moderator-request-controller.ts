import { HttpRequest, HttpResponse } from '../ports/http';
import { serverError, ok } from '../helpers/http-helper';
import { IManageModeratorRequest } from '../../../../domain/usecases/subreddit/manage-moderator-request/manage-moderator-request-interface';

export class ManageModeratorRequestController {
  private readonly manageModeratorRequest: IManageModeratorRequest;

  constructor(manageModeratorRequest: IManageModeratorRequest) {
    this.manageModeratorRequest = manageModeratorRequest;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const manageModeratorRequestData = {
        idSolicitacaoModerador: httpRequest.data.idSolicitacaoModerador,
        aceito: httpRequest.data.aceito,
        motivoRecusa: httpRequest.data.motivoRecusa,
      };

      const manageModeratorRequestResponse: boolean =
        await this.manageModeratorRequest.execute(manageModeratorRequestData);

      return ok(manageModeratorRequestResponse);
    } catch (error) {
      return serverError(error);
    }
  }
}
