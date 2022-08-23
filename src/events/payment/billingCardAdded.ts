import { Subjects } from '../subjects';

export interface PaymentBillingCardAdded {
  subject: Subjects.PaymentBillingCardAdded;
  data: {
    userId: string;
    cardCode: string;
    cardNumberHidden: string;
  };
}
