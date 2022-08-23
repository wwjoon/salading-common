import { Subjects } from '../subjects';

export interface CommerceMainDesignUpdateEvent {
  subject: Subjects.CommerceMainDesignUpdated;
  data: {
    id: string;
    mainDesignImageKey: string;
    mainDesignText: string;
    adminId: string;
  };
}
