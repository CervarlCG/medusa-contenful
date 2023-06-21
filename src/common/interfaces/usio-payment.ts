export interface SinglePaymentProps {
  MerchantKey: string;
  Token: string;
  Amount: string;
  FirstName: string;
  LastName: string;
  Address1: string;
  Address2: string;
  City: string;
  State: string;
  Zip: string;
  AdditionalSearch?: string;
  AccountCode1?: string;
  AccountCode2?: string;
  AccountCode3?: string;
  VerStr?: "N";
}

export interface SinglePaymentResult {
  Status: "success" | "failure";
  Message: string;
  Confirmation: string;
}

export interface UsioPaymentProps {
  merchantKey: string;
  apiUsername: string;
  apiPassword: string;
}
