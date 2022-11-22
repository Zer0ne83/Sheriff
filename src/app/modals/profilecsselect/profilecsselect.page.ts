import { NGXLogger } from 'ngx-logger';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { SQLiteService } from 'src/app/services/sqlite.service';
////////////////////////////////////////////////////////////////////////////////////////////////////
@Component({selector:'app-profilecsselect',templateUrl:'./profilecsselect.page.html',styleUrls:[]})
////////////////////////////////////////////////////////////////////////////////////////////////////
export class ProfileCSSelectPage implements OnInit {
////////////////////////////////////////////////////////////////////////////////////////////////////
  alertId:any;
  listType:string;
  labelProp:string;
  listData:any[]=[];
  noSelection:boolean;
  selectedId:number|null=null;
  selectedSubT:string|null=null;
  minSBCs:number=3;
  sbCs:number=0;
  isSearch:boolean=false;
////////////////////////////////////////////////////////////////////////////////////////////////////
  constructor(
    private logger:NGXLogger,
    private modalCtrl:ModalController,
    private navParams:NavParams,
    private sqlServ:SQLiteService
  ) { }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async ngOnInit(){
    const alertId=await this.modalCtrl.getTop();
    this.alertId=alertId.id;
    this.listType=this.navParams.get('listType');
    console.log(this.navParams.get('selected'));
    this.selectedId=this.navParams.get('selected');
    if(this.listType==='c'){
      this.labelProp='Country';
      if(this.selectedId!==null){
        this.selectedSubT=(await this.sqlServ.getSingleCountry(this.selectedId)).data.Country;this.noSelection=false}else{this.noSelection=true};
    }else{
      this.labelProp='State';
      if(this.selectedId!==null){this.selectedSubT=(await this.sqlServ.getSingleState(this.selectedId)).data.State;this.noSelection=false}else{this.noSelection=true};
      const cId:number=this.navParams.get('country');
      const stateListRes:any[]=(await this.sqlServ.getStates(cId)).data;
      if(stateListRes.length>0){
        let localListData:any[]=[];
        for(let i=0;i<stateListRes.length;i++){const stateO:any=stateListRes[i];localListData.push({id:stateO.Id,label:stateO.State,isChecked:false})};
        if(!this.noSelection){const selSIndex:number=localListData.findIndex(sO=>sO.id===this.selectedId);if(selSIndex!==-1){localListData[selSIndex].isChecked=true}};
        this.listData=localListData
      }
    }
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  async countrySearch(inputVal:string){
    this.sbCs=inputVal.length;
    if(this.sbCs>=this.minSBCs){
      this.listData=[];this.isSearch=true;let qCResList:any[]=[];
      const qCRes:any[]=await this.sqlServ.qCountry(inputVal);
      if(qCRes.length>0){
        for(let i=0;i<qCRes.length;i++){const qC:any=qCRes[i];qCResList.push({id:qC.Id,label:qC.Country,isChecked:false})};
        if(!this.noSelection){const selCIndex:number=qCResList.findIndex(cO=>cO.Id===this.selectedId);if(selCIndex!==-1){qCResList[selCIndex].isChecked=true}};
        this.listData=qCResList;
        this.isSearch=false;
      }else{this.isSearch=false}
    }
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  cancelChange(){this.logger.info('[CANCEL]');this.modalCtrl.dismiss(null,'cancel',this.alertId)}
////////////////////////////////////////////////////////////////////////////////////////////////////
  selectItem(item:any){this.modalCtrl.dismiss({v:item.id,l:item.label},'new',this.alertId)}
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
}
