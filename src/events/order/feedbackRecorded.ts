import { Subjects } from '../subjects';

export interface OrderFeedbackRecordedEvent {
  subject: Subjects.OrderFeedbackRecorded;
  data: {
    orderId: string;
    productId: string;
    newFeedbackId: string;
    isReview: boolean;
    userId: string;
    adminId?: string;
  };
}
