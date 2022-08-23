import { Subjects } from '../subjects';
import { AdmissionTicketType, AuthRegisterType, MeridiemType, ReservationType, PGTypes, PayMethodTypes } from '../../index';

export interface AdmissionTicketUpdatedEvent {
  subject: Subjects.AdmissionTicketUpdated;
  data: {
    admissionTicketId: string;
    admissionTicketNumber: string;
    userId: string;
    channelId: string;
    userInfo?: {
      name?: string;
      email?: string;
      phone?: string;
      kakaoId?: string;
      registerType: AuthRegisterType;
    };
    validDateStart?: string;
    validDateEnd?: string;
    numOfAdults: number;
    numOfChildren: number;
    price: number;
    reservation?: ReservationType;
    admissionTicketType?: AdmissionTicketType;
    isFree?: boolean;    
    pg: PGTypes;
    payMethod: PayMethodTypes;
    subscribed?: boolean;
    mileageAmount?: number;
    status: string;
    changeLogId: string;
    changeLogCreatedAt: string;
    propsOld: ChangeLogPropsType;
    propsNew: ChangeLogPropsType;
    priceChange?: number;
    adminId?: string;
    createdAt: string;
    updatedAt: string;
  };
}

interface ChangeLogPropsType {
  validDateStart?: string;
  validDateEnd?: string;
  visitDate?: string;
  reservation?: {
    status?: string;
    rezDate?: string;
    rezTime?: string;
    meridiem?: MeridiemType;
    userNote?: string;
    adminNote?: string;
  };
  pg?: PGTypes;
  payMethod?: PayMethodTypes;
  subscribed?: boolean;
  mileageAmount?: number;
  status?: string;
}
