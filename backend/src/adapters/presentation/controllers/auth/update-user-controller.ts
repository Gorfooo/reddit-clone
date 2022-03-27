import { HttpRequest, HttpResponse } from '../ports/http';
import { badRequest, serverError, ok } from '../helpers/http-helper';
import { UpdateUserResponse } from '../../../../domain/usecases/user/update-user/update-user-response';
import { IUpdateUser } from '../../../../domain/usecases/user/update-user/update-user-interface';

export class UpdateUserController {
  private readonly updateUser: IUpdateUser;

  constructor(updateUser: IUpdateUser) {
    this.updateUser = updateUser;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const userData = {
        idUsuario: httpRequest.data.idUsuario,
        email: httpRequest.data.email,
        senha: httpRequest.data.senha,
        nome: httpRequest.data.nome,
        sobre: httpRequest.data.sobre,
        avatar: httpRequest.data.avatar,
        banner: httpRequest.data.banner,
      };

      const updateUserResponse: UpdateUserResponse =
        await this.updateUser.execute(userData);

      if (updateUserResponse.isLeft()) {
        return badRequest(updateUserResponse.value);
      }

      return ok(updateUserResponse.value);
    } catch (error) {
      return serverError(error);
    }
  }
}
