import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RosterDetailPage } from './roster-detail.page';

const routes: Routes = [
  {
    path: '',
    component: RosterDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RosterDetailPageRoutingModule {}
