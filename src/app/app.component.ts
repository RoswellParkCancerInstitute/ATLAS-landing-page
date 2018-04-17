import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  socialAtlas = [
    {
      targetUrl: 'https://www.facebook.com/TheATLASPgrm/',
      iconUrl: 'assets/logos/facebook.png'
    },
    {
      targetUrl: 'https://twitter.com/TheATLASProgram',
      iconUrl: 'assets/logos/twitter.png'
    },
    {
      targetUrl: 'https://www.linkedin.com/in/the-atlas-program-6544b398/',
      iconUrl: 'assets/logos/linkedin.png'
    }
  ];

  socialUrology = [
    {
      targetUrl: 'https://twitter.com/roswellurology',
      iconUrl: 'assets/logos/twitter.png'
    },
    {
      targetUrl: 'https://www.youtube.com/channel/UCOMz2YGgXGXJ9nDjH4NFePQ',
      iconUrl: 'assets/logos/youtube.png'
    }
  ];
}
