import { Subjects } from '../subjects';

export interface StockOrderCancelledEvent {
  subject: Subjects.StockOrderCancel;
  data: {
    cancelId: string;
    orderId: string;
    commerceId: string;
    warehouseId: string;
    orderDate?: string;
    shippingDate?: string;
    wantDate?: string;
    items: {
      itemId: string;
      qtyRequested: number;
      qtyReserved: {
        stockId: string;
        qty: number;
      }[];
      qtyNotReserved: number;
      qtyCancelled: number;
    }[];
    userId?: string;
    adminId?: string;
  };
}
