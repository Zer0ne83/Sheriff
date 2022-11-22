import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TSheetHistoryPage } from './tsheet-history.page';

const routes: Routes = [
  {
    path: '',
    component: TSheetHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TSheetHistoryPageRoutingModule {}
