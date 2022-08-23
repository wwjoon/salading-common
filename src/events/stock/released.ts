import { Subjects } from '../subjects';

export interface StockReleasedEvent {
  subject: Subjects.StockReleased;
  data: {
    stockRequestId: string;
    qtyRemaining: number;
  };
}
