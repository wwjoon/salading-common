import { Subjects } from '../subjects';

export interface ItemStartSellEvent {
  subject: Subjects.ItemSellStarted;
  data: {
    id: string;
    isSelling: boolean;
    adminId: string;
  };
}
