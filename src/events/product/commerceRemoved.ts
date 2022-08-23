import { Subjects } from '../subjects';

export interface ProductCommerceRemovedEvent {
  subject: Subjects.ProductCommerceRemoved;
  data: {
    id: string;
    commerceId: string;
    warehouseId: string;
  };
}
