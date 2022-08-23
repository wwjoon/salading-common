import { Subjects } from '../subjects';

export interface StockRequestedPlanDetailsExceptionRemovedEvent {
  subject: Subjects.StockRequestedPlanDetailsExceptionRemoved;
  data: {
    planDetailIds: string[];
    planId: string;
    warehouseId: string;
    userId?: string;
    exceptionShippingDate: string;
    exceptionWantDate: string;
    properties?: {
      requestsStockManually?: boolean;
      requiresStockBeforeOrder?: boolean;
      allowsOrderWithLesserQty?: boolean;
    };
    stateId?: string;
    stateUpdatedAt?: string;
    stockRequests: {
      stockRequestId: string;
      productId: string;
      productQty: string;
      itemId: string;
      planId: string;
      planDetailId: string;
      qtyRequested: number;
      qtyReserves: { stockReserveId: string; stockId: string; qty: number }[];
      qtyNotReserved: number;
    }[];
  };
}
