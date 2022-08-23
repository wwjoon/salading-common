import { Subjects } from '../subjects';
import { ItemCategories, ItemShippingType } from '../../enums/item';

export interface ItemCreatedEvent {
  subject: Subjects.ItemCreated;
  data: {
    id: string;
    rawPrice: number;
    purchasePrice: number;
    sellingCount: number;
    sellingUnit: string;
    isTaxFree: boolean;
    isManna: boolean;
    name: string;
    category: ItemCategories;
    thumbnailKey: string;
    shippingInput: {
      type: ItemShippingType;
      length: number;
      width: number;
      height: number;
      weight: number;
    };
    consumerInput: {
      foodType: string;
      producerLocation: string;
      origin: string;
      expiration: string;
      rawMaterial: string;
      nutrient: string;
      relatedLaws: string;
      allergy: string;
      storageHandling: string;
      csInfo: string;
    };
    adminId: string;
  };
}
