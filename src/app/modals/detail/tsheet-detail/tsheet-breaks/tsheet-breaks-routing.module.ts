import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TSheetBreaksPage } from './tsheet-breaks.page';

const routes: Routes = [
  {
    path: '',
    component: TSheetBreaksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TSheetBreaksPageRoutingModule {}
