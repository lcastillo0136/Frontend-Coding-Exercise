import { DateParts } from './date-parts.interface';

export interface WorkLicense {
  "start": DateParts;
  "content-version": string;
  "delay-in-days": number;
  "URL": string;
}
