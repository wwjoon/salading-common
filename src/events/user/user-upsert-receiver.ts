import { Subjects } from '../subjects';

export interface UserUpsertReceiverEvent {
  subject: Subjects.UserUpsertReceiver;
  data: {
    id: string;
    receiver: {
      name: string;
      phone: string;
      address: string;
      addressDetail: string;
      zipcode: string;
      deliveryNote?: string;
    };
  };
}
