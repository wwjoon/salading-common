import { Subjects } from '../subjects';

export interface OrderShippedEvent {
  subject: Subjects.OrderShipped;
  data: {
    orderIds: string[];
  };
}
