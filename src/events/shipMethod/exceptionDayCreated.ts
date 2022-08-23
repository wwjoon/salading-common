import { Subjects } from '../subjects';

export interface ShipMethodDayExceptionCreatedEvent {
  subject: Subjects.ShipMethodDayExceptionCreated;
  data: {
    shipMethodId: string;
    shipMethodExceptionId: string;
    shippingDay: number;
    wantDay: number;
    lastOrderTime: string;
    useAlternative: boolean;
    isNotShipping: boolean;
    shippingDuration: number;
    adminId: string;
  };
}
