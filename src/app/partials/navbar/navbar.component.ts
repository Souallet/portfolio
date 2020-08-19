import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navbarActive: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  toggleNavbar() {
    this.navbarActive = !this.navbarActive;
  }
}
