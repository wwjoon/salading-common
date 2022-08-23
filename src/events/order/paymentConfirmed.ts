import { Subjects } from '../subjects';
import { OrderStatus, OrderType, SenderType, ReceiverType, AuthRegisterType, OrderProductType, PGTypes, PayMethodTypes, CommerceInfoType } from '../../index';

export interface OrderPaymentConfirmedEvent {
  subject: Subjects.OrderPaymentConfirmed;
  data: {
    fromOutside?: {
      orderId: string;
    };
    orderId: string;
    userId?: string;
    planId?: string;
    containsWeekly: boolean;
    commerceId: string;
    warehouseId: string;
    shipMethodId?: string;
    userInfo: {
      name?: string;
      email?: string;
      phone?: string;
      kakaoId?: string;
      registerType: AuthRegisterType;
    };
    commerceInfo?: CommerceInfoType;
    productGroups: OrderProductType[];
    orderDate?: string;
    shippingDate?: string;
    wantDate?: string;
    deliveryTime?: string;
    sender?: SenderType;
    receiver?: ReceiverType;
    pg?: PGTypes;
    payMethod?: PayMethodTypes;
    subscribed?: boolean;
    status: OrderStatus;
    orderType?: OrderType;
    orderTypeName?: string;
    stateId?: string;
    stateUpdatedAt?: string;
  };
}
