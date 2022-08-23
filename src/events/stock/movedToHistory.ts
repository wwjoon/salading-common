import { Subjects } from '../subjects';

export interface StockMovedToHistoryEvent {
  subject: Subjects.StockMovedToHistory;
  data: {
    id: string;
    adminId: string;
  };
}
