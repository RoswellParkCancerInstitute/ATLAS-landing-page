import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabScoringSheetsComponent } from './tab-scoring-sheets.component';

const routes: Routes = [{
  path: '',
  component: TabScoringSheetsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabScoringSheetsRoutingModule { }
