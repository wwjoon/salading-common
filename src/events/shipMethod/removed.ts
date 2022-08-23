import { Subjects } from '../subjects';

export interface ShipMethodRemovedEvent {
  subject: Subjects.ShipMethodRemoved;
  data: {
    shipMethodId: string;
    adminId: string;
  };
}
