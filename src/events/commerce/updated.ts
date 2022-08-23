import { Subjects } from '../subjects';
import { CommerceExceptionType } from '../../index';

export interface CommerceUpdatedEvent {
  subject: Subjects.CommerceUpdated;
  data: {
    id: string;
    name?: string;
    place?: string;
    fromOutside?: boolean;
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
