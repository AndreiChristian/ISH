import { Component, OnInit } from '@angular/core';
import { FullscreenService } from './fullscreen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'frontend';

  themeClass: string = 'light-theme'; // or 'dark-theme' as per your preference

  toggleTheme() {
    this.themeClass =
      this.themeClass === 'light-theme' ? 'dark-theme' : 'light-theme';
  }

  constructor(private fullScreenService: FullscreenService){}

  ngOnInit(){
    // this.fullScreenService.toggleFullScreen()
  }
}
