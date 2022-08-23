import { Subjects } from '../subjects';

export interface ItemWarehouseAddedEvent {
  subject: Subjects.ItemWarehouseAdded;
  data: {
    id: string;
    warehouseId: string;
    adminId: string;
  };
}
