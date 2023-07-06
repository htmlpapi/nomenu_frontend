import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface MenuItem {
  name: string;
  url: string;
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent {

  constructor(private router: Router){}

  menuItems: Array<MenuItem> = 
  [
    {
      'name': '📊 Dashboard',
      'url': '/home'
    },
    {
      'name': '🍜 Menu',
      'url': '/menu'
    },

  ]

  sidebarVisible: boolean = true;

  toggleSidebar()
  {
    this.sidebarVisible = !this.sidebarVisible;
  }


  logout()
  {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }

}
