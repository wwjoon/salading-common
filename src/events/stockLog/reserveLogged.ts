import { Subjects } from '../subjects';

export interface StockReserveLoggedEvent {
  subject: Subjects.StockReserveLogged;
  data: {
    id: string;
    itemId: string;
    warehouseId: string;
    orderDate?: string;
    shippingDate?: string;
    qtyRequested: number;
    qtyOrderCreated: number;
    qtyReserved: number;
    qtyNotReserved: number;
    qtyDisposed: number;
  };
}
