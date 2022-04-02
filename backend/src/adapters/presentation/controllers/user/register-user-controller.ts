import { Md5 } from 'md5-typescript';
import { HttpRequest, HttpResponse } from '../ports/http';
import { badRequest, serverError, ok } from '../helpers/http-helper';
import { RegisterUserResponse } from '../../../../domain/usecases/user/register-user/register-user-response';
import { IRegisterUser } from '../../../../domain/usecases/user/register-user/register-user-interface';

export class RegisterUserController {
  private readonly registerUser: IRegisterUser;

  constructor(registerUser: IRegisterUser) {
    this.registerUser = registerUser;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const userData = {
        nome: httpRequest.data.nome,
        email: httpRequest.data.email,
        senha: Md5.init(httpRequest.data.senha),
        nascimento: httpRequest.data.nascimento,
      };

      const registerUserResponse: RegisterUserResponse =
        await this.registerUser.execute(userData);

      if (registerUserResponse.isLeft()) {
        return badRequest(registerUserResponse.value);
      }

      return ok(registerUserResponse.value);
    } catch (error) {
      return serverError(error);
    }
  }
}
