import { Address } from "@medusajs/medusa";
import {
  SinglePaymentProps,
  SinglePaymentResult,
  UsioPaymentProps,
} from "common/interfaces/usio-payment";
import fetch from "cross-fetch";

export class USIOPayment {
  private merchantKey: string;
  private apiUsername: string;
  private apiPassword: string;
  private merchantKeySandbox: string;
  private sandboxEnabled: boolean = true;
  private baseUrl = "https://checkout.usiopay.com/checkout/checkout.svc/json";

  constructor({ merchantKey, apiUsername, apiPassword }: UsioPaymentProps) {
    this.merchantKey = merchantKey;
    this.apiUsername = apiUsername;
    this.apiPassword = apiPassword;
    this.merchantKeySandbox = "AEAE82F9-5A34-47C3-A61E-1E8EE37BE3AD";
  }

  getUrl(endpoint = "") {
    return this.baseUrl + endpoint;
  }

  getMerchantKey() {
    return this.sandboxEnabled ? this.merchantKeySandbox : this.merchantKey;
  }

  getSinglePaymentClientUrl() {
    return this.getUrl("/GenerateToken");
  }

  async singlePayment(
    billingAddress: Address,
    amount: number,
    token: string
  ): Promise<SinglePaymentResult> {
    const result = await fetch(this.getUrl("/SinglePayment"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        MerchantKey: this.getMerchantKey(),
        Token: token,
        Amount: amount,
        FirstName: billingAddress.first_name,
        LastName: billingAddress.last_name,
        Address1: billingAddress.address_1,
        Address2: billingAddress.address_2,
        City: billingAddress.city,
        State: billingAddress.province,
        Zip: billingAddress.postal_code,
      } as unknown as BodyInit),
    });
    console.log({
      MerchantKey: this.getMerchantKey(),
      Token: token,
      Amount: amount,
      FirstName: billingAddress.first_name,
      LastName: billingAddress.last_name,
      Address1: billingAddress.address_1,
      Address2: billingAddress.address_2,
      City: billingAddress.city,
      State: billingAddress.province,
      Zip: billingAddress.postal_code,
    } as unknown as BodyInit);
    if (!result.ok)
      throw new Error(
        "Our payment system is not working correctly for the moment. Plase try again later."
      );

    const body: SinglePaymentResult = await result.json();

    if (!body)
      throw new Error(
        "We are having issues with our payment system. Please try again later."
      );

    return body;
  }
}
