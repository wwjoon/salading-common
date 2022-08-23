import { Subjects } from '../subjects';
import { AuthRegisterType } from '../../enums/auth';

export interface OrderPaidCreatedEvent {
  subject: Subjects.OrderPaidCreated;
  data: {
    orderId: string;
    user: string;
    userInfo: {
      name?: string;
      email?: string;
      phone?: string;
      kakaoId?: string;
      registerType: AuthRegisterType;
    };
    commerce: string;
    productGroups: OrderProductType[];
    shippingCost?: number;
    orderDate?: string;
    shippingDate?: string;
    deliveryTime?: string;
    wantDate?: string;
    sender: {
      name: string;
      phone: string;
      email: string;
    };
    receiver: {
      name: string;
      phone: string;
      address: string;
      addressDetail: string;
      zipcode: string;
      deliveryNote?: string;
    };
    mileage_amount: number;
  };
}

interface OrderProductType {
  name: string;
  sellingUnit: string;
  orderId?: string;
  product: string;
  price: number;
  taxFree: number;
  itemsLog: {
    item: string;
    name: string;
    isTaxFree: boolean;
    isManna: boolean;
    rawPrice: number;
    count: number;
  }[];
  like?: boolean;
  qty: number;
  qtyInitial: number;
  reviewId?: string;
  complaintIds: string[];
  thumbnailKey?: string;
}
