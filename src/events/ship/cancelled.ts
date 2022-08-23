import { Subjects } from '../subjects';

export interface ShipsCancelledEvent {
  subject: Subjects.ShipsCancelled;
  data: {
    id: string;
  };
}
