import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RosterDetailPageRoutingModule } from './roster-detail-routing.module';

import { RosterDetailPage } from './roster-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RosterDetailPageRoutingModule
  ],
  declarations: [RosterDetailPage]
})
export class RosterDetailPageModule {}
