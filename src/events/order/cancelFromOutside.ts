import { Subjects } from '../subjects';
import { OrderStatus, OrderType } from '../../enums/order';
import { OrderProductType, OrderCancelType } from '../../index';

export interface OrderFromOutsideCancelledEvent {
  subject: Subjects.OrderFromOutsideCancelled;
  data: {
    orderId: string;
    status: OrderStatus;
    orderType?: OrderType;
    orderTypeName?: string;
    adminId: string;
    complaintId?: string;
    orderDate?: string;
    shippingDate?: string;
    wantDate?: string;
    commerceId: string;
    warehouseId: string;
    shipMethodId?: string;
    productGroupsBefore?: OrderProductType[];
    productGroupsRemaining: OrderProductType[];
    productGroupsCancelled: OrderCancelType;
    cancelledAmount: number;
  };
}
