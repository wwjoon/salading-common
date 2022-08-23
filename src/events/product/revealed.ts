import { Subjects } from '../subjects';

export interface ProductIsRevealedEvent {
  subject: Subjects.ProductIsRevealed;
  data: {
    id: string;
    adminId: string;
  };
}
