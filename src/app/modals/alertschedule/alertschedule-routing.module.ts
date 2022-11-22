import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertSchedulePage } from './alertschedule.page';

const routes: Routes = [
  {
    path: '',
    component: AlertSchedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertSchedulePageRoutingModule {}
