import { Subjects } from '../subjects';
import { FeedbackType, FeedbackRoute, FeedbackSolutionType, FeedbackRewardMethod } from '../../enums/feedback';

export interface FeedbackCreatedEvent {
  subject: Subjects.FeedbackCreated;
  data: {
    id: string;
    type: FeedbackType;
    route?: FeedbackRoute;
    content: string;
    imageKeys?: string[];
    orderId: string;
    productId: string;
    isSecret: boolean;
    solutionType?: FeedbackSolutionType;
    rewardMethod?: FeedbackRewardMethod;
    cancelCount?: number;
    receiver?: {
      name: string;
      phone: string;
      address: string;
      addressDetail: string;
      zipcode: string;
      deliveryNote?: string;
    };
    userId?: string;
    adminId?: string;
  };
}
