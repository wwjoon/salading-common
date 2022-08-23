import { Subjects } from '../subjects';
import { PlanType } from '../../enums/plan';

export interface PlanDetailsAddedEvent {
  subject: Subjects.PlanDetailsAdded;
  data: {
    id: string;
    planDetails: {
      planDetailId: string;
      productId: string;
      qty: number;
      isPremium?: boolean;
      isWaiting?: boolean;
      items: {
        id: string;
        name: string;
        count: number;
      }[];
    }[];
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
    couponRedemptions?: {
      couponId: string;
      productId: string;
      productOptionGroups?: {
        productOptionId: string;
        qty: number;
      }[];
      qty: number;
    }[];
    mileageAmount?: number;
    properties: {
      requestsStockManually: boolean;
      requiresStockBeforeOrder: boolean;
      allowsOrderWithLesserQty: boolean;
    };
    userId: string;
    adminId?: string;
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
