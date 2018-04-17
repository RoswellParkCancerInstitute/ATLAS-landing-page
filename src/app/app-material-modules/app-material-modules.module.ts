import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule, MatButtonModule, MatCardModule, MatIconModule } from '@angular/material';


@NgModule({
  imports: [
    // CommonModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ],
  declarations: [],
  exports:[
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ]
})
export class AppMaterialModulesModule { }
