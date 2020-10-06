import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public slides = [
    {
      src:
        'https://images.ctfassets.net/hrltx12pl8hq/VZW7M82mrxByGHjvze4wu/216d9ff35b6980d850d108a50ae387bf/Carousel_01_FreeTrial.jpg?fit=fill&w=800&h=450'
    },
    {
      src: 'https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg'
    },
    {
      src:
        'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg'
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
