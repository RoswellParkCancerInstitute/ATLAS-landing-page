import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabAppsComponent } from './tab-apps.component';

const routes: Routes = [{
  path: 'apps',
  component: TabAppsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabAppsRoutingModule { }
