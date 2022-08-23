import { Subjects } from '../subjects';

export interface ProductDocUpsertedEvent {
  subject: Subjects.ProductDocUpserted;
  data: any;
}
