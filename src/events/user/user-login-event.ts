import { Subjects } from '../subjects';

export interface UserLoginEvent {
  subject: Subjects.UserLogin;
  data: {
    id: string;
  };
}
