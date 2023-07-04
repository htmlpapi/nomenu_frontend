import { Component } from '@angular/core';

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
    {
      'name': '🎭 Comments',
      'url': '/comments'
    },
    {
      'name': '🚪 Log out',
      'url': '/home'
    },

  ]

  sidebarVisible: boolean = true;

  toggleSidebar()
  {
    this.sidebarVisible = !this.sidebarVisible;
  }


}
