import { Component, AfterViewInit, Inject, PLATFORM_ID, importProvidersFrom } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import * as THREE from 'three';
import CLOUDS2 from 'vanta/dist/vanta.clouds.min';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {

  vantaEffect: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.vantaEffect = CLOUDS2({
        // el: '#vanta-bg',
        el: document.body,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: window.innerHeight ,
      minWidth: window.innerWidth
      });
    }
  }
}
