import { Subjects } from '../subjects';
import { CourierTypeEnum, ShippingTypeEnum, ShipStepEnum, SenderType, ReceiverType, ItemShippingType } from '../../index';

export interface ShipAddedEvent {
  subject: Subjects.ShipAdded;
  data: {
    id: string;
    shippingCodes?: string[];
    orderId: string;
    commerce: { id: string; name: string };
    warehouseId: string;
    shipMethodId: string;
    courier: CourierTypeEnum;
    shippingFee?: number;
    shippingType: ShippingTypeEnum;
    packingType: ItemShippingType;
    boxType: string;
    boxVolume: number;
    boxWeight: number;
    products: {
      _id: string;
      name: string;
      qty: number;
      items: { _id: string; name: string; count: number; }[];
    };
    step: ShipStepEnum;
    stepLog: { date: string; log: ShipStepEnum };
    sender: SenderType;
    receiver: ReceiverType;
    shipDate: string;
    shippedDate?: string;
    additional?: { reqNo: string; resNo: string; downloaded: boolean; deliveryTime: string; };
  };
}
