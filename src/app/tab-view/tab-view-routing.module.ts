import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabViewComponent } from './tab-view.component';

const routes: Routes = [
  {
    path: '',
    component: TabViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabViewRoutingModule { }
