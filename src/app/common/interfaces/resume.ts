import { IEducation } from './education';
import { ILanguage } from './language';
import { IProfile } from './profile';
import { IReference } from './reference';
import { ISkill } from './skill';
import { IWork } from './work';

export interface IResume {
  basics: IProfile;
  work: Array<IWork>;
  education: Array<IEducation>;
  skills: Array<ISkill>;
  languages: Array<ILanguage>;
  references: Array<IReference>;
}
