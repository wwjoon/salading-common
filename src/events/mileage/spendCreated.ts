import { Subjects } from '../subjects';

export interface MileageSpendCreated {
  subject: Subjects.MileageSpendCreated;
  data: {
    mileageSpendId: string;
    commerceId?: string;
    userId: string;
    reason: string;
    note: string;
    status: string;
    initialAmount?: number;
    reservedAmount?: number;
    spentAmount?: number;
    cancelledAmount: number;
    netAmount: number;
    rewardIds: string[];
    planId?: string;
    planDetailIds?: string[];
    orderDate?: string;
    shippingDate?: string;
    wantDate?: string;
    orderId?: string;
    paymentId?: string;
    paymentIdMerchant?: string;
    reservedAt?: string;
    spentAt?: string;
    cancelledAt: string;
    cancels: SpendCancel[];
    createdAt: string;
    updatedAt: string;
  }
}

interface SpendCancel {
  id: string;
  reason: string;
  amount: number;
  date: string;
  orderId?: string;
  paymentId?: string;
  paymentIdMerchant?: string;
  paymentCancelId?: string;
}
