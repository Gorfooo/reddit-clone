import { HttpRequest, HttpResponse } from '../ports/http';
import { serverError, ok } from '../helpers/http-helper';
import { IPostAnswear } from '../../../../domain/usecases/post/post-answear/post-answear-interface';

export class PostAnswearController {
  private readonly postAnswear: IPostAnswear;

  constructor(postAnswear: IPostAnswear) {
    this.postAnswear = postAnswear;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const postAnswearData = {
        idComentario: httpRequest.data.idComentario,
        idUsuario: httpRequest.data.idUsuario,
        resposta: httpRequest.data.resposta,
      };

      const postAnswearResponse: boolean = await this.postAnswear.execute(
        postAnswearData,
      );

      return ok(postAnswearResponse);
    } catch (error) {
      return serverError(error);
    }
  }
}
