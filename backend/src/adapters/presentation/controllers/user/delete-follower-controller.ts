import { HttpRequest, HttpResponse } from '../ports/http';
import { serverError, ok } from '../helpers/http-helper';
import { DeleteFollowerResponse } from '../../../../domain/usecases/user/delete-follower/delete-follower-response';
import { IDeleteFollower } from '../../../../domain/usecases/user/delete-follower/delete-follower-interface';

export class DeleteFollowerController {
  private readonly deleteFollower: IDeleteFollower;

  constructor(registerNewFollower: IDeleteFollower) {
    this.deleteFollower = registerNewFollower;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const userData = {
        idSeguidor: httpRequest.data.idSeguidor,
        idSeguido: httpRequest.data.idSeguido,
      };

      const deleteFollowerResponse: DeleteFollowerResponse =
        await this.deleteFollower.execute(userData);

      return ok(deleteFollowerResponse);
    } catch (error) {
      return serverError(error);
    }
  }
}
