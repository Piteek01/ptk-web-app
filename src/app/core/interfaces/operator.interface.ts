import { License } from "./license.interface";

export interface Operator {
  id: string;
  username?: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  address?: {
    street1?: string;
    street2?: string;
    city?: string;
    region?: string;
    postalCode?: string;
    countryCode?: string;
  },
  licenses?: License[]
}
