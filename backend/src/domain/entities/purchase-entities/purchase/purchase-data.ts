import { NfeData } from '../nfe-purchase/nfe-data';

export type PurchaseData = {
  id: number;
  taxInformation: TaxInformationData;
  observation?: string;
  clientId: number;
  userId: number;
};

export type TaxInformationData = {
  nfe: NfeData;
  issueDate: Date;
  entryDate: Date;
};

