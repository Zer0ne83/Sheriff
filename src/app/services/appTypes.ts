//////////////////////////////////////////////////
export type AppCalendar={id:string,name:string,displayname:string,isPrimary:boolean};
export type AppCalendarList=AppCalendar[];
export function defaultAUUser():AppUserUser {
  const defObj:AppUserUser={
    dp_token:'',
    dp_refresh:'',
    dp_expires:'',
    dp_domain:'',
    fcm_token:'',
  };
  return defObj;
}
//////////////////////////////////////////////////
export type AppUserUser = {
  dp_token:string,      //32
  dp_refresh:string,    //32
  dp_expires:string,    //10
  dp_domain:string,     //28
  fcm_token?:string     //163
}
//////////////////////////////////////////////////
export function defaultAUSettings():AppUserSettings {
  let dAUS:AppUserSettings={
    alerts:{
      showSection:true,
      options:{
        alertCal:{value:null,info:false},
        alertMethods:{value:{phone:true,calendar:true,email:false},info:false},
        alertEvents:{value:{shift:true,task:false,tsheet:true},info:false},
        alertBefore:{value:{task:{range:2,mins:60},shift:{range:1,mins:30},tsheet:{range:2,mins:10}},info:false}
      }
    },
    database:{
      showSection:true,
      options:{
        backupMode:{value:'auto',info:false},
        backupActions:{info:false}
      }
    },
    profile:{
      showSection:false,
      options:{alwaysSync:{value:false,info:false}}
    },
    payrates:{
      showSection:false,
      options:{show:{value:true,info:false}}
    },
    snoop:{
      showSection:false,
      options:{activated:{value:true,info:false}}
    }
  };
  return dAUS;
}
//////////////////////////////////////////////////
export function AUSAlertRange2Value(aEvent:string,rangeVal:number):number {
  const sTO:any={1:30,2:60,3:90,4:120,5:360,6:720};const tsO:any={1:5,2:10,3:15,4:20,5:25,6:30};
  if(aEvent==='shift'||aEvent==='task'){return sTO[rangeVal]}else{return tsO[rangeVal]};
}
//////////////////////////////////////////////////
export type AppUserSettings = {
  alerts:{
    showSection:boolean,
    options:{
      alertCal:{value:string|null,info:boolean},
      alertMethods:{value:{phone:boolean,calendar:boolean,email:boolean},info:boolean},
      alertEvents:{value:{shift:boolean,task:boolean,tsheet:boolean},info:boolean},
      alertBefore:{value:{task:{range:number&1|2|3|4|5|6,mins:number&30|60|90|120|360|720},shift:{range:number&1|2|3|4|5|6,mins:number&30|60|90|120|360|720},tsheet:{range:number&1|2|3|4|5|6,mins:number&5|10|15|20|25|30}},info:boolean}
    }
  }
  database:{
    showSection:boolean,
    options:{
      backupMode:{value:string&'user'|'auto'|'none',info:boolean},
      backupActions:{info:boolean}
    }
  }
  profile:{
    showSection:boolean,
    options:{alwaysSync:{value:boolean,info:boolean}}
  },
  payrates:{
    showSection:boolean,
    options:{show:{value:boolean,info:boolean}}
  },
  snoop:{
    showSection:boolean,
    options:{activated:{value:boolean,info:boolean}}
  }
}
//////////////////////////////////////////////////
export const testShift={
  "Id": 7777,
  "Date": "2022-02-28T00:00:00+08:00",
  "StartTime": 1646013600,
  "EndTime": 1646028000,
  "Mealbreak": "2022-02-27T00:00:00+08:00",
  "Slots": [
      {
          "blnEmptySlot": false,
          "strType": "B",
          "intStart": 0,
          "intEnd": 0,
          "intUnixStart": 1646013600,
          "intUnixEnd": 1646013600,
          "mixedActivity": {
              "intState": 3,
              "blnCanStartEarly": 1,
              "blnCanEndEarly": 1,
              "blnIsMandatory": 1,
              "strBreakType": "M"
          },
          "strTypeName": "Meal Break",
          "strState": "Scheduled Duration"
      }
  ],
  "TotalTime": 4,
  "Cost": 0,
  "OperationalUnit": 6,
  "Employee": 421,
  "Comment": "",
  "Warning": "Stressed : Too many hours in a shift. Max 7.6 for Normal 38 hours per week| Stressed : Too many hours in a day. Max 7.6 for Normal 38 hours per week",
  "WarningOverrideComment": "Override by Renee Coyle on Tue 22/02/22 12:05 PM",
  "Published": true,
  "MatchedByTimesheet": 0,
  "CustomFieldData": null,
  "Open": false,
  "ApprovalRequired": false,
  "ConfirmStatus": 0,
  "ConfirmComment": "",
  "ConfirmBy": 0,
  "ConfirmTime": 0,
  "SwapStatus": 0,
  "SwapManageBy": null,
  "ShiftTemplate": 1,
  "ConnectStatus": null,
  "Creator": 406,
  "Created": "2022-02-22T12:05:53+08:00",
  "Modified": "2022-02-22T12:12:04+08:00",
  "OperationalUnitObject": {
      "Id": 6,
      "Creator": 1,
      "Created": "2018-12-31T19:42:41+08:00",
      "Modified": "2020-09-01T14:30:35+08:00",
      "Company": 1,
      "WorkType": null,
      "ParentOperationalUnit": 0,
      "OperationalUnitName": "Bar",
      "Active": true,
      "PayrollExportName": "",
      "Address": 162,
      "Contact": null,
      "RosterSortOrder": 1,
      "ShowOnRoster": true,
      "Colour": "#f93c3c",
      "RosterActiveHoursSchedule": null,
      "DailyRosterBudget": null,
      "OperationalUnitType": 0,
      "CompanyCode": "DOG",
      "CompanyName": "Duke Of George",
      "AddressObject": {
          "Id": 162,
          "ContactName": null,
          "UnitNo": null,
          "StreetNo": null,
          "SuiteNo": null,
          "PoBox": null,
          "Street1": "135 George Street, East Fremantle WA 6158, Australia",
          "Street2": null,
          "City": null,
          "State": null,
          "Postcode": null,
          "Country": 13,
          "Phone": null,
          "Notes": null,
          "Format": null,
          "Saved": null,
          "Creator": 1,
          "Created": "2018-12-31T19:59:59+08:00",
          "Modified": "2018-12-31T19:59:59+08:00",
          "Print": "135 George Street, East Fremantle WA 6158, Australia\n"
      }
  }
};
//////////////////////////////////////////////////
//////////////////////////////////////////////////