import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  private lastScrollTop: number = 0;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > this.lastScrollTop) {
      // downscroll code
      this.renderer.addClass(this.el.nativeElement, 'scrolled-down');
    } else {
      // upscroll code
      this.renderer.removeClass(this.el.nativeElement, 'scrolled-down');
    }
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }
}
