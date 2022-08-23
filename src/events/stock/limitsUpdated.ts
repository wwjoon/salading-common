import { Subjects } from '../subjects';

export interface ItemLimitsUpdatedEvent {
  subject: Subjects.ItemLimitsUpdated;
  data: {
    id: string;
    limitInput: {
      days: number[];
    };
    adminId: string;
  };
}
