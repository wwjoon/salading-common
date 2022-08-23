import { Subjects } from '../subjects';

export interface FeedbackCheckedEvent {
  subject: Subjects.FeedbackChecked;
  data: {
    id: string;
    userId?: string;
    adminId?: string;
  };
}
