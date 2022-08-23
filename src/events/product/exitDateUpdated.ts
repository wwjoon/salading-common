import { Subjects } from '../subjects';

export interface ProductExitDateUpdatedEvent {
  subject: Subjects.ProductExitDateUpdated;
  data: {
    id: string;
    exitDate: string;
    exitDateOld: string;
    adminId: string;
  };
}
