import { Subjects } from '../subjects';
import { OrderType, CommerceInfoType } from '../../index';

export interface OrderPickedUpEvent {
  subject: Subjects.OrderPickedUp;
  data: {
    orderId: string;
    orderNumber?: string;
    orderNumberShort?: string;
    commerceId: string;
    commerceInfo?: CommerceInfoType;
    warehouseId: string;
    orderDate?: string;
    orderType?: OrderType;
    orderTypeName?: string;
    userId: string;
    userName?: string;
  };
}
