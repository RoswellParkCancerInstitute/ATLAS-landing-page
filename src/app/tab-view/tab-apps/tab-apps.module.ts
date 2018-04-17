import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabAppsRoutingModule } from './tab-apps-routing.module';
import { TabAppsComponent } from './tab-apps.component';
import { AppMaterialModulesModule } from '../../app-material-modules/app-material-modules.module';

@NgModule({
  imports: [
    CommonModule,
    TabAppsRoutingModule,
    AppMaterialModulesModule
  ],
  declarations: [TabAppsComponent],
  exports: [TabAppsComponent]
})
export class TabAppsModule { }
