import { Subjects } from '../subjects';

export interface WarehouseShipMethodDisconnectedEvent {
  subject: Subjects.WarehouseShipMethodDisconnected;
  data: {
    warehouseId: string;
    shipMethodId: string;
    adminId: string;
  };
}
