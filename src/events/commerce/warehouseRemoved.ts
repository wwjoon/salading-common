import { Subjects } from '../subjects';

export interface CommerceWarehousesRemovedEvent {
  subject: Subjects.CommerceWarehouseRemoved;
  data: {
    id: string;
    warehouseId: string;
    adminId: string;
  };
}
