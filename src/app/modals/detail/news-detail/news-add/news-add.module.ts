import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NewsAddPage } from './news-add.page';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule
  ],
  declarations: [NewsAddPage]
})
export class NewsAddPageModule {}
