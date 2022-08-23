import { Subjects } from '../subjects';

export interface StockOrderRecordedEvent {
  subject: Subjects.StockOrderRecorded;
  data: {
    planDetailId: string;
    wantDate?: string;
    orderId: string;
  };
}
