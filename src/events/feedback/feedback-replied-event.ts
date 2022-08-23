import { Subjects } from '../subjects';

export interface FeedbackRepliedEvent {
  subject: Subjects.FeedbackReplied;
  data: {
    id: string;
    replyId: string;
    content: string;
    isSecret: boolean;
    userId?: string;
    adminId?: string;
  };
}
