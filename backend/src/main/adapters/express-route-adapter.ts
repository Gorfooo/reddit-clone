import { RegisterUserController } from '../../adapters/presentation/controllers/auth/register-user';
import { Request, Response } from 'express';
import { HttpRequest } from '../../adapters/presentation/controllers/ports/http';
import { validationResult } from 'express-validator';

export const adaptRoute = (
  controller:
    | RegisterUserController
) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
    };

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: 'Ocorreu um erro inesperado. Verifique!' });
    }

    const httpResponse = await controller.handle(httpRequest);
    res.status(httpResponse.statusCode).json(httpResponse.body);
  };
};