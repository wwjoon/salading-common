import { Subjects } from '../subjects';

export interface PaymentBillingCardRemovedEvent {
  subject: Subjects.PaymentBillingCardRemoved;
  data: {
    userId: string;
  };
}
