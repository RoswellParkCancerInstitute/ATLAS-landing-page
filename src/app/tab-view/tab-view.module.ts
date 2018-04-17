import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabViewRoutingModule } from './tab-view-routing.module';
import { TabViewComponent } from './tab-view.component';
import { AppMaterialModulesModule } from '../app-material-modules/app-material-modules.module';
import { TabAppsModule } from './tab-apps/tab-apps.module';
import { TabBooksModule } from './tab-books/tab-books.module';
import { TabScoringSheetsModule } from './tab-scoring-sheets/tab-scoring-sheets.module';

@NgModule({
  imports: [
    CommonModule,
    TabViewRoutingModule,
    AppMaterialModulesModule,
    TabAppsModule,
    TabBooksModule,
    TabScoringSheetsModule
  ],
  declarations: [TabViewComponent]
})
export class TabViewModule { }
