import { Subjects } from '../subjects';

// delete
export interface ShipUpdatedEvent {
  subject: Subjects.ShipsUpdated;
  data: {
    id: string;
    orderIds: string[];
    step: string;
    boxType?: string;
    products: {
      name: string;
      qty: number;
      orderId: string;
      items: {
        name: string;
        count: number;
        sellingCount: number;
        sellingUnit: string;
      }[];
    };
    shipDate: string;
    shippingCode?: string;
    shippingFee: number;
  };
}
