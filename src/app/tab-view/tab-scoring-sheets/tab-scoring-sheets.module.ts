import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabScoringSheetsRoutingModule } from './tab-scoring-sheets-routing.module';
import { TabScoringSheetsComponent } from './tab-scoring-sheets.component';
import { AppMaterialModulesModule } from '../../app-material-modules/app-material-modules.module';

@NgModule({
  imports: [
    CommonModule,
    TabScoringSheetsRoutingModule,
    AppMaterialModulesModule
  ],
  declarations: [TabScoringSheetsComponent],
  exports: [TabScoringSheetsComponent]
})
export class TabScoringSheetsModule { }
