import { ISkill } from './skill';

export interface IEducation {
  institution: string;
  area: string;
  studyType: string;
  startDate: Date;
  gpa: string;
  courses?: Array<ISkill>;
  endDate?: Date;
}
