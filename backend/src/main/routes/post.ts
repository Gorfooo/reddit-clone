// import { Router, Request, Response } from "express";
// // import { makeRegisterPurchaseController } from "../factories/register-purchase";
// // import { adaptRoute } from "../adapters/express-route-adapter";
// // import { validateRegisterFields } from "./rules/register-purchase";

// export default (router: Router): void => {
//   // router.get(
//   //   "/register-purchase",
//   //   // validateRegisterFields(),
//   //   // adaptRoute(makeRegisterPurchaseController())
//   // );
//   router.get('/register-purchase', (request: Request, response: Response): Response => {
//     return response.json("OK");
//   });
// };

import { Router, Request, Response } from 'express';

const postRoutes = Router();

postRoutes.get('/post/register', (request : Request, response: Response): Response => {
  return response.json("OK");
});

export default postRoutes;