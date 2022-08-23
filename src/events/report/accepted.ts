import { Subjects } from '../subjects';

export interface ReportAcceptedEvent {
  subject: Subjects.ReportAccepted;
  data: {
    reportId: string;
    reportType: string;
    userId?: string;
    feedbackId: string;
    feedbackUserId?: string;
    date: string;
    adminId?: string;
    comment?: string;
    createdAt: string;
    updatedAt: string;
  };
}