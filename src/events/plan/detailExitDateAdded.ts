import { Subjects } from '../subjects';
export interface planDetailExitDateAdded {
  subject: Subjects.planDetailExitDateAdded;
  data: {
    id: string;
    planDetailId: string;
    exitDate: string;
    adminId?: string;
  };
}
