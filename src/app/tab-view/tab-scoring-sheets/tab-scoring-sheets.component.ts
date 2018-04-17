import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-scoring-sheets',
  templateUrl: './tab-scoring-sheets.component.html',
  styleUrls: ['./tab-scoring-sheets.component.scss']
})
export class TabScoringSheetsComponent implements OnInit {

  items = [{
    name: 'CASE',
    description: 'Cystectomy Assessment and Surgical Evaluation',
    icon: '../assets/icons/icon_case.png',
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
    disabled: true,
    links: {
      file: '',
      download_url: ''
    }
  }];
  constructor() { }

  ngOnInit() {
  }
  openEmail(item: any) {
    (<any>window).ga('send', 'event', {
      eventCategory: 'File Email',
      eventLabel: item.name,
      eventAction: 'download',
      eventValue: 1
    });

    const newLine = '\n';
    const subject = `${item.name} : Surgery Scoring Sheet : ATLAS`;
    const body = `Hello,` + newLine + newLine +
      `You can download the ${item.name} Score Sheet using the link below:` + newLine +
      `${item.links.download_url}` + newLine +
      `If the above link doesn't work, please copy and paste it in your browser.` + newLine + newLine +
      `Thank You,` + newLine +
      `The ATLAS Program` + newLine +
      `Roswell Park Comprehensive Cancer Center`;

    const str = `?subject=${subject}&body=${body} `;
    let formatted = encodeURI(str);
    formatted = 'mailto:' + formatted;
    console.log(str, formatted);
    // Change location to mailto: so it will open the default mail app
    window.location.href = formatted;
    return formatted;
  }

  trackOnClick(item) {
    (<any>window).ga('send', 'event', {
      eventCategory: 'Scoring Sheet Button',
      eventLabel: item.name,
      eventAction: 'click',
      eventValue: 1
    });
    (<any>window).ga('send', 'event', {
      eventCategory: 'File Download',
      eventLabel: item.name,
      eventAction: 'download',
      eventValue: 1
    });
  }

}
