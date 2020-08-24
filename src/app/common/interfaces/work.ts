export interface IWork {
  company: string;
  position: string;
  website: string;
  startDate: Date;
  summary: string;
  highlights?: Array<String>;
  endDate?: Date;
}
