import { Subjects } from '../subjects';

export interface UserAppleLoginEvent {
  subject: Subjects.UserAppleLogin;
  data: {
    id: string;
  };
}
