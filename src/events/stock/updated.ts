import { Subjects } from '../subjects';

export interface StockUpdatedEvent {
  subject: Subjects.StockUpdated;
  data: {
    id: string;
    warehouseId: string;
    itemId: string;
    sDate: string;
    eDate: string;
    addStock: number;
    adminId: string;
  };
}
