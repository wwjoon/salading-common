import { Subjects } from '../subjects';

export interface ProductItemsUpatedEvent {
  subject: Subjects.ProductItemsUpated;
  data: {
    id: string;
    name: string;
    items: { itemId: string; count: number }[];
    sellingUnit: string;
    connectedCommerces: {
      commerceId: string;
      warehouseId: string;
      shippingMethodIds: string[];
      sellingPrice: number;
      taxFree: number;
      fixedPrice?: number;
      discountRate?: number;
      isLook: boolean;
    }[];
    exitDate: string;
    adminId: string;
  };
}
