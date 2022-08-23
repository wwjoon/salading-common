import { Subjects } from '../subjects';

export interface ShipMethodExceptionUpdatedEvent {
  subject: Subjects.ShipMethodExceptionUpdated;
  data: {
    shipMethodId: string;
    shipMethodExceptionId: string;
    shippingDate?: string;
    wantDate?: string;
    isDay: boolean;
    original: {
      lastOrderTime?: string;
      useAlternative: boolean;
      isNotShipping: boolean;
      shippingDuration?: number;
      substitute?: { shippingDate: string; wantDate: string };
    };
    new: {
      lastOrderTime?: string;
      useAlternative: boolean;
      isNotShipping: boolean;
      shippingDuration?: number;
      substitute?: { shippingDate: string; wantDate: string };
    };
    adminId: string;
  };
}
