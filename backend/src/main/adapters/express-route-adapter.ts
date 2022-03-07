import { RegisterPurchaseController } from '../../adapters/presentation/controllers/purchase/register-purchase-controller';
import { Request, Response } from 'express';
import { HttpRequest } from '../../adapters/presentation/controllers/ports/http';
import { validationResult } from 'express-validator';
import { axiosConfig } from '../config/axios-config';

export const adaptRoute = (
  controller:
    | RegisterPurchaseController
) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
    };

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const [objError] = errors.array({ onlyFirstError: true });
      return res.status(400).json({ errors: `${objError.msg}` });
    }

    // const compufacilHeader = req.header('Authorization-Compufacil');
    // axiosConfig(compufacilHeader);
    // httpRequest.body.metadata.authorization = compufacilHeader;

    const httpResponse = await controller.handle(httpRequest);
    res.status(httpResponse.statusCode).json(httpResponse.body);
  };
};