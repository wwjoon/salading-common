import { Subjects } from '../subjects';

export interface ItemIsRevealedEvent {
  subject: Subjects.ItemIsRevealed;
  data: {
    id: string;
    adminId: string;
  };
}
