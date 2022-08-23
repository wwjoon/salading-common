import { Subjects } from '../subjects';

export interface CommerceDayExceptionCreatedEvent {
  subject: Subjects.CommerceDayExceptionCreated;
  data: {
    id: string;
    adminId: string;
  };
}
