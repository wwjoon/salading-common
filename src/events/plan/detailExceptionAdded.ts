import { Subjects } from '../subjects';
export interface PlanDetailExceptionAddedEvent {
  subject: Subjects.PlanDetailExceptionAdded;
  data: {
    id: string;
    planDetailId: string;
    commerceId: string;
    warehouseId: string;
    shipMethodId: string;
    oldWantDate?: string;
    oldShippingDate?: string;
    newWantDate?: string;
    newShippingDate?: string;
    exception: {
      planDetailExceptionId: string;
      shipMethodExceptionId?: string;
      wantDate: string;
      shippingDate: string;
      substitute?: { shippingDate: string; wantDate: string };
    };
    userId?: string;
    adminId?: string;
  };
}
