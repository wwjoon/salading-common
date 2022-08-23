import { Subjects } from '../subjects';

export interface StockOrderNoStockLoggedEvent {
  subject: Subjects.StockOrderNoStockLogged;
  data: {
    orderId: string;
  };
}
