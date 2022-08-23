import { Subjects } from '../subjects';

export interface FeedbackArchivedEvent {
  subject: Subjects.FeedbackArchived;
  data: {
    id: string;
    archived: boolean;
    adminId: string;
  };
}
