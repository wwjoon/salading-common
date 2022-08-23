import { Subjects } from '../subjects';

export interface NotificationSentMessageFcmEvent {
  subject: Subjects.NotificationSentMessageFcm;
  data: {
    notificationId: string;
    sentAt: string;
  };
}
