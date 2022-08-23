import { Subjects } from '../subjects';
import { PlanType } from '../../enums/plan';

export interface PlanDetailAddedEvent {
  subject: Subjects.PlanDetailAdded;
  data: {
    id: string;
    planDetailId: string;
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
    isPremium?: boolean;
    isWaiting?: boolean;
    properties: {
      requestsStockManually: boolean;
      requiresStockBeforeOrder: boolean;
      allowsOrderWithLesserQty: boolean;
    };
    userId: string;
    adminId?: string;
    items: {
      id: string;
      name: string;
      count: number;
    }[];
    exceptions: {
      planDetailExceptionId: string;
      shipMethodExceptionId?: string;
      wantDate: string;
      shippingDate: string;
      substitute?: { shippingDate: string; wantDate: string };
      createdAt?: string;
      updatedAt?: string;
    }[];
    stateId?: string;
    stateUpdatedAt?: string;
    createdAt: string;
  };
}
