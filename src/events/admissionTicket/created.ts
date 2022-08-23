import { Subjects } from '../subjects';
import { AdmissionTicketType, AuthRegisterType, MeridiemType, ReservationStatus ,PGTypes, PayMethodTypes } from '../../index';

export interface AdmissionTicketCreatedEvent {
  subject: Subjects.AdmissionTicketCreated;
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
    stateId?: string;
    adminId?: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface ReservationType {
  id: string;               // 예약 아이디
  commerceId: string;       // 판매처 아이디
  status: ReservationStatus // 예약상태
  rezDate: string;          // 예약 일자
  rezTime: string;          // 예약 시간
  meridiem: MeridiemType    // 오전 / 오후
  userNote?: string;        // 메모, 고객
  adminNote?: string;       // 메모, 관리자
  createdAt: string;        // 생성일자
  updatedAt: string;        // 수정일자
}
