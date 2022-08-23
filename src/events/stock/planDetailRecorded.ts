import { Subjects } from '../subjects';

export interface StockPlanDetailRecordedEvent {
  subject: Subjects.StockPlanDetailRecorded;
  data: {
    wantDate: string;
    planDetailId: string;
  };
}
