import { Subjects } from '../subjects';

export interface PaymentMileagePlanRemovedEvent {
  subject: Subjects.PaymentMileagePlanRemoved;
  data: {
    mplanId: string;
    userId: string;
  };
}
