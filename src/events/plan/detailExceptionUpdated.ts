import { Subjects } from '../subjects';
import { PlanType } from '../../index';

export interface PlanDetailExceptionUpdatedEvent {
  subject: Subjects.PlanDetailExceptionUpdated;
  data: {
    id: string;
    planDetailId: string;
    planDetailExceptionId: string;
    shipMethodExceptionId?: string;
    wantDate: string;
    shippingDate: string;
    oldWantDate?: string;
    oldShippingDate?: string;
    newWantDate?: string;
    newShippingDate?: string;
    original: {
      substitute?: { shippingDate: string; wantDate: string };
    };
    new: {
      substitute?: { shippingDate: string; wantDate: string };
    };
    planDetail: {
      planType: PlanType;
      commerceId: string;
      warehouseId: string;
      shipMethodId: string;
      isWantOddWeek: boolean;
      isShippingOddWeek: boolean;
      shippingDay: number;
      shippingDate: string;
      wantDay: number;
      wantDate: string;
      productId: string;
      qty: number;
      properties: {
        requestsStockManually: boolean;
        requiresStockBeforeOrder: boolean;
        allowsOrderWithLesserQty: boolean;
      };
      items: {
        id: string;
        name: string;
        count: number;
      }[];
    };
    userId?: string;
    adminId?: string;
  };
}
