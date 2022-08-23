import { Subjects } from '../subjects';
import { ProductCategory } from '../../index';

export interface ProductCategoryAddedEvent {
  subject: Subjects.ProductCategoryAdded;
  data: {
    id: string;
    category: ProductCategory;
    adminId: string;
  };
}
