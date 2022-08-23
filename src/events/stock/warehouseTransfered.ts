import { Subjects } from '../subjects';

export interface StockWarehouseTransferedEvent {
  subject: Subjects.StockWarehouseTransfered;
  data: {
    stockIdOriginal: string;
    qtyTransfer: number;
    itemId: string;
    warehouseIdOriginal: string;
    warehouseIdNew: string;
    sDateNew: string;
    eDateNew: string;
    adminId: string;
  };
}
