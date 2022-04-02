import { HttpRequest, HttpResponse } from '../ports/http';
import { serverError, ok } from '../helpers/http-helper';
import { UnblockResponse } from '../../../../domain/usecases/user/unblock/unblock-response';
import { IUnblock } from '../../../../domain/usecases/user/unblock/unblock-interface';

export class UnblockController {
  private readonly unblock: IUnblock;

  constructor(unblock: IUnblock) {
    this.unblock = unblock;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const userData = {
        idBloqueador: httpRequest.data.idBloqueador,
        idBloqueado: httpRequest.data.idBloqueado,
      };

      const unblockResponse: UnblockResponse = await this.unblock.execute(
        userData,
      );

      return ok(unblockResponse);
    } catch (error) {
      return serverError(error);
    }
  }
}
