import { Subjects } from '../subjects';

export interface PlanDefaultSetEvent {
  subject: Subjects.PlanDefaultSet;
  data: {
    id: string;
    userId: string;
  };
}
