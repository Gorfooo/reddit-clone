import { HttpRequest, HttpResponse } from '../ports/http';
import { badRequest, serverError, ok } from '../helpers/http-helper';
import { RegisterPurchaseResponse } from '../../../../domain/usecases/purchase/register-purchase/register-purchase-response';
import { IRegisterPurchase } from '../../../../domain/usecases/purchase/register-purchase/register-purchase-interface';

export class RegisterUserController {
  private readonly registerPurchase: IRegisterPurchase;

  constructor(registerPurchase: IRegisterPurchase) {
    this.registerPurchase = registerPurchase;
  }

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
        transport: {
          shippingCompany: {
            id: httpRequest.body.data.transport?.shippingCompany?.id,
          },
          freight: httpRequest.body.data.transport?.freight,
          vehicle: {
            identification:
              httpRequest.body.data.transport?.vehicle?.identification,
            uf: httpRequest.body.data.transport?.vehicle?.uf,
          },
          volume: {
            amountVolume: httpRequest.body.data.transport?.volume?.amountVolume,
            type: httpRequest.body.data.transport?.volume?.type,
            brand: httpRequest.body.data.transport?.volume?.brand,
            numeration: httpRequest.body.data.transport?.volume?.numeration,
            netWeight: httpRequest.body.data.transport?.volume?.netWeight,
            grossWeight: httpRequest.body.data.transport?.volume?.grossWeight,
          },
        },
        payments: httpRequest.body.data.payments,
        supplier: { id: httpRequest.body.data.supplier.id },
        products: httpRequest.body.data.products,
        clientId: httpRequest.body.metadata.clientId,
        userId: httpRequest.body.metadata.userId,
      };
      const registerPurchaseResponse: RegisterPurchaseResponse =
        await this.registerPurchase.execute(purchaseData);
      if (registerPurchaseResponse.isLeft()) {
        return badRequest(registerPurchaseResponse.value);
      }

      return ok(registerPurchaseResponse.value);
    } catch (error) {
      console.log(error);
      return serverError('internal');
    }
  }
}
