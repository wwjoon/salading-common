import { Subjects } from '../subjects';
import { OrderStatus, OrderType } from '../../index';
import { OrderProductType, SenderType, ReceiverType } from '../../index';

export interface OrderFromOutsideCreatedEvent {
  subject: Subjects.OrderFromOutsideCreated;
  data: {
    orderId: string;
    commerceId: string;
    warehouseId: string;
    shipMethodId?: string;
    productGroups: OrderProductType[];
    orderDate?: string;
    shippingDate?: string;
    wantDate?: string;
    sender: SenderType;
    receiver: ReceiverType;
    status: OrderStatus;
    orderType?: OrderType;
    orderTypeName?: string;
  };
}
