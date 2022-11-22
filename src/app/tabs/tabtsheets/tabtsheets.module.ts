import { DirectivesModule } from './../../directives/directives.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { TabTSheetsPage } from './tabtsheets.page';

const routes: Routes = [
  {
    path: '',
    component: TabTSheetsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgCircleProgressModule.forRoot(),
    DirectivesModule
  ],
  declarations: [TabTSheetsPage]
})
export class TabTSheetsPageModule {}
