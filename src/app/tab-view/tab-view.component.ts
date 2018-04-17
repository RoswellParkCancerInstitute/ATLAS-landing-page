import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-view',
  templateUrl: './tab-view.component.html',
  styleUrls: ['./tab-view.component.scss']
})
export class TabViewComponent implements OnInit {
  activeTabIndex = 0;
  tabRoutes = [
    {
      label: 'Mobile Apps',
      link: '/mobile-apps',
      index: 0
    },
    {
      label: 'Books',
      link: '/books',
      index: 1
    },
    {
      label: 'Scoring Sheets',
      link: '/scoring-sheets',
      index: 2
    }
  ];
  constructor(private router: Router) { }

  ngOnInit() {
    switch (this.router.url) {
      case '/mobile-apps':
        this.activeTabIndex = 0;
        break;
      case '/books':
        this.activeTabIndex = 1;
        break;
      case '/scoring-sheets':
        this.activeTabIndex = 2;
        break;
      default:
        this.activeTabIndex = 0;
        break;
    }

    // console.log(this.router.url,typeof this.router.url, this.activeTabIndex);

  }
  onSelectedTabChange(event: MatTabChangeEvent) {
    console.log('Selected Tab Index: ', event.index);
  }
  onSelectedIndexChange(index: number) {
    console.log('Selected Index: ', index);
  }

}
