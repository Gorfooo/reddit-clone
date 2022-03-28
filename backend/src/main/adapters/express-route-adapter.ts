import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { LoginUserController } from '../../adapters/presentation/controllers/auth/login-user-controller';
import { RegisterUserController } from '../../adapters/presentation/controllers/auth/register-user-controller';
import { RegisterPostController } from '../../adapters/presentation/controllers/post/register-post-controller';
import { UpdateUserController } from '../../adapters/presentation/controllers/auth/update-user-controller';
import { HttpRequest } from '../../adapters/presentation/controllers/ports/http';

export const adaptRoute = (
  controller:
    | RegisterUserController
    | UpdateUserController
    | LoginUserController
    | RegisterPostController,
) => {
  return async (req: Request, res: Response): Promise<Response> => {
    const httpRequest: HttpRequest = {
      data: req.body,
    };

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // show message errors
      // const [objError] = errors.array({ onlyFirstError: true });
      // return res.status(400).json({ errors: `${objError.msg}` });

      return res.status(400).json({
        errors: 'Ops, ocorreu um erro inesperado. Verifique os dados enviados!',
      });
    }

    const httpResponse = await controller.handle(httpRequest);
    return res.status(httpResponse.statusCode).json(httpResponse);
  };
};
