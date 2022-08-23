import { Subjects } from '../subjects';

export interface NotificationSentMessageApistoreKakaoEvent {
  subject: Subjects.NotificationSentMessageApistoreKakao;
  data: {
    notificationId: string;
    sentAt: string;
  };
}
