import { Subjects } from '../subjects';

export interface ShipMethodUpdated {
  subject: Subjects.ShipMethodUpdated;
  data: {
    shipMethodId: string;
    name: string;
    lastOrderTime: string;
    useAlternativeAllowed: boolean;
    // allowedRegionsRadius?: { latitude: number; longitude: number; radiusKM: number }[];
    // allowedRegionsPost?: number[];
    adminId: string;
  };
}
