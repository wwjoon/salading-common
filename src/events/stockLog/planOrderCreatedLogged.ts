import { Subjects } from '../subjects';

export interface StockPlanOrderCreatedLoggedEvent {
  subject: Subjects.StockPlanOrderCreatedLogged;
  data: {
    orderId: string;
  };
}
