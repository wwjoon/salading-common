import { Subjects } from '../subjects';
import { CourierTypeEnum, SenderType, ReceiverType } from '../../index';

export interface ShipReceiverUpdatedEvent {
  subject: Subjects.ShipReceiverUpdated;
  data: {
    id: string;
    shippingCode?: string;
    orderId: string;
    courier: CourierTypeEnum;
    shippingFee?: number;
    sender: SenderType;
    receiver: ReceiverType;
    shipDate: string;
  };
}
