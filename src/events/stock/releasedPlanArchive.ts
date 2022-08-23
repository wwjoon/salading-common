import { Subjects } from '../subjects';

export interface StockReleasedPlanArchiveEvent {
  subject: Subjects.StockReleasedPlanArchive;
  data: {
    planId: string;
    userId?: string;
    adminId?: string;
  };
}
