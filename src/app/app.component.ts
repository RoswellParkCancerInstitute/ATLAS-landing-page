import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  clicks: FirebaseListObservable<any[]>;
  views: FirebaseListObservable<any[]>;
  registrations: FirebaseListObservable<any[]>;

  registrationDone = false;
  appRegistered = '';
  email = '';

  constructor(private af: AngularFire) {
    this.views = this.af.database.list('views');
    this.clicks = this.af.database.list('clicks');
    this.registrations = this.af.database.list('registrations');
  }

  recordView() {
    this.views.push({
      userAgent: navigator.userAgent,
      timeStamp: new Date().getTime()
    }).then(success => {
      console.log('Saved View');
    }, error => {
      console.log('Save View Error', error);
    });
  };

  recordClick(type, appName) {
    this.clicks.push({
      type: type,
      appName: appName,
      timeStamp: new Date().getTime()
    }).then(success => {
      console.log('Saved Click');
    }, error => {
      console.log('Save Click Error', error);
    });
  };

  registerEmail(appName) {
    this.registrations.push({
      appName: appName,
      email: this.email,
      timeStamp: new Date().getTime()
    }).then(success => {
      console.log('Saved Email');
      this.email = '';
      this.appRegistered = appName;
      this.registrationDone = true;
    }, error => {
      console.log('Save Email Error', error);
    });
  };

  ngOnInit() {
    console.log('init done');
    this.views.push({
      userAgent: navigator.userAgent,
      timeStamp: new Date().getTime()
    }).then(success => {
      console.log('Saved View');
    }, error => {
      console.log('Save View Error', error);
    });

  }
}
