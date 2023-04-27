import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';

  themeClass: string = 'light-theme'; // or 'dark-theme' as per your preference

  toggleTheme() {
    this.themeClass =
      this.themeClass === 'light-theme' ? 'dark-theme' : 'light-theme';
  }
}
