import { Subjects } from '../subjects';

export interface UserRegisteredEvent {
  subject: Subjects.UserRegistered;
  data: {
    id: string;
  };
}
