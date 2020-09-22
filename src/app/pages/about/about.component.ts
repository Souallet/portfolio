import { Component, OnInit } from '@angular/core';
import { ResumeService } from 'src/app/common/services/resume/resume.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  timelineElements: Array<{
    bulletItem: any;
    title: string;
    subtitle: string;
    details: string;
  }>;

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.timelineElements = this.resumeService
      .getEducations()
      .map((education) => ({
        bulletItem: education.institution,
        title: education.institution,
        subtitle: education.studyType,
        details: education.studyType,
      }));
  }
}
