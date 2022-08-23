import { Subjects } from '../subjects';
import { CourierTypeEnum, ShippingTypeEnum, ItemShippingType} from '../../index';

export interface ShipProductsUpdatedEvent {
  subject: Subjects.ShipProductsUpdated;
  data: {
    id: string;
    shippingCode?: string;
    orderId: string;
    courier: CourierTypeEnum;
    shippingFee?: number;
    shippingType: ShippingTypeEnum;
    packingType: ItemShippingType;
    boxType: string;
    products: ShipProductType[];
    shipDate: string;
  };
}

export interface ShipProductType {
  _id: string;
  name: string;
  qty: number;
  items: { _id: string; name: string; count: number; }[];
}
