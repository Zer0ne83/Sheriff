import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileCSSelectPage } from './profilecsselect.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileCSSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileCSSelectPageRoutingModule {}
