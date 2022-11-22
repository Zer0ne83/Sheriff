import { NGXLogger } from 'ngx-logger';
import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';
////////////////////////////////////////////////////////////////////////////////////////////////////
@Component({selector:'app-peopledetail',templateUrl:'./peopledetail.component.html',styleUrls:[]})
////////////////////////////////////////////////////////////////////////////////////////////////////
export class PeopleDetailComponent implements OnInit {
////////////////////////////////////////////////////////////////////////////////////////////////////
  me:any;
  meObj:any;
  meAva:string;
  people:any[]=[];
  pplConfStatus:any[]=[];
  logs:any[]=[];
  confReq:boolean;
  meConf:boolean;
  myEmpId:number;
////////////////////////////////////////////////////////////////////////////////////////////////////
  constructor(
    private logger:NGXLogger,
    private popover:PopoverController,
    private navParams: NavParams
  ) { }
////////////////////////////////////////////////////////////////////////////////////////////////////
  ngOnInit() {
    this.logger.info('[Popover|PeopleDetail|ngOnInit] ()...');
    const rawPeople:any[]=this.navParams.get('people');
    console.log(rawPeople);
    const rawLogs:any[]=this.navParams.get('logs');
    console.log(rawLogs);
    const rawConfReq:boolean=this.navParams.get('confReq');
    console.log(rawConfReq);
    const rawMeConf:boolean=this.navParams.get('meConf');
    console.log(rawMeConf);
    const rawMe:any=this.navParams.get('me');
    console.log(rawMe);
    this.myEmpId=rawMe.obj.EmployeeId;
    console.log(this.myEmpId);
    if(rawConfReq){
      for(let p=0;p<rawPeople.length;p++){ const pId:number=rawPeople[p]['Employee'];
        let hasConf:boolean;const pLog:any[]=rawLogs.filter(l=>l.User===pId);
        if(pLog.length>0){hasConf=pLog[0]['Confirmed']}else{hasConf=null};
        this.pplConfStatus.push(hasConf);
      }
    }
    console.log(this.people.length);
    console.log(this.pplConfStatus.length);
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  closePopover() {
    this.logger.info('[Popover|PeopleDetail|closePopover] ()...');
    this.popover.dismiss({data:null,role:'dismiss'})
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
}
