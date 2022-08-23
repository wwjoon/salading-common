import { Subjects } from '../subjects';
import { FeedbackRewardMethod, FeedbackSolutionType } from '../../enums/feedback';

export interface FeedbackUpdatedEvent {
  subject: Subjects.FeedbackUpdated;
  data: {
    id: string;
    imageKeys: string[];
    content: string;
    rewardMethod?: FeedbackRewardMethod;
    solutionType?: FeedbackSolutionType;
    receiver?: {
      name: string;
      phone: string;
      address: string;
      addressDetail: string;
      zipcode: string;
      deliveryNote?: string;
    };
    isSecret: boolean;
    userId?: string;
    adminId?: string;
  };
}
