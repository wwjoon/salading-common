import { Subjects } from '../subjects';

export interface ProductLastOrderTimeUpdatedEvent {
  subject: Subjects.ProductLastOrderTimeUpdated;
  data: {
    id: string;
    lastOrderTime: string;
    lastOrderTimeOld: string;
    adminId: string;
  };
}
