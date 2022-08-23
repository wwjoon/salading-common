import { Subjects } from '../subjects';

export interface CommerceBannerChosenEvent {
  subject: Subjects.CommerceBannerChosen;
  data: {
    id: string;
    bannerIds: string[];
    adminId: string;
  };
}
