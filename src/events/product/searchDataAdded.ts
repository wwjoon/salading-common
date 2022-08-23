import { Subjects } from '../subjects';

export interface ProductSearchdataAddedEvent {
  subject: Subjects.ProductSearchDataAdded;
  data: {
    id: string;
    searchData: string;
    adminId: string;
  };
}
