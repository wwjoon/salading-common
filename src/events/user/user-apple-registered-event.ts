import { Subjects } from '../subjects';

export interface UserAppleRegisteredEvent {
  subject: Subjects.UserAppleRegistered;
  data: {
    id: string;
  };
}
