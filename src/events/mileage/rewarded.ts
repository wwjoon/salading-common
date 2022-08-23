import { Subjects } from '../subjects';

export interface MileageRewardedEvent {
  subject: Subjects.MileageRewarded;
  data: {
    mileageRewardId: string;
    commerceId?: string;
    userId: string;
    reason: string;
    note?: string;
    rewardedAmount: number;
    reservedAmount: number;
    spentAmount: number;
    balance: number;
    rewardedAt: string;
    expirationDate?: string;
    spends: {
      spendId: string;
      reason: string;
      status: string;
      initialAmount?: number;
      reservedAmount?: number;
      spentAmount?: number;
      cancelledAmount: number;
      netAmount: number;
      spentAt?: string;
      reservedAt?: string;
      cancels: {
        spendCancelId: string;
        reason: string;
        amount: number;
        date: string;
      }[];
    }[];
    orderId?: string;
    paymentId?: string;
    paymentIdMerchant?: string;
    productId?: string;
    feedbackId?: string;
    feedbackType?: string;
    adminId?: string;
    createdAt: string;
    updatedAt: string;
  };
}
