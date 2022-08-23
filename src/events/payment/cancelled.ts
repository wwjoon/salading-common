import { Subjects } from '../subjects';

export interface PaymentCancelledEvent {
  subject: Subjects.PaymentCancelled;
  data: {
    id: string;
    cancelId: string;
    orderId?: string;
    admissionTicketId?: string;
    commerceId?: string;
    paymentId: string;
    paymentCancelId: string;
    totalAmount: number;
    costAmount: number;
    totalTaxFree: number;
    costTaxFree: number;
    mileageAmount: number;
  };
}
