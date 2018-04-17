import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabBooksRoutingModule } from './tab-books-routing.module';
import { TabBooksComponent } from './tab-books.component';
import { AppMaterialModulesModule } from '../../app-material-modules/app-material-modules.module';

@NgModule({
  imports: [
    CommonModule,
    TabBooksRoutingModule,
    AppMaterialModulesModule
  ],
  declarations: [TabBooksComponent],
  exports: [TabBooksComponent]
})
export class TabBooksModule { }
