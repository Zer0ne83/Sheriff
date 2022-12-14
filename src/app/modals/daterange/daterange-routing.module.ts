import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DateRangePage } from './daterange.page';

const routes: Routes = [
  {
    path: '',
    component: DateRangePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaterangePageRoutingModule {}
