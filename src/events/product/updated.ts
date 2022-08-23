import { Subjects } from '../subjects';

export interface ProductUpdatedEvent {
  subject: Subjects.ProductUpdated;
  data: {
    id: string;
    name: string;
    summary?: string;
    details?: string;
    thumbnailKey?: string;
    detailsImageKey?: string;
    mainImageKey?: string;
    adminId: string;
  };
}
