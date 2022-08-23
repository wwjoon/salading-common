import { Subjects } from '../subjects';

export interface StockOrderCancelLoggedEvent {
  subject: Subjects.StockOrderCancelLogged;
  data: {
    orderId: string;
    cancelId: string;
  };
}
