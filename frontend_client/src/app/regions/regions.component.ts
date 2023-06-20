import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss'],
})
export class RegionsComponent implements OnInit {
  observer: IntersectionObserver;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = this.renderer.selectRootElement(
              `#${entry.target.id} img`,
              true
            );
            const p = this.renderer.selectRootElement(
              `#${entry.target.id} p`,
              true
            );

            this.renderer.addClass(img, 'slide-in');
            this.renderer.addClass(p, 'fade-in');
          } else {
            const img = this.renderer.selectRootElement(
              `#${entry.target.id} img`,
              true
            );
            const p = this.renderer.selectRootElement(
              `#${entry.target.id} p`,
              true
            );

            this.renderer.removeClass(img, 'slide-in');
            this.renderer.removeClass(p, 'fade-in');
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    const rows: HTMLElement[] = this.el.nativeElement.querySelectorAll('.row');
    rows.forEach((row, index) => {
      row.setAttribute('id', `row${index}`);
      this.observer.observe(row);
    });

    const losCabosObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'white-bg');
        } else {
          this.renderer.removeClass(this.el.nativeElement, 'white-bg');
        }
      });
    });

    const losCabosH1: HTMLElement = this.el.nativeElement.querySelector('h1');
    losCabosObserver.observe(losCabosH1);
  }
}
