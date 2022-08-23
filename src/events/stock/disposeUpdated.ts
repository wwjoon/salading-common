import { Subjects } from '../subjects';
import { StockDisposal } from '../../enums/stock';

export interface StockDisposeUpdatedEvent {
  subject: Subjects.StockDisposeUpdated;
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
