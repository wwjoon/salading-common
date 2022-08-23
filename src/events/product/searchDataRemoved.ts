import { Subjects } from '../subjects';

export interface ProductSearchdataRemovedEvent {
  subject: Subjects.ProductSearchDataRemoved;
  data: {
    id: string;
    searchData: string;
    adminId: string;
  };
}
