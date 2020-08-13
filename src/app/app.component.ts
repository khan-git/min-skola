import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Min skola!';  
  buttons = [
    {name: 'Alfabetet'},
    {name: 'Vanliga Ord'},
    {name: 'Nonsens'},
    {name: 'Addition'},
    {name: 'Subtraktion'},
    {name: 'Multiplikation'},
    {name: 'Division'}
  ];

  route: string;

  constructor(location: Location, router: Router) {
    router.events.subscribe(val => {
      if (location.path() != "") {
        this.route = location.path();
      } else {
        this.route = "Home";
      }
    });
  }
}
