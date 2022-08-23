import { Subjects } from '../subjects';

export interface PaymentMileagePlanCreatedEvent {
  subject: Subjects.PaymentMileagePlanCreated;
  data: {
    mplanId: string;
    userId: string;
    planId: string;
    wantDate: string;
    mileageAmount: number;
  };
}
