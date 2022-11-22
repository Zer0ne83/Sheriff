import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { TabRostersPage } from './tabrosters.page';
import { NgCalendarModule } from 'ionic2-calendar';
import { registerLocaleData } from '@angular/common';
import localeAu from '@angular/common/locales/en-AU';
registerLocaleData(localeAu);

const routes: Routes = [
  {
    path: '',
    component: TabRostersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgCircleProgressModule.forRoot(),
    NgCalendarModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  declarations: [TabRostersPage],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-AU'}
  ],
  exports: [CommonModule]
})
export class TabRostersPageModule {}
