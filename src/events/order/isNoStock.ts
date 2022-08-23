import { Subjects } from '../subjects';

export interface OrderIsNoStockEvent {
  subject: Subjects.OrderIsNoStock;
  data: {
    orderId: string;
    orderDate?: string;
    shippingDate?: string;
    wantDate?: string;
    commerceId: string;
    warehouseId: string;
    shippingMethodId?: string;
    planId?: string;
    userId?: string;
    adminId?: string;
  };
}
