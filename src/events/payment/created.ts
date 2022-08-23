import { Subjects } from '../subjects';

export interface PaymentCreated {
  subject: Subjects.PaymentCreated;
  data: {
    paymentId: string;
    orderId?: string;
    admissionTicketId?: string;
    commerceId?: string;
    userId?: string;
    validated?: boolean;
    failedReason?: string;
    name: string;
    shippingCostSavedMchangeId?: string;
    mchangeId?: string;
    system: string;
    isMobile?: boolean;
    subscribed: boolean;
    status: string;
    shippingCost: {
      rawAmount: number;
      discountAmount: number;
      soldAmount: number;
      costAmount: number;
      mileageAmount: number;
      expenditureAmount?: number;
    };
    totalAmount: AmountType;
    costAmount: AmountType;
    totalTaxFree: AmountType;
    costTaxFree: AmountType;
    mileageAmount: AmountType;
    paidAt: string;
    createdAt: string;
    updatedAt: string;
  };
}

interface AmountType {
  paid: number;
  cancelled: number;
  net: number;
}
