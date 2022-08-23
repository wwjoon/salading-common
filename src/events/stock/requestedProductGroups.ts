import { Subjects } from '../subjects';

export interface StockRequestedProductGroupsEvent {
  subject: Subjects.StockRequestedProductGroups;
  data: {
    productGroups: {
      productId: string;
      qty: number;
    }[]
    warehouseId: string;
    userId?: string;
    orderId?: string;
    planId?: string;
    planDetailId?: string;
    orderDate?: string;
    shippingDate?: string;
    wantDate?: string;
    mileageAmount?: number;
    isShipped?: boolean;
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
      qtyRequested: number;
      qtyReserves: { stockReserveId: string; stockId: string; qty: number }[];
      qtyNotReserved: number;
    }[];
    purpose?: string;
  };
}
