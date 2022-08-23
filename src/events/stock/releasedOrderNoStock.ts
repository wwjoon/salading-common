import { Subjects } from '../subjects';

export interface StockReleasedOrderIsNoStockEvent {
  subject: Subjects.StockReleasedOrderNoStock;
  data: {
    orderId: string;
    userId?: string;
    adminId?: string;
  };
}
