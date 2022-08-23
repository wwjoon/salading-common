import { Subjects } from '../subjects';
import { ReceiverType } from '../../index'

export interface OrderUpdatedReceiverEvent {
  subject: Subjects.OrderUpdatedReceiver;
  data: {
    orderId: string;
    planId?: string;
    shipMethodId: string;
    planDetailIds: string[];
    userId: string;
    adminId?: string;
    receiver: ReceiverType;
  };
}
