import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  socialAtlas = [
    {
      targetUrl: 'https://www.facebook.com/TheATLASPgrm/',
      iconUrl: 'assets/logos/facebook.png',
      name: 'Facebook ATLAS'
    },
    {
      targetUrl: 'https://twitter.com/TheATLASProgram',
      iconUrl: 'assets/logos/twitter.png',
      name: 'Twitter ATLAS'
    },
    {
      targetUrl: 'https://www.linkedin.com/in/the-atlas-program-6544b398/',
      iconUrl: 'assets/logos/linkedin.png',
      name: 'LinkedIn ATLAS'
    }
  ];

  socialUrology = [
    {
      targetUrl: 'https://twitter.com/roswellurology',
      iconUrl: 'assets/logos/twitter.png',
      name: 'Twitter Urology'
    },
    {
      targetUrl: 'https://www.youtube.com/channel/UCOMz2YGgXGXJ9nDjH4NFePQ',
      iconUrl: 'assets/logos/youtube.png',
      name: 'YouTube Urology'
    }
  ];

  constructor(private router: Router) {
    // Subscribe to route change events and record to Google Analytics
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (<any>window).ga('set', 'page', event.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
      }
    });
  }
}
