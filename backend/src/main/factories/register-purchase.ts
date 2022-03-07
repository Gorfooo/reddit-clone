import { RegisterPurchaseController } from "../../adapters/presentation/controllers/purchase/register-purchase-controller";
// import { PostgresPurchaseRepository } from "../../external/repositories/postgres-purchase-repository";
import { RegisterPurchase } from "../../domain/usecases/purchase/register-purchase/register-purchase";

export const makeRegisterPurchaseController =
  (): RegisterPurchaseController => {
    // const postgresPurchaseRepository = new PostgresPurchaseRepository();

    // const registerPurchaseUseCase = new RegisterPurchase(
    //   postgresPurchaseRepository
    // );

    const registerPurchaseController = new RegisterPurchaseController(
      
    );


    return registerPurchaseController;
  };
