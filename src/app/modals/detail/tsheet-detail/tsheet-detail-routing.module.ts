import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TSheetDetailPage } from './tsheet-detail.page';

const routes: Routes = [
  {
    path: '',
    component: TSheetDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TSheetDetailPageRoutingModule {}
