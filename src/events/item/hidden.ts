import { Subjects } from '../subjects';

export interface ItemIsHiddenEvent {
  subject: Subjects.ItemIsHidden;
  data: {
    id: string;
    adminId: string;
  };
}
