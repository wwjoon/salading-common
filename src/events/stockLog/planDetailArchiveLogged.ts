import { Subjects } from '../subjects';

export interface StockPlanDetailArchiveLoggedEvent {
  subject: Subjects.StockPlanDetailArchiveLogged;
  data: {
    planDetailId: string;
  };
}
