import { Subjects } from '../subjects';
import { AuthRegisterType, OrderStatus, OrderProductType, PayMethodTypes, PGTypes, ReceiverType, SenderType } from '../../index';

export interface PlanOrderCreatedEvent {
  subject: Subjects.PlanOrderCreated;
  data: {
    id: string;
    orderId: string;
    userId: string;
    planId: string;
    containsWeekly: boolean;
    commerceId: string;
    warehouseId: string;
    shipMethodId: string;
    userInfo: {
      name: string;
      email: string;
      phone: string;
      kakaoId?: string;
      registerType: AuthRegisterType;
    };
    productGroups: OrderProductType[];
    wantDate: string;
    shippingDate: string;
    deliveryTime?: string;
    sender: SenderType;
    receiver: ReceiverType;
    pg: PGTypes;
    payMethod: PayMethodTypes;
    status: OrderStatus;
  };
}
