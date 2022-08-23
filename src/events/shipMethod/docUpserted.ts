import { Subjects } from '../subjects';

export interface ShipMethodDocUpsertedEvent {
  subject: Subjects.ShipMethodDocUpserted;
  data: any;
}