import { Subjects } from '../subjects';

export interface ShipMethodExceptionRemovedEvent {
  subject: Subjects.ShipMethodExceptionRemoved;
  data: {
    shipMethodId: string;
    shipMethodExceptionId: string;
    isDay: boolean;
    original: {
      lastOrderTime?: string;
      useAlternative: boolean;
      isNotShipping: boolean;
      shippingDuration?: number;
      substitute?: { shippingDate: string; wantDate: string };
    };
    adminId: string;
  };
}
