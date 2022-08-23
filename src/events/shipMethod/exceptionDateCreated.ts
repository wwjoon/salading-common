import { Subjects } from '../subjects';

export interface ShipMethodDateExceptionCreatedEvent {
  subject: Subjects.ShipMethodDateExceptionCreated;
  data: {
    shipMethodId: string;
    shipMethodExceptionId: string;
    shippingDate: string;
    wantDate: string;
    lastOrderTime: string;
    useAlternative: boolean;
    isNotShipping: boolean;
    shippingDuration: number;
    substitute?: { shippingDate: string; wantDate: string };
    adminId: string;
  };
}
