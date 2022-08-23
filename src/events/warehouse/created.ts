import { Subjects } from '../subjects';

export interface WarehouseCreatedEvent {
  subject: Subjects.WarehouseCreated;
  data: {
    id: string;
    name: string;
    adminId: string;
  };
}
