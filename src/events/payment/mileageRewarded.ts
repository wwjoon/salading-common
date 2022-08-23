import { Subjects } from '../subjects';

export interface PaymentMileageRewardedEvent {
  subject: Subjects.PaymentMileageRewarded;
  data: {
    mchangeId: string;
    userId: string;
    changeAmount: number;
    paymentId?: string;
    orderId?: string;
    productId?: string;
    cancelId?: string;
    feedbackId?: string;
    feedbackType?: string;
    adminId?: string;
  };
}
