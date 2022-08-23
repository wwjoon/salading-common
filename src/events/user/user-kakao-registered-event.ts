import { Subjects } from '../subjects';

export interface UserKakaoRegisteredEvent {
  subject: Subjects.UserKakaoRegistered;
  data: {
    id: string;
  };
}
