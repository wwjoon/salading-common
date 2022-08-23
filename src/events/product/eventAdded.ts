import { Subjects } from '../subjects';

export interface ProductEventAddedEvent {
  subject: Subjects.ProductEventAdded;
  data: {
    id: string;
    isBestProduct: boolean;
    isRecommended: boolean;
    recommendText?: string;
    adminId: string;
  };
}
