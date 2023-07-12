import {
  AbstractPaymentProcessor,
  MedusaContainer,
  PaymentProcessorContext,
  PaymentProcessorError,
  PaymentProcessorSessionResponse,
  PaymentSessionStatus,
  CartService,
} from "@medusajs/medusa";
import { UsioPaymentProps } from "../common/interfaces/usio-payment";
import { USIOPayment } from "../lib/usio-payment";
import { humanizeAmount } from "../common/lib/amount";

class USIOProviderService extends AbstractPaymentProcessor {
  protected readonly usio: USIOPayment;
  static identifier = "usio";

  private cartService: CartService;

  constructor(container: any, config: UsioPaymentProps) {
    super(container, config as any);
    this.usio = new USIOPayment({
      merchantKey: process.env.USIO_MERCHANT_KEY,
      apiUsername: process.env.USIO_API_USER,
      apiPassword: process.env.USIO_API_PASSWORD,
    });

    this.cartService = container.cartService;
  }

  async capturePayment(
    paymentSessionData: Record<string, unknown>
  ): Promise<Record<string, unknown> | PaymentProcessorError> {
    return { status: "captured" };
  }

  async authorizePayment(
    paymentSessionData: Record<string, unknown>,
    context: Record<string, unknown>
  ): Promise<
    | PaymentProcessorError
    | { status: PaymentSessionStatus; data: Record<string, unknown> }
  > {
    const cartId: string = (context.cart_id as string) || "";
    const cart = await this.cartService.retrieveWithTotals(cartId, {
      relations: ["billing_address"],
    });
    const token = cart.billing_address?.metadata?.usioToken;

    if (!token) return { error: "Payment token not provided." };

    const payment = await this.usio
      .singlePayment(
        cart.billing_address,
        humanizeAmount(cart.total),
        token as string
      )
      .catch((err) => err);

    if (payment instanceof Error) return { error: payment.message };
    if (payment.Status === "success")
      return {
        status: PaymentSessionStatus.AUTHORIZED,
        data: paymentSessionData,
      };

    return {
      error: payment.Message,
    };
  }

  async cancelPayment(
    paymentSessionData: Record<string, unknown>
  ): Promise<Record<string, unknown> | PaymentProcessorError> {
    return {};
  }

  async initiatePayment(
    context: PaymentProcessorContext
  ): Promise<PaymentProcessorError | PaymentProcessorSessionResponse> {
    return {
      session_data: {
        url: this.usio.getSinglePaymentClientUrl(),
        merchantKey: this.usio.getMerchantKey(),
      },
    };
  }

  async deletePayment(
    paymentSessionData: Record<string, unknown>
  ): Promise<Record<string, unknown> | PaymentProcessorError> {
    return {};
  }

  async getPaymentStatus(
    paymentSessionData: Record<string, unknown>
  ): Promise<PaymentSessionStatus> {
    return PaymentSessionStatus.AUTHORIZED;
  }

  async refundPayment(
    paymentSessionData: Record<string, unknown>,
    refundAmount: number
  ): Promise<Record<string, unknown> | PaymentProcessorError> {
    throw new Error("Method not implemented");
    return {};
  }

  async retrievePayment(
    paymentSessionData: Record<string, unknown>
  ): Promise<Record<string, unknown> | PaymentProcessorError> {
    return {};
  }

  async updatePayment(
    context: PaymentProcessorContext
  ): Promise<void | PaymentProcessorError | PaymentProcessorSessionResponse> {
    return { session_data: context.paymentSessionData };
  }

  async updatePaymentData(
    sessionId: string,
    data: Record<string, unknown>
  ): Promise<
    PaymentProcessorError | PaymentProcessorSessionResponse["session_data"]
  > {
    return data;
  }
}

export default USIOProviderService;
