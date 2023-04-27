import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { FullscreenService } from '../fullscreen.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  loading: Observable<boolean>;

  isOnline: boolean = navigator.onLine;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private fullscreenService: FullscreenService,
    private httpService: HttpService
  ) {
    window.addEventListener('online', () => {
      this.isOnline = true;
    });

    window.addEventListener('offline', () => {
      this.isOnline = false;
    });
  }

  toggleFullScreen(): void {
    this.fullscreenService.toggleFullScreen();
  }

  ngOnInit(): void {
    this.loading = this.httpService.loading$;
  }
}
