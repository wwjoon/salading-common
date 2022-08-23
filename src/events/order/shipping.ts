import { Subjects } from '../subjects';

export interface OrderShippingEvent {
  subject: Subjects.OrderShipping;
  data: {
    orderIds: string[];
  };
}
