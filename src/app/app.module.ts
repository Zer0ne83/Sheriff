import { InAppPushNoteModalModule } from './modals/inapp-pushnote/inapp-pushnote.module';
import { environment } from './../environments/environment';
import { TSheetAddPageModule } from './modals/detail/tsheet-detail/tsheet-add/tsheet-add.module';
import { TaskAddPageModule } from './modals/detail/task-add/task-add.module';
import { TaskAssigneePageModule } from './modals/detail/task-add/taskassignee/taskassignee.module';
import { NewsAddPageModule } from './modals/detail/news-detail/news-add/news-add.module';
import { RecipientsPageModule } from './modals/detail/news-detail/news-add/recipients/recipients.module';
import { TSheetBreaksPageModule } from './modals/detail/tsheet-detail/tsheet-breaks/tsheet-breaks.module';
import { TSheetHistoryPageModule } from './modals/detail/tsheet-detail/tsheet-history/tsheet-history.module';
import { DetailMenuComponent } from './popovers/detailmenu/detailmenu.component';
import { TSheetDetailPageModule } from './modals/detail/tsheet-detail/tsheet-detail.module';
import { NewsDetailPageModule } from './modals/detail/news-detail/news-detail.module';
import { DatePresetsComponent } from './popovers/datepresets/datepresets.component';
import { PeopleDetailComponent } from './popovers/peopledetail/peopledetail.component';
import { AlertSchedulePageModule } from './modals/alertschedule/alertschedule.module';
import { ProfileCSSelectPageModule } from './modals/profilecsselect/profilecsselect.module';
import { DateRangePageModule } from './modals/daterange/daterange.module';
import { FirstRunPageModule } from './modals/firstrun/firstrun.module';
import { IonicModule, IonicRouteStrategy, Platform, AlertController, NavController, NavParams } from '@ionic/angular';
import { fancyAnimation } from './animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';  
import { Calendar } from '@ionic-native/calendar/ngx';
import { File } from '@ionic-native/file/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { LoggerModule, NGXLogger } from 'ngx-logger';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { CommonModule } from '@angular/common';
import { SQLiteService } from './services/sqlite.service';
import { DetailService } from './services/detail.service';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { SwiperModule } from 'swiper/angular';
import { NgModule } from '@angular/core';
import { NgCalendarModule  } from 'ionic2-calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';
@NgModule({
  declarations: [AppComponent, DatePresetsComponent, DetailMenuComponent, PeopleDetailComponent],
  entryComponents: [DatePresetsComponent, DetailMenuComponent, PeopleDetailComponent],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireMessagingModule,
    BrowserAnimationsModule,
    NgCalendarModule,
    TSheetAddPageModule,
    NewsAddPageModule,
    TaskAddPageModule,
    RecipientsPageModule,
    TaskAssigneePageModule,
    TSheetBreaksPageModule,
    TSheetHistoryPageModule,
    AlertSchedulePageModule,
    InAppPushNoteModalModule,
    ProfileCSSelectPageModule,
    TSheetDetailPageModule,
    NewsDetailPageModule,
    FirstRunPageModule, 
    DateRangePageModule,
    BrowserModule,
    CommonModule,
    IonicModule.forRoot({navAnimation:fancyAnimation, scrollPadding:false, scrollAssist:true }),
    AppRoutingModule,
    LoggerModule.forRoot(environment.logging),
    CommonModule,
    SwiperModule,
    BrowserAnimationsModule
  ],
  providers: [
    SQLiteService,
    DetailService,
    HTTP,
    NavParams,
    FileChooser,
    NGXLogger,
    File, FileTransfer, FilePath,
    InAppBrowser, Platform, AlertController, 
    Calendar,
    StatusBar, SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DatePicker
  ],
  bootstrap: [AppComponent],
  exports: [CommonModule]
})
export class AppModule {}
