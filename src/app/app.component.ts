import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Geo-Tracker';
  isMobile: boolean;
  isLoggedIn: boolean;
  isVerified: boolean;

  constructor(
    // private media: ObservableMedia,
  ) {
  }

  ngOnInit() {
    this.subscribeToScreenSizeChanges();
    let isLoggedIn = localStorage.getItem("isLoggin");
    if (isLoggedIn === "1") {
      this.isVerified = true;
    } else {
      this.isVerified = false;
    }
  }

  otpVerifiedFromLogin = (confirm: boolean) => {
    this.isVerified = confirm;
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
