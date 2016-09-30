import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AngularFireModule }  from 'angularfire2';

import * as firebase from 'firebase';
import 'hammerjs';

import { AppComponent } from './app.component';
// Initialize Firebase
export const firebaseConfig = {
  apiKey: 'AIzaSyBeez93Rtv29FFBDYvbv39SycEg8eWlOss',
  authDomain: 'appinstallendpoint.firebaseapp.com',
  databaseURL: 'https://appinstallendpoint.firebaseio.com',
  storageBucket: 'appinstallendpoint.appspot.com',
  messagingSenderId: '550669602763'
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
