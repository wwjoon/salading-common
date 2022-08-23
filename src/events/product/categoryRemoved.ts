import { Subjects } from '../subjects';
import { ProductCategory } from '../../index';

export interface ProductCategoryRemovedEvent {
  subject: Subjects.ProductCategoryRemoved;
  data: {
    id: string;
    category: ProductCategory;
    adminId: string;
  };
}
