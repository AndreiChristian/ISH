import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FullscreenService {
  constructor() {}

  toggleFullScreen(): void {
    const doc = document.documentElement;

    if (!document.fullscreenElement) {
      if (doc.requestFullscreen) {
        doc.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }
}
