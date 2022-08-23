import { Subjects } from '../subjects';
import { OrderType, OrderProductType } from '../../index';

export interface OrderPreparedEvent {
  subject: Subjects.OrderPrepared;
  data: {
    orderId: string;
    orderNumber?: string;
    orderNumberShort?: string;
    shipId?: string;
    planId?: string;
    planDetailIds?: string[];
    commerceId: string;
    commerceInfo?: CommerceInfoType;
    warehouseId: string;
    shipMethodId?: string;
    orderDate?: string;
    shippingDate?: string;
    wantDate?: string;
    orderType?: OrderType;
    orderTypeName?: string;
    productGroups?: OrderProductType[];
    userId: string;
    userName?: string;
  };
}

export interface CommerceInfoType {
  name?: string;
  place?: string;
  offline?: boolean;
  channelId?: string;
}
