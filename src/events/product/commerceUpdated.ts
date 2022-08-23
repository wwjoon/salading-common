import { Subjects } from '../subjects';

export interface ProductCommerceUpdatedEvent {
  subject: Subjects.ProductCommerceUpdated;
  data: {
    id: string;
    commerceId: string;
    nameFromOutside?: string;
    warehouseId: string;
    shippingMethodIds: string[];
    sellingPrice: number;
    taxFree: number;
    fixedPrice?: number;
    discountRate?: number;
    isLook: boolean;
    adminId: string;
  };
}
