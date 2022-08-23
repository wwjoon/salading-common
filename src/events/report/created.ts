import { Subjects } from '../subjects';

export interface ReportCreatedEvent {
  subject: Subjects.ReportCreated;
  data: {
    reportId: string;
    reportType: string;
    userId?: string;
    feedbackId: string;
    feedbackUserId?: string;
    reason: string;
    status: string; 
    adminId?: string;
    statusLogs: {
      date: string;
      status: string;
      adminId?: string;
      comment?: string;
    }[],
    createdAt: string;
    updatedAt: string;
  };
}