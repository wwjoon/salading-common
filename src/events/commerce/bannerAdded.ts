import { Subjects } from '../subjects';

export interface CommerceBannerAddedEvent {
  subject: Subjects.CommerceBannerAdded;
  data: {
    id: string;
    bannerId: string;
    bannerImageKey: string;
    bannerText: string;
    link: string;
    adminId: string;
  };
}
