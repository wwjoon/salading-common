import { Subjects } from '../subjects';

export interface WarehouseShipMethodConnectedEvent {
  subject: Subjects.WarehouseShipMethodConnected;
  data: {
    warehouseId: string;
    shipMethodId: string;
    adminId: string;
  };
}
