import { Subjects } from '../subjects';

export interface CommerceBannerUpdatedEvent {
  subject: Subjects.CommerceBannerUpdated;
  data: {
    id: string;
    bannerId: string;
    bannerImageKey: string;
    bannerText: string;
    link: string;
    adminId: string;
  };
}
