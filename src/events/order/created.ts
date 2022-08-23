import { Subjects } from '../subjects';
import { OrderStatus, OrderType, AuthRegisterType, PGTypes, PayMethodTypes, CommerceInfoType } from '../../index';

export interface OrderCreatedEvent {
  subject: Subjects.OrderCreated;
  data: {
    orderId: string;
    userId?: string;
    planId?: string;
    containsWeekly?: boolean;
    commerceId: string;
    commerceInfo?: CommerceInfoType;
    warehouseId: string;
    shipMethodId?: string;
    userInfo?: {
      name?: string;
      email?: string;
      phone?: string;
      kakaoId?: string;
      registerType: AuthRegisterType;
    };
    productGroups: OrderProductType[];
    orderDate?: string;
    shippingDate?: string;
    wantDate?: string;
    deliveryTime?: string;
    sender?: SenderType;
    receiver?: ReceiverType;
    orderNote?: string;
    pg?: PGTypes;
    payMethod?: PayMethodTypes;
    subscribed?: boolean;
    mileageAmount?: number;
    status: OrderStatus;
    orderType?: OrderType;
    orderTypeName?: string;
    stateId?: string;
    stateUpdatedAt?: string;
  };
}

export interface SenderType {
  name: string;
  phone: string;
  email?: string;
}

export interface ReceiverType {
  name: string;
  phone: string;
  address: string;
  addressDetail: string;
  zipcode: string;
  deliveryNote?: string;
  entrancePassword?: string;
  arrivalNotify?: boolean;
  wantPhotoMsg?: boolean;
}

export interface OrderProductType {
  name: string;
  sellingUnit: string;
  orderId: string;
  product: string;
  productOptionGroups: {
    productOptionId: string;
    priceChange: number;
    qty: number;
  }[];
  price: number;
  taxFree: number;
  planDetailIds: string[];
  couponIds: string[];
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
  thumbnailKey?: string;
  // reviewId?: string;
  // complaintIds: string[]; //
}