import { Subjects } from '../subjects';

export interface ProductRawPriceUpdatedEvent {
  subject: Subjects.ProductRawPriceUpdated;
  data: {
    id: string;
    rawPrice: number;
    taxFree: number;
    connectedCommerces: {
      commerceId: string;
      warehouseId: string;
      sellingPrice: number;
      taxFree: number;
      fixedPrice?: number;
      discountRate?: number;
    }[];
    adminId: string;
  };
}
