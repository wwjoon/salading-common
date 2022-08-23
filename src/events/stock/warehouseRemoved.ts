import { Subjects } from '../subjects';

export interface ItemWarehouseRemovedEvent {
  subject: Subjects.ItemWarehouseRemoved;
  data: {
    id: string;
    warehouseId: string;
    adminId: string;
  };
}
