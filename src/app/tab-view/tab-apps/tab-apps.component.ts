import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-apps',
  templateUrl: './tab-apps.component.html',
  styleUrls: ['./tab-apps.component.scss']
})
export class TabAppsComponent implements OnInit {
  items = [
    {
      name: 'BCG Treatment',
      description: 'For Bladder Cancer Patients',
      icon: '../assets/icons/icon_bcg.png',
      disabled: false,
      links: {
        ios: 'https://geo.itunes.apple.com/us/app/bcg-treatment/id948407412?mt=8',
        android: 'https://play.google.com/store/apps/details?id=org.roswellpark.theatlasprogram.bcg'
      }
    },
    {
      name: 'Pelvic Rehab',
      description: 'For Prostatectomy Patients',
      icon: '../assets/icons/icon_pelvicrehab.png',
      disabled: false,
      links: {
        ios: 'https://geo.itunes.apple.com/us/app/bcg-treatment/id948407412?mt=8',
        android: 'https://play.google.com/store/apps/details?id=org.roswellpark.theatlasprogram.pelvicrehab'
      }
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
