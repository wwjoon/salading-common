import { Subjects } from '../subjects';
import { StockDisposal } from '../../index';

export interface StockDisposeLoggedEvent {
  subject: Subjects.StockDisposeLogged;
  data: {
    id: string;
    itemId: string;
    disposeId: string;
    warehouseId: string;
    qty: number;
    category: StockDisposal;
    adminId: string;
  };
}
