import { Subjects } from '../subjects';
import { StockDisposal } from '../../enums/stock';

export interface StockDisposedEvent {
  subject: Subjects.StockDisposed;
  data: {
    id: string;
    itemId: string;
    disposeId: string;
    warehouseId: string;
    qty: number;
    thumbnailKey?: string;
    category: StockDisposal;
    message?: string;
    adminId: string;
  };
}
