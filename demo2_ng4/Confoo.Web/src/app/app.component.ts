import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navItem: string = 'sessions';

  onNavigate(navItem: string) {
    this.navItem = navItem;
  }
}
