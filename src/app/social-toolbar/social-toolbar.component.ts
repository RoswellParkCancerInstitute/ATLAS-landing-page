import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social-toolbar',
  templateUrl: './social-toolbar.component.html',
  styleUrls: ['./social-toolbar.component.scss']
})
export class SocialToolbarComponent implements OnInit {
  @Input() label;
@Input() items = [];
  constructor() { }

  ngOnInit() {
  }

  trackOnClick(item) {
    (<any>window).ga('send', 'event', {
      eventCategory: 'Social Button',
      eventLabel: item.name,
      eventAction: 'click',
      eventValue: 1
    });
  }
}
