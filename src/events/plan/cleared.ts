import { Subjects } from '../subjects';
import { SenderType, ReceiverType } from '../../index'

export interface PlanClearedEvent {
  subject: Subjects.PlanCleared;
  data: {
    id: string;
    userId: string;
    commerceId: string;
    warehouseId: string;
    sender: SenderType;
    receiver: ReceiverType;
    shippingMethodId: string;
    deliveryTime?: string;
    createdAt: string;
    updatedAt: string;
    adminId: string;
    clearDetailIds: string[];
  };
}
