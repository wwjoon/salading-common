import { Subjects } from '../subjects';

export interface FeedbackAdminRewardedEvent {
  subject: Subjects.FeedbackAdminRewarded;
  data: {
    id: string;
    feedbackRewardId: string;
    mileage: number;
    adminId: string;
  };
}
