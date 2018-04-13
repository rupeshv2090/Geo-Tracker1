import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Geo-Tracker';
  isMobile: boolean;


  constructor(
    //private media: ObservableMedia,
  ) {
  }

  ngOnInit() {
    this.subscribeToScreenSizeChanges();
  }

  private subscribeToScreenSizeChanges() {
    // this.media.subscribe((mediaChange: MediaChange) => {
    //   if (this.media.isActive('gt-md')) {
    //     // desktop screen size activated
    //     this.setDisplayMode(ScreenSize.desktop);
    //   } else {
    //     // mobile screen size activated
    //     this.setDisplayMode(ScreenSize.mobile);
    //   }
    // });
  }

  private setDisplayMode(mode: ScreenSize) {
    if (mode === ScreenSize.desktop) {
      // desktop
      this.isMobile = false;

    } else {
      // mobile
      this.isMobile = true;
    }
  }
}

enum ScreenSize {
  mobile,
  desktop
}
