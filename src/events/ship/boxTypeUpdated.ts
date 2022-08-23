import { Subjects } from '../subjects';
import { CourierTypeEnum, ShippingTypeEnum, ItemShippingType } from '../../index';

export interface ShipBoxTypeUpdatedEvent {
  subject: Subjects.ShipBoxTypeUpdated;
  data: {
    id: string;
    shippingCode?: string;
    orderId: string;
    courier: CourierTypeEnum;
    shippingFee?: number;
    shippingType: ShippingTypeEnum;
    packingType: ItemShippingType;
    boxType: string;
    shipDate: string;
  };
}
