import { Subjects } from '../subjects';

export interface StockPlanArchiveLoggedEvent {
  subject: Subjects.StockPlanArchiveLogged;
  data: {
    planId: string;
  };
}
