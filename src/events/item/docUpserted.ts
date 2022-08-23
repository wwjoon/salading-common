import { Subjects } from '../subjects';

export interface ItemDocUpsertedEvent {
  subject: Subjects.ItemDocUpserted;
  data: any;
}