import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  @Input('project-img') projectImg: string;
  @Input('project-title') projectTitle: string;
  @Input('project-desc') projectDescription: string;

  constructor() {}

  ngOnInit(): void {
    console.log(this.projectImg);
  }
}
