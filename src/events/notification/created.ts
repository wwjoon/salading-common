import { Subjects } from '../subjects';

export interface NotificationCreatedEvent {
  subject: Subjects.NotificationCreated;
  data: {
    notificationId: string;
    createdAt: string;
  };
}
