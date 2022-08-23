import { Subjects } from '../subjects';

export interface StockCreatedEvent {
  subject: Subjects.StockCreated;
  data: {
    id: string;
    stockTransferOriginId?: string;
    itemId: string;
    warehouseId: string;
    sDate: string;
    eDate: string;
    qty: number;
    adminId: string;
  };
}
