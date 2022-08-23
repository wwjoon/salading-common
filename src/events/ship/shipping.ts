import { Subjects } from '../subjects';

export interface ShipShippingEvent {
  subject: Subjects.ShipsShipping;
  data: {
    orderIds: string[];
  };
}
