import { NGXLogger } from 'ngx-logger';
import { Component, OnInit } from '@angular/core';
import { Platform, ModalController, NavParams } from '@ionic/angular';
import { DateTimeService } from 'src/app/services/datetime.service';
import { NotificationsService } from 'src/app/services/notifications.service';
import { EventsService } from 'src/app/services/events.service';
import * as $ from 'jquery';
////////////////////////////////////////////////////////////////////////////////////////////////////
@Component({selector:'app-inapppushnotemodal',templateUrl:'./inapp-pushnote.page.html',styleUrls:[]})
////////////////////////////////////////////////////////////////////////////////////////////////////
export class InAppPushNoteModal implements OnInit {
////////////////////////////////////////////////////////////////////////////////////////////////////
  modalId:any='inapp-pushnote-modal';
  modalPNote:any=null;
  modalTitle:any=null;
  modalBody:any=null;
////////////////////////////////////////////////////////////////////////////////////////////////////
  constructor(
    private logger:NGXLogger,
    private modalCtrl:ModalController,
    private navParams:NavParams,
    private dT:DateTimeService,
    private noteServ:NotificationsService,
    private evServ:EventsService,
    private plt:Platform
  ) { }
////////////////////////////////////////////////////////////////////////////////////////////////////
  ngOnInit() { this.logger.info('[Modal|InAppPushNote|ngOnInit] ()...');
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  ionViewDidEnter() { this.logger.info('[Modal|InAppPushNote|ionViewDidEnter] ()...');
    this.plt.ready().then(()=>{
      this.modalPNote=this.navParams.get('pNote');
      this.modalTitle=this.modalPNote.title;
      this.modalBody=this.modalPNote.body;
    })
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  closeModal() { this.logger.info('[Modal|InAppPushNote|closeModal] ()...');
    this.modalCtrl.dismiss(null,'dismiss',this.modalId);
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
}
