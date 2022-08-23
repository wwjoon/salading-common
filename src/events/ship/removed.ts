import { Subjects } from '../subjects';

export interface ShipRemovedEvent {
  subject: Subjects.ShipRemoved;
  data: {
    shipId: string;
  };
}
