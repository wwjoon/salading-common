import { Subjects } from '../subjects';

export interface FeedbackCancelRequestAcceptedEvent {
  subject: Subjects.FeedbackCancelRequestAccepted;
  data: {
    id: string;
    isAccept: boolean;
    productId: string;
    qty: number;
    orderId: string;
    adminId: string;
  };
}
