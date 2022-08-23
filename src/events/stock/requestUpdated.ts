import { Subjects } from '../subjects';

export interface StockRequestUpdated {
  subject: Subjects.StockRequestUpdated;
  data: {
    stockRequestId: string;
    qtyNewReserves: { stockReserveId: string; stockId: string; qty: number }[];
    qtyNotReserved: number;
  };
}
