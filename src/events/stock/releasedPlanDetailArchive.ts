import { Subjects } from '../subjects';

export interface StockReleasedPlanDetailArchiveEvent {
  subject: Subjects.StockReleasedPlanDetailArchive;
  data: {
    planDetailId: string;
    userId?: string;
    adminId?: string;
  };
}
