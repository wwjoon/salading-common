import { Subjects } from '../subjects';

export interface PlanArchivedEvent {
  subject: Subjects.PlanArchived;
  data: {
    id: string;
    archivedAt: string;
    adminId?: string;
    userId: string;
  };
}
