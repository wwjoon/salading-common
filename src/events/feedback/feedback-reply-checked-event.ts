import { Subjects } from '../subjects';

export interface FeedbackReplyCheckedEvent {
  subject: Subjects.FeedbackReplyChecked;
  data: {
    id: string;
    userId?: string;
    adminId?: string;
  };
}
