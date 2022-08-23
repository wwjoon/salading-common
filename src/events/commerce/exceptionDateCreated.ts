import { Subjects } from '../subjects';

export interface CommerceDateExceptionCreatedEvent {
  subject: Subjects.CommerceDateExceptionCreated;
  data: {
    id: string;
    adminId: string;
  };
}
