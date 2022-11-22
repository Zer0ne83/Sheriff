import { NGXLogger } from 'ngx-logger';
import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';
////////////////////////////////////////////////////////////////////////////////////////////////////
@Component({selector:'app-datepresets',templateUrl:'./datepresets.component.html',styleUrls:[]})
////////////////////////////////////////////////////////////////////////////////////////////////////
export class DatePresetsComponent implements OnInit {
////////////////////////////////////////////////////////////////////////////////////////////////////
  presets:any = [
    {name:'week',label:'Week',selected:false},
    {name:'fnight',label:'FNight',selected:false},
    {name:'month',label:'Month',selected:false},
    {name:'qtr',label:'Qtr',selected:false},
    {name:'half',label:'Half',selected:false},
    {name:'year',label:'Year',selected:false},
    {name:'all',label:'All',selected:false},
  ];
  selectedName:string;
////////////////////////////////////////////////////////////////////////////////////////////////////
  constructor(
    private logger:NGXLogger,
    private popover:PopoverController,
    private navParams: NavParams
  ) { }
////////////////////////////////////////////////////////////////////////////////////////////////////
  ngOnInit(){this.selectedName=this.navParams.get('selectedName')}
////////////////////////////////////////////////////////////////////////////////////////////////////
  async ionViewWillEnter(){for(let i=0;i<this.presets.length;i++){this.presets[i].name===this.selectedName?this.presets[i].selected=true:this.presets[i].selected=false}}
////////////////////////////////////////////////////////////////////////////////////////////////////
  presetSelect(name:string,index:number){
    this.logger.info('[DatePresets|presetSelect] ('+name+')');
    for(let i=0;i<this.presets.length;i++){i===index?this.presets[i].selected=true:this.presets[i].selected=false};
    let isSame:boolean;this.selectedName===name?isSame=true:isSame=false;
    this.closePopover(name,isSame);
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  closePopover(selName:string,selSame:boolean) {
    let myRole:string;selSame===true?myRole='same':myRole='new';
    this.popover.dismiss(selName,myRole);
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
}