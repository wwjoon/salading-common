import { Subjects } from '../subjects';

export interface StockAutoSetEvent {
  subject: Subjects.StockAutoSet;
  data: {
    id: string;
    itemId: string;
    isActive: boolean;
    warehouseId: string;
    stocks: {
      day: number;
      qty: number;
    }[];
    adminId: string;
  };
}
