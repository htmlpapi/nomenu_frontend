import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

  menuItems: Array<Object> = 
  [
    {
      'name': 'Dashboard',
      url: '/home'
    },
    {
      'name': 'Menus',
      url: '/home'
    },
    {
      'name': 'Comments',
      url: '/home'
    },

  ]


}
