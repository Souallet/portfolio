import { Injectable } from '@angular/core';

import { Resume } from './../../class/resume/resume';

import { IEducation } from './../../interfaces/education';
import { ILanguage } from './../../interfaces/language';
import { IProfile } from './../../interfaces/profile';
import { IReference } from './../../interfaces/reference';
import { ISkill } from './../../interfaces/skill';
import { IWork } from './../../interfaces/work';

import { ResumeData } from '../../mocks/resume';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  private resume: Resume = ResumeData;

  constructor() {}

  getEducations(): Array<IEducation> {
    return this.resume.education;
  }

  getLanguages(): Array<ILanguage> {
    return this.resume.languages;
  }

  getProfile(): IProfile {
    return this.resume.basics;
  }

  getReferences(): Array<IReference> {
    return this.resume.references;
  }

  getSkills(): Array<ISkill> {
    return this.resume.skills;
  }

  getWorks(): Array<IWork> {
    return this.resume.work;
  }
}
