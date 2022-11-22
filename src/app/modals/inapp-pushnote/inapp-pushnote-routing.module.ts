import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InAppPushNoteModal } from './inapp-pushnote.page';

const routes: Routes = [
  {
    path: '',
    component: InAppPushNoteModal
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InAppPushNoteModalRoutingModule {}
