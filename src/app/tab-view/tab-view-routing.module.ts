import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabViewComponent } from './tab-view.component';

const routes: Routes = [
  {
    path: '',
    component: TabViewComponent,
    children : [
      {
        path: 'mobile-apps',
        loadChildren: 'app/tab-view/tab-apps/tab-apps.module#TabAppsModule'
      },
      {
        path: 'books',
        loadChildren: './tab-books/tab-books.module#TabBooksModule'
      },
      {
        path: 'scoring-sheets',
        loadChildren: './tab-scoring-sheets/tab-scoring-sheets.module#TabScoringSheetsModule'
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'mobile-apps'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabViewRoutingModule { }
