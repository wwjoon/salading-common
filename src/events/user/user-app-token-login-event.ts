import { Subjects } from '../subjects';

export interface UserAppTokenLoginEvent {
  subject: Subjects.UserAppTokenLogin;
  data: {
    id: string;
  };
}
