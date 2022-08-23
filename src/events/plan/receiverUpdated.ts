import { Subjects } from '../subjects';
import { ReceiverType } from '../../index'

export interface PlanReceiverUpdatedEvent {
  subject: Subjects.PlanReceiverUpdated;
  data: {
    id: string;
    shipMethodId: string;
    receiver: ReceiverType;
    userId: string;
    adminId?: string;
  };
}
