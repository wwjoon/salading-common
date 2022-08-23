import { Subjects } from '../subjects';

export interface ProductOptionUpdatedEvent {
  subject: Subjects.ProductOptionUpdated;
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
    changeLogId: string;
    changeLogCreatedAt: string;
    propsOld: ChangeLogPropsType;
    propsNew: ChangeLogPropsType;
    adminId: string;
    createdAt: string;
    updatedAt: string;
  };
}

interface ChangeLogPropsType {
  name?: string;
  productIds?: string[];
  priceChange?: number;
  itemGroupsAdded?: { itemId: string; qty: number }[];
  itemGroupsRemoved?: { itemId: string; qty: number }[];
}
