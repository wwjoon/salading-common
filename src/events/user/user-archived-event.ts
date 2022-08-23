import { Subjects } from '../subjects';

export interface UserArchivedEvent {
  subject: Subjects.UserArchived;
  data: {
    id: string;
    reason?: string;
  };
}
