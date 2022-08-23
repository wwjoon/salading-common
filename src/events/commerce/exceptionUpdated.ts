import { Subjects } from '../subjects';

export interface CommerceExceptionUpdatedEvent {
  subject: Subjects.CommerceExceptionUpdated;
  data: {
    id: string;
    adminId: string;
  };
}
