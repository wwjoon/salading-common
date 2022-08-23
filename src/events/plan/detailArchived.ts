import { Subjects } from '../subjects';
import { PlanType } from '../../enums/plan';

export interface PlanDetailArchivedEvent {
  subject: Subjects.PlanDetailArchived;
  data: {
    id: string;
    planDetailId: string;
    planType: PlanType;
    archivedAt: string;
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
  };
}
