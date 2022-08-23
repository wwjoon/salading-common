import { Subjects } from '../subjects';

export interface FeedbackIsCompletedEvent {
  subject: Subjects.FeedbackIsCompleted;
  data: {
    id: string;
    isComplete: boolean;
    adminId: string;
  };
}
