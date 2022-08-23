import { Subjects } from '../subjects';

export interface CommerceExceptionRemovedEvent {
  subject: Subjects.CommerceExceptionRemoved;
  data: {
    id: string;
    adminId: string;
  };
}
