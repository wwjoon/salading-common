import { Subjects } from '../subjects';

export interface UserKakaoLoginEvent {
  subject: Subjects.UserKakaoLogin;
  data: {
    id: string;
  };
}
