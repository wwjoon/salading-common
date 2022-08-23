import { Subjects } from '../subjects';

export interface FeedbackCategorySelectedEvent {
  subject: Subjects.FeedbackCategorySelected;
  data: {
    id: string;
    itemId: string;
    categoryId: string;
    adminId: string;
  };
}
