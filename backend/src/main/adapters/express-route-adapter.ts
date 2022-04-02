import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { LoginUserController } from '../../adapters/presentation/controllers/user/login-user-controller';
import { RegisterUserController } from '../../adapters/presentation/controllers/user/register-user-controller';
import { RegisterPostController } from '../../adapters/presentation/controllers/post/register-post-controller';
import { BlockController } from '../../adapters/presentation/controllers/user/block-controller';
import { UnblockController } from '../../adapters/presentation/controllers/user/unblock-controller';
import { UpdateUserController } from '../../adapters/presentation/controllers/user/update-user-controller';
import { UpdatePostController } from '../../adapters/presentation/controllers/post/update-post-controller';
import { DeletePostController } from '../../adapters/presentation/controllers/post/delete-post-controller';
import { RegisterNewFollowerController } from '../../adapters/presentation/controllers/user/register-new-follower-controller';
import { DeleteFollowerController } from '../../adapters/presentation/controllers/user/delete-follower-controller';
import { SendMessageController } from '../../adapters/presentation/controllers/user/send-message-controller';
import { ReadMessageController } from '../../adapters/presentation/controllers/user/read-message-controller';
import { ReportController } from '../../adapters/presentation/controllers/user/report-controller';
import { HttpRequest } from '../../adapters/presentation/controllers/ports/http';

export const adaptRoute = (
  controller:
    | RegisterUserController
    | UpdateUserController
    | LoginUserController
    | RegisterPostController
    | UpdatePostController
    | DeletePostController
    | RegisterNewFollowerController
    | DeleteFollowerController
    | BlockController
    | UnblockController
    | SendMessageController
    | ReadMessageController
    | ReportController,
) => {
  return async (req: Request, res: Response): Promise<Response> => {
    const httpRequest: HttpRequest = {
      data: req.body,
    };

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // show message errors
      // const [objError] = errors.array({ onlyFirstError: true });
      // return res.status(400).json({ errors: `${objError.param}` });

      return res.status(400).json({
        errors: 'Ops, ocorreu um erro inesperado. Verifique os dados enviados!',
      });
    }

    const httpResponse = await controller.handle(httpRequest);
    return res.status(httpResponse.statusCode).json(httpResponse);
  };
};
