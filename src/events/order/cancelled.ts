import { Subjects } from '../subjects';
import { OrderStatus, OrderType } from '../../enums/order';
import { OrderProductType, CommerceInfoType } from '../../index';

export interface OrderCancelledEvent {
  subject: Subjects.OrderCancelled;
  data: {
    orderId: string;
    status: OrderStatus;
    orderType?: OrderType;
    orderTypeName?: string;
    userId?: string;
    adminId?: string;
    complaintId?: string;
    orderDate?: string;
    shippingDate?: string;
    wantDate?: string;
    commerceId: string;
    commerceInfo?: CommerceInfoType;
    warehouseId: string;
    planId?: string;
    shippingMethodId?: string;
    productGroupsBefore?: OrderProductType[];
    productGroupsRemaining: OrderProductType[];
    productGroupsCancelled: OrderCancelType;
  };
}

export interface OrderCancelType {
  id: string;
  products: OrderCancelProductType[];
  status: OrderStatus;
  reason: string;
  createdAt: string;
  admin?: string;
}

export interface OrderCancelProductType {
  complaintId?: string;
  product: string;
  productOptionGroups?: {
    productOptionId: string;
    qty: number;
  }[];
  qty: number;
}
