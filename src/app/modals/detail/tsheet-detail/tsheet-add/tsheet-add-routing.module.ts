import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TSheetAddPage } from './tsheet-add.page';
const routes: Routes = [
  {
    path: '',
    component: TSheetAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TSheetAddPageRoutingModule {}
