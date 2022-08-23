import { Subjects } from '../subjects';

export interface OrderDirectPickUpEvent {
  subject: Subjects.OrderDirectPickUp;
  data: {
    orderId: string;
  };
}
