import { Subjects } from '../subjects';

export interface OrderPaymentFailedEvent {
  subject: Subjects.OrderPaymentFailed;
  data: {
    orderId: string;
    failedReason: string;
    planId: string;
    planDetailIds: string[];
    commerceId: string;
    warehouseId: string;
    shipMethodId?: string;
    orderDate?: string;
    shippingDate?: string;
    wantDate?: string;
    userId: string;
  };
}
