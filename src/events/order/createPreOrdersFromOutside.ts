import { Subjects } from '../subjects';
import { SenderType, ReceiverType, OrderStatus, OrderType } from '../../index';

export interface OrdersPreFromOutsideCreatedEvent {
  subject: Subjects.OrdersPreFromOutsideCreated;
  data: {
    id: string;
    preOrders: PreOrder[];
    adminId: string;
    commerceId: string;
  };
}

export interface PreOrder {
  externalOrderId: string;
  orderId?: string;
  wantDate?: Date;
  shippingDate?: Date;
  status?: OrderStatus;
  orderType?: OrderType;
  orderTypeName?: string;
  productGroups: { productId: string; qty: number }[];
  sender: SenderType;
  receiver: ReceiverType;
}
