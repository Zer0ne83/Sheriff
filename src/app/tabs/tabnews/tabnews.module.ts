import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { DirectivesModule } from './../../directives/directives.module';
import { TabNewsPage } from './tabnews.page';


const routes: Routes = [
  {
    path: '',
    component: TabNewsPage
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
  declarations: [TabNewsPage]
})
export class TabNewsPageModule {}
