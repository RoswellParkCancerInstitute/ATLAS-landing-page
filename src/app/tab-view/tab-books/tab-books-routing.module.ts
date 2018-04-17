import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabBooksComponent } from './tab-books.component';

const routes: Routes = [{
  path: '',
  component: TabBooksComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabBooksRoutingModule { }
