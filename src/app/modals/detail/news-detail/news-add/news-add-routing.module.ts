import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsAddPage } from './news-add.page';
const routes: Routes = [
  {
    path: '',
    component: NewsAddPage
  },
  {
    path: 'recipients',
    loadChildren: () => import('./recipients/recipients.module').then( m => m.RecipientsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TSheetAddPageRoutingModule {}
