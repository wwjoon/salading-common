import { Subjects } from '../subjects';

export interface StockReservedEvent {
  subject: Subjects.StockReserved;
  data: {
    itemId: string;
    warehouseId: string;
    planId?: string;
    planDetailId?: string;
    orderId?: string;
    orderDate?: string;
    shippingDate?: string;
    wantDate?: string;
    qtyRequested: number;
    qtyReserved: {
      stockId: string;
      qty: number;
    }[];
    qtyNotReserved: number;
    userId?: string;
    adminId?: string;
  };
}
