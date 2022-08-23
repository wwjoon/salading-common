import { Subjects } from '../subjects';

export interface PlanCreatedEvent {
  subject: Subjects.PlanCreated;
  data: {
    id: string;
    userId: string;
    commerceId: string;
    warehouseId: string;
    sender: {
      name: string;
      phone: string;
      email?: string;
    };
    receiver: {
      name: string;
      phone: string;
      address: string;
      addressDetail: string;
      zipcode: string;
      deliveryNote?: string;
      entrancePassword?: string;
      arrivalNotify?: boolean;
    };
    shippingMethodId: string;
    deliveryTime?: string;
    createdAt: string;
  };
}
