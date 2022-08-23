import { Subjects } from '../subjects';

export interface ProductOptionDocUpsertedEvent {
  subject: Subjects.ProductOptionDocUpserted;
  data: any;
}