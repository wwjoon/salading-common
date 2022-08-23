import { Subjects } from '../subjects';

export interface StockRequestedEvent {
  subject: Subjects.StockRequested;
  data: {
    stockRequestId: string;
    itemId: string;
    warehouseId: string;
    userId?: string;
    orderId?: string;
    planId?: string;
    planDetailId?: string;
    orderDate?: string;
    shippingDate?: string;
    wantDate?: string;
    isShipped?: boolean;
    qtyRequested: number;
    qtyReserves: { stockReserveId: string; stockId: string; qty: number }[];
    qtyNotReserved: number;
  };
}
