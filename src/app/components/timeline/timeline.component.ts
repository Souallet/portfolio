import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  constructor() {}

  @Input('elements') elements: Array<{
    bulletItem: any;
    title: string;
    subtitle: string;
    details: string;
  }>;

  ngOnInit(): void {}
}
