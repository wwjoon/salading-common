import { Subjects } from '../subjects';

export interface ItemExitDateUpdatedEvent {
  subject: Subjects.ItemExitDateUpdated;
  data: {
    id: string;
    exitDate: string;
    adminId: string;
  };
}
