import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { TabsPage } from './tabs.page';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
//////////////////////////////////////////////////////////////////////////////////////////
const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tabshifts',
        children: [
          {
            path: '',
            loadChildren: () => import('./tabshifts/tabshifts.module').then(m => m.TabShiftsPageModule),
          },
        ],
      },
      {
        path: 'tabrosters',
        children: [
          {
            path: '',
            loadChildren: () => import('./tabrosters/tabrosters.module').then(m => m.TabRostersPageModule),
          },
        ],
      },
      {
        path: 'tabtsheets',
        children: [
          {
            path: '',
            loadChildren: () => import('./tabtsheets/tabtsheets.module').then(m => m.TabTSheetsPageModule),
          },
        ],
      },
      {
        path: 'tabtasks',
        children: [
          {
            path: '',
            loadChildren: () => import('./tabtasks/tabtasks.module').then(m => m.TabTasksPageModule),
          },
        ],
      },
      {
        path: 'tabnews',
        children: [
          {
            path: '',
            loadChildren: () => import('./tabnews/tabnews.module').then(m => m.TabNewsPageModule),
          },
        ],
      },
      {
        path: '',
        redirectTo: '/tabs/tabshifts',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tabshifts',
    pathMatch: 'full',
  },
];
//////////////////////////////////////////////////////////////////////////////////////////
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgCircleProgressModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage],
})
export class TabsPageModule {}
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
