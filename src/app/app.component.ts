import { Component } from '@angular/core';
import { ResumeService } from './common/services/resume/resume.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';

  constructor(private resumeService: ResumeService) {}
  ngOnInit(): void {
    console.table(this.resumeService.getEducations());
    console.table(this.resumeService.getLanguages());
    console.table(this.resumeService.getProfile());
    console.table(this.resumeService.getReferences());
    console.table(this.resumeService.getSkills());
    console.table(this.resumeService.getWorks());
  }
}
