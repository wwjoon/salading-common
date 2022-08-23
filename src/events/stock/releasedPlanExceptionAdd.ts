import { Subjects } from '../subjects';

export interface StockReleasedPlanExceptionAddEvent {
  subject: Subjects.StockReleasedPlanExceptionAdd;
  data: {
    planDetailId: string;
    wantDate: string;
    userId?: string;
    adminId?: string;
  };
}
