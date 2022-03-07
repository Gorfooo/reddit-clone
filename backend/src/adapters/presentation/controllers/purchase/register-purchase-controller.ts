import { HttpRequest, HttpResponse } from '../ports/http';
import { badRequest, serverError, ok } from '../helpers/http-helper';
// import { RegisterPurchaseResponse } from '../../../../domain/usecases/purchase/register-purchase/register-purchase-response';
// import { IRegisterPurchase } from '../../../../domain/usecases/purchase/register-purchase/register-purchase-interface';

export class RegisterPurchaseController {
  // private readonly registerPurchase: IRegisterPurchase;

  // constructor(registerPurchase: IRegisterPurchase) {
  //   this.registerPurchase = registerPurchase;
  // }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const purchaseData = {
        taxInformation: {
          ...httpRequest.body.data.taxInformation,
          nfe: {
            nfeNumber: httpRequest.body.data.taxInformation.nfe.nfeNumber,
            nfeKey: httpRequest.body.data.taxInformation.nfe?.nfeKey,
            nfeModel: httpRequest.body.data.taxInformation.nfe.nfeModel,
            nfeSerie: httpRequest.body.data.taxInformation.nfe.nfeSerie,
          },
        },
      };
      // const registerPurchaseResponse: RegisterPurchaseResponse =
      //   await this.registerPurchase.execute(purchaseData);
      // if (registerPurchaseResponse.isLeft()) {
      //   return badRequest(registerPurchaseResponse.value);
      // }

      // return ok(registerPurchaseResponse.value);
    } catch (error) {
      console.log(error);
      return serverError('internal');
    }
  }
}