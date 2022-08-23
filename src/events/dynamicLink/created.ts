import { Subjects } from '../subjects';

export interface DynamicLinkCreatedEvent {
  subject: Subjects.DynamicLinkCreated;
  data: {
    dynamicLinkId: string;
    url: string;
    urlQrcodeDataUrl?: string;
    urlQrcodeImageKey?: string;
    linkUrl: string;
    dynamicLinkType: string;
    userId?: string;
    adminId?: string;
    productId?: string;
    createdAt: string;
  };
}
