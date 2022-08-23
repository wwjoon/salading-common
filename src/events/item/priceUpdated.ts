import { Subjects } from '../subjects';

export interface ItemPriceUpdatedEvent {
  subject: Subjects.ItemPriceUpdated;
  data: {
    id: string;
    rawPrice: number;
    purchasePrice: number;
    isManna: boolean;
    isTaxFree: boolean;
    adminId: string;
  };
}
