import { HttpRequest, HttpResponse } from '../ports/http';
import { badRequest, serverError, ok } from '../helpers/http-helper';
import { LoginUserResponse } from '../../../../domain/usecases/user/login-user/login-user-response';
import { ILoginUser } from '../../../../domain/usecases/user/login-user/login-user-interface';

export class LoginUserController {
  private readonly loginUser: ILoginUser;

  constructor(loginUser: ILoginUser) {
    this.loginUser = loginUser;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const userData = {
        email: httpRequest.data.email,
        senha: httpRequest.data.senha,
      };

      const loginUserResponse: LoginUserResponse = await this.loginUser.execute(
        userData,
      );

      if (loginUserResponse.isLeft()) {
        return badRequest(loginUserResponse.value);
      }

      return ok(loginUserResponse.value);
    } catch (error) {
      return serverError(error);
    }
  }
}
