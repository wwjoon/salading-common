import { Subjects } from '../subjects';

export interface FeedbackReplyEditedEvent {
  subject: Subjects.FeedbackReplyEdited;
  data: {
    id: string;
    replyId: string;
    content: string;
    isSecret: boolean;
    userId?: string;
    adminId?: string;
  };
}
