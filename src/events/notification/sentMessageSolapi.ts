import { Subjects } from '../subjects';

export interface NotificationSentMessageSolapiEvent {
  subject: Subjects.NotificationSentMessageSolapi;
  data: {
    notificationId: string;
    sentAt: string;
  };
}
