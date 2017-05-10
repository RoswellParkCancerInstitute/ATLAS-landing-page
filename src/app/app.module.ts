import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// import { BrowserAnimationsModule } from '@angular/animations/browser/';
// import { Browser } from '@angular/animations';

import { AppComponent } from './app.component';
import { TabViewComponent } from './components/tab-view/tab-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TabViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
