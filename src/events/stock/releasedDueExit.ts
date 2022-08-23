import { Subjects } from '../subjects';

export interface StockReleasedDueExitEvent {
  subject: Subjects.StockReleasedDueExit;
  data: {
    id: string;
    adminId: string;
  };
}
