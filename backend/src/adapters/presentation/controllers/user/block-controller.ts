import { HttpRequest, HttpResponse } from '../ports/http';
import { serverError, ok } from '../helpers/http-helper';
import { BlockResponse } from '../../../../domain/usecases/user/block/block-response';
import { IBlock } from '../../../../domain/usecases/user/block/block-interface';

export class BlockController {
  private readonly block: IBlock;

  constructor(block: IBlock) {
    this.block = block;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const userData = {
        idBloqueador: httpRequest.data.idBloqueador,
        idBloqueado: httpRequest.data.idBloqueado,
      };

      const blockResponse: BlockResponse = await this.block.execute(userData);

      return ok(blockResponse);
    } catch (error) {
      return serverError(error);
    }
  }
}
