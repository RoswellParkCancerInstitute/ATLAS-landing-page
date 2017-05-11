import { Component, ViewEncapsulation } from '@angular/core';
// import { Location } from '@angular/common';
import { ListItem, ListItemTypes } from 'app/types';
@Component({
  selector: 'app-tab-view',
  templateUrl: './tab-view.component.html',
  styleUrls: ['./tab-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TabViewComponent {

  tabs = [
    {
      name: 'Surgery Scoring Sheets',
      type: ListItemTypes.ScoreSheet,
      icon: 'insert_drive_file',
      selected: true,
      disabled: false
    },
    {
      name: 'Mobile Apps',
      type: ListItemTypes.MobileApp,
      icon: 'smartphone',
      selected: true,
      disabled: false
    },
    // {
    //   name: 'Web Apps',
    //   type: ItemTypes.WebApp,
    //   icon: 'desktop_windows',
    //   selected: false,
    //   disabled: true
    // }

  ];
  itemTypes = ListItemTypes;
  items: ListItem[] = [
    {
      name: 'BCG Treatment',
      description: 'For Bladder Cancer Patients',
      icon: '../assets/icons/icon_bcg.png',
      type: ListItemTypes.MobileApp,
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
      type: ListItemTypes.MobileApp,
      disabled: false,
      links: {
        ios: 'https://geo.itunes.apple.com/us/app/bcg-treatment/id948407412?mt=8',
        android: 'https://play.google.com/store/apps/details?id=org.roswellpark.theatlasprogram.pelvicrehab'
      }
    },
    {
      name: 'CASE',
      description: 'Cystectomy Assessment and Surgical Evaluation',
      icon: '../assets/icons/icon_case.png',
      type: ListItemTypes.ScoreSheet,
      disabled: false,
      links: {
        // file: '../assets/surgical-scoring-systems/CASE.pdf',
        file: 'gs://appinstallendpoint.appspot.com/RACE.pdf',
        download_url: 'https://firebasestorage.googleapis.com/v0/b/appinstallendpoint.appspot.com/o/CASE.pdf?alt=media'
      }
    },
    {
      name: 'PACE',
      description: 'Prostatectomy Assessment and Competency Evaluation',
      icon: '../assets/icons/icon_pace.png',
      type: ListItemTypes.ScoreSheet,
      disabled: false,
      links: {
        file: './assets/surgical-scoring-systems/PACE.pdf',
        download_url: 'https://firebasestorage.googleapis.com/v0/b/appinstallendpoint.appspot.com/o/PACE.pdf?alt=media'
      }
    },
    {
      name: 'PLACE',
      description: 'Pelvic Lymphadenectomy Appropriateness and Completion Evaluation',
      icon: '../assets/icons/icon_place.png',
      type: ListItemTypes.ScoreSheet,
      disabled: false,
      links: {
        file: '../../assets/surgical-scoring-systems/PLACE.pdf',
        download_url: 'https://firebasestorage.googleapis.com/v0/b/appinstallendpoint.appspot.com/o/PLACE.pdf?alt=media'
      }
    },
    {
      name: 'RACE',
      description: 'Robotic Anastomosis Competency Evaluation',
      icon: '../assets/icons/icon_race.png',
      type: ListItemTypes.ScoreSheet,
      disabled: false,
      links: {
        file: '../assets/surgical-scoring-systems/RACE.pdf',
        download_url: 'https://firebasestorage.googleapis.com/v0/b/appinstallendpoint.appspot.com/o/RACE.pdf?alt=media'
      }
    },
    {
      name: 'RHAS',
      description: 'Robotic Hysterectomy Assessment Score',
      icon: '../assets/icons/icon_rhas.png',
      type: ListItemTypes.ScoreSheet,
      disabled: true,
      links: {
        file: '',
        download_url: ''
      }
    }
  ];

  filteredItems: ListItem[] = [];

  constructor() {
    // this.refreshList();
  }

  // toggleFilter(index) {
  //   this.tabs[index].selected = !this.tabs[index].selected;
  //   this.refreshList();
  // }
  // refreshList() {
  //   const currentFilters = this.tabs.filter(item => item.selected).map(item => item.type);
  //   this.filteredItems = this.items.filter((item: ListItem) => (currentFilters.indexOf(item.type) >= 0));
  // }

  openEmail(item: ListItem) {
    const newLine = '\n';
    const subject = `${item.name} : Surgery Scoring Sheet : ATLAS`;
    const body = `Hello,` + newLine + newLine +
      `You can download the ${item.name} Score Sheet using the link below:` + newLine +
      `${item.links.download_url}` + newLine +
      `If the above link doesn't work, please copy and paste it in your browser.` + newLine + newLine +
      `Thank You,` + newLine +
      `The ATLAS Program` + newLine +
      `Roswell Park Cancer Institute`;

    const str = `?subject=${subject}&body=${body} `;
    let formatted = encodeURI(str);
    formatted = 'mailto:' + formatted;
    console.log(str, formatted);
    // Change location to mailto: so it will open the default mail app
    window.location.href = formatted;
    return formatted;
  }
}
