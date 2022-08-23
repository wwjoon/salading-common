import { Subjects } from '../subjects';
import { OrderProductType } from '../../index';

export interface OrderWantDateChangedEvent {
  subject: Subjects.OrderWantDateChanged;
  data: {
    orderId: string;
    userId?: string;
    orderDateOriginal?: string;
    orderDateNew?: string;
    shippingDateOriginal: string;
    shippingDateNew: string;
    wantDateOriginal: string;
    wantDateNew: string;
    commerceId: string;
    warehouseId: string;
    shippingMethodId: string;
    planId?: string;
    productGroups: OrderProductType[];
    adminId: string;
  };
}
