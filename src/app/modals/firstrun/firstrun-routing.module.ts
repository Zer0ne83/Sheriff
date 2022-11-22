import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstRunPage } from './firstrun.page';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: FirstRunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class FirstRunPageRoutingModule {}
