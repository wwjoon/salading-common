import { Subjects } from '../subjects';

export interface StockConsumedEvent {
  subject: Subjects.StockConsumed;
  data: {
    orderIds: string[];
  };
}
