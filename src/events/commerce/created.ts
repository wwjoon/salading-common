import { Subjects } from '../subjects';

export interface CommerceCreatedEvent {
  subject: Subjects.CommerceCreated;
  data: {
    id: string;
    name: string;
    place?: string;
    fromOutside: boolean;
    offline?: boolean;
    warehouseId?: string;
    opensAtHour?: string;
    closesAtHour?: string;
    lastOrderTime?: string;
    breakTimeStart?: string;
    breakTimeEnd?: string;
    howReceive?: string[];
    info?: string;
    exceptions: CommerceExceptionType[];
    adminId: string;
  };
}

export interface CommerceExceptionType {
  id: string;
  orderDay?: number;
  orderDate?: string;
  opensAtHour?: string;
  closesAtHour?: string;
  lastOrderTime?: string;
  breakTimeStart?: string;
  breakTimeEnd?: string;
  isClosed: boolean;
  reason?: string;
  admin: string;
  createdAt: string;
  updatedAt: string;
}
