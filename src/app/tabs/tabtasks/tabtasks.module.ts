import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { TabTasksPage } from './tabtasks.page';
import { DirectivesModule } from './../../directives/directives.module';

const routes: Routes = [
  {
    path: '',
    component: TabTasksPage
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
  declarations: [TabTasksPage]
})
export class TabTasksPageModule {}
