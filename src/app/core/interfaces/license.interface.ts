import { Rating } from "./rating.interface";

export interface License {
  licenseNum?: string;
  licenseType?: string;
  licenseAgency?: string;
  issueDate?: string;
  expiryDate?: string;
  ratings?: Rating[];
}
