import { Subjects } from '../subjects';
import { ShipMethodEnum } from '../../enums/shipMethod';

export interface ShipMethodCreatedEvent {
  subject: Subjects.ShipMethodCreated;
  data: {
    shipMethodId: string;
    name: string;
    type: ShipMethodEnum;
    lastOrderTime: string;
    shippingDuration: number;
    useAlternativeAllowed: boolean;
    // allowedRegionsRadius: {
    //   latitude: number;
    //   longitude: number;
    //   radiusKM: number;
    // }[];
    // allowedRegionsPost: string[];
    adminId: string;
  };
}
