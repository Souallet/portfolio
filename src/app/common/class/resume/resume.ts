import { IEducation } from './../../interfaces/education';
import { ILanguage } from './../../interfaces/language';
import { IProfile } from '../../interfaces/profile';
import { IReference } from './../../interfaces/reference';
import { IResume } from './../../interfaces/resume';
import { ISkill } from './../../interfaces/skill';
import { IWork } from './../../interfaces/work';

export class Resume implements IResume {
  basics: IProfile;
  work: IWork[];
  education: IEducation[];
  skills: ISkill[];
  languages: ILanguage[];
  references: IReference[];
}
