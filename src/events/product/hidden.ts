import { Subjects } from '../subjects';

export interface ProductIsHiddenEvent {
  subject: Subjects.ProductHidden;
  data: {
    id: string;
    adminId: string;
  };
}
