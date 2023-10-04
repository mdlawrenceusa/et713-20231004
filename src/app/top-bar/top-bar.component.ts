import { Component } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  title = 'Skillfair';

  links = [
    { text: 'Anthony', url: '/anthony' },
    { text: 'Newest', url: '/newest' },
    { text: 'Catalog', url: '/catalog' },
    { text: 'Contact', url: '/contact' }
  ];

  constructor() {}

}


/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  title = 'Skillfair';

  links = [
    { text: 'Newest', url: '/newest' },
    { text: 'Catalog', url: '/catalog' },
    { text: 'Contact', url: '/contact' }
  ];

  constructor() {}

}






Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/