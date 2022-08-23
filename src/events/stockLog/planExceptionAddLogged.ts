import { Subjects } from '../subjects';

export interface StockPlanExceptionAddLoggedEvent {
  subject: Subjects.StockPlanExceptionAddLogged;
  data: {
    planDetailId: string;
    shippingDate: string;
  };
}
