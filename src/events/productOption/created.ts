import { Subjects } from '../subjects';

export interface ProductOptionCreatedEvent {
  subject: Subjects.ProductOptionCreated;
  data: {
    productOptionId: string;
    name: string;
    productIds: string[];
    isArchived: boolean;
    archivedAt?: string;
    priceChange: number;
    itemGroupsAdded?: { itemId: string; qty: number }[];
    itemGroupsRemoved?: { itemId: string; qty: number }[];
    channelId: string;
    adminId: string;
    createdAt: string;
    updatedAt: string;
  };
}
