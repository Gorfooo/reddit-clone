import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { RegisterUserController } from '../../adapters/presentation/controllers/auth/register-user-controller';
import { HttpRequest } from '../../adapters/presentation/controllers/ports/http';

export const adaptRoute = (controller: RegisterUserController) => {
  return async (req: Request, res: Response): Promise<Response> => {
    const httpRequest: HttpRequest = {
      data: req.body,
    };

    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json({
        errors: 'Ops, ocorreu um erro inesperado. Verifique os dados enviados!',
      });

    const httpResponse = await controller.handle(httpRequest);
    return res.status(httpResponse.statusCode).json(httpResponse);
  };
};
