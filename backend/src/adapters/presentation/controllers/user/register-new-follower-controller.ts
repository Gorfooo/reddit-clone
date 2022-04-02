import { HttpRequest, HttpResponse } from '../ports/http';
import { serverError, ok } from '../helpers/http-helper';
import { RegisterNewFollowerResponse } from '../../../../domain/usecases/user/register-new-follower/register-new-follower-response';
import { IRegisterNewFollower } from '../../../../domain/usecases/user/register-new-follower/register-new-follower-interface';

export class RegisterNewFollowerController {
  private readonly registerNewFollower: IRegisterNewFollower;

  constructor(registerNewFollower: IRegisterNewFollower) {
    this.registerNewFollower = registerNewFollower;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const userData = {
        idSeguidor: httpRequest.data.idSeguidor,
        idSeguido: httpRequest.data.idSeguido,
      };

      const registerNewFollowerResponse: RegisterNewFollowerResponse =
        await this.registerNewFollower.execute(userData);

      return ok(registerNewFollowerResponse);
    } catch (error) {
      return serverError(error);
    }
  }
}
