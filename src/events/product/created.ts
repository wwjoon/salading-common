import { Subjects } from '../subjects';

export interface ProductCreatedEvent {
  subject: Subjects.ProductCreated;
  data: {
    id: string;
    name: string;
    channelId: string;
    commerceId: string;
    warehouseId: string;
    sellingUnit: string;
    summary?: string;
    details?: string;
    detailsImageKey?: string;
    thumbnailKey?: string;
    mainImageKey?: string;
    fixedPrice?: number;
    rawPrice: number;
    taxFree: number;
    items: { itemId: string; count: number }[];
    exitDate: string;
    adminId: string;
  };
}
