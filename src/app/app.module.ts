import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { AppComponent } from './app.component';
import { AppMaterialModulesModule } from './app-material-modules/app-material-modules.module';
import { TabViewModule } from './tab-view/tab-view.module';
import { AppRoutingModule } from './app-routing.module';
import { SocialToolbarComponent } from './social-toolbar/social-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppMaterialModulesModule,
    AppRoutingModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
