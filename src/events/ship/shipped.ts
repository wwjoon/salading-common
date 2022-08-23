import { Subjects } from '../subjects';

export interface ShipShippedEvent {
  subject: Subjects.ShipsShipped;
  data: {
    orderIds: string[];
  };
}
