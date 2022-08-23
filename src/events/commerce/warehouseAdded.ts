import { Subjects } from '../subjects';

export interface CommerceWarehousesAddedEvent {
  subject: Subjects.CommerceWarehouseAdded;
  data: {
    id: string;
    warehouseId: string;
    adminId: string;
  };
}
