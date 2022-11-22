import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { NgCircleProgressModule } from 'ng-circle-progress';
//import { DirectivesModule } from './../../directives/directives.module';
import { TabShiftsPage } from './tabshifts.page';

const routes: Routes = [
  {
    path: '',
    component: TabShiftsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgCircleProgressModule.forRoot(),
    //DirectivesModule
  ],
  declarations: [TabShiftsPage]
})
export class TabShiftsPageModule {}
