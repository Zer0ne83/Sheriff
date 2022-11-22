export const resCustomAppData:any[]=[
  ///// BIRTHDAY NOTIFICATIONS ////////////////////////////////////////////////////////////////////
  //--- AUTH --------------------------------------------------------------------------------------
  {
      "Id": 179,
      "DocumentId": "DPDispatchAuth",
      "Data": {
          "strAuthType": "deputy",
          "strDPOAuthToken": "d36a0811170987f316ad626f8d71fcb9",
          "strDPDomain": "https://6a199e28095242.au.deputy.com/",
          "intDPCompany": 0,
          "strDPRenewCallBack": "https://service-proxy.deputy.com//dispatch/renew.php?u=6a199e28095242.au.deputy.com_0&h=c55e0f9c053bd82cacfbffecacbfc315e2d7c33dc40aba69b21ece34eb0d5c1b&n=1545994379.981&a=eyJkb21haW5fcHJlZml4IjoiNmExOTllMjgwOTUyNDIuYXUiLCJhY2Nlc3NfdG9rZW4iOiJkMzZhMDgxMTE3MDk4N2YzMTZhZDYyNmY4ZDcxZmNiOSIsImNvbXBhbnkiOjAsInNlcnZpY2UiOiJEZXB1dHlTZXJ2aWNlX0JpcnRoZGF5Tm90aWZ5In0%3D&t=HMAC-SHA256&service=DeputyService_BirthdayNotify",
          "strDPHomeCallBack": "https://service-proxy.deputy.com//dispatch/homecall.php?u=6a199e28095242.au.deputy.com_0&h=c55e0f9c053bd82cacfbffecacbfc315e2d7c33dc40aba69b21ece34eb0d5c1b&n=1545994379.981&a=eyJkb21haW5fcHJlZml4IjoiNmExOTllMjgwOTUyNDIuYXUiLCJhY2Nlc3NfdG9rZW4iOiJkMzZhMDgxMTE3MDk4N2YzMTZhZDYyNmY4ZDcxZmNiOSIsImNvbXBhbnkiOjAsInNlcnZpY2UiOiJEZXB1dHlTZXJ2aWNlX0JpcnRoZGF5Tm90aWZ5In0%3D&t=HMAC-SHA256&service=DeputyService_BirthdayNotify",
          "intCompany": 0,
          "coreservice": null,
          "url": null,
          "blank": "blank"
      },
      "KeyInt": 1,
      "KeyString": "DEPUTY",
      "Label": null,
      "OperationalUnit": null,
      "Employee": null,
      "Permission": {
          "com": "1",
          "wkp": "1"
      },
      "Creator": 1,
      "Created": "2018-12-28T18:53:04+08:00",
      "Modified": "2019-01-26T02:10:45+08:00"
  },
  //--- DISPATCH ------------------------------------------------------------------------------------
  {
      "Id": 180,
      "DocumentId": "DPDispatch",
      "Data": {
          "intAuthId": 179,
          "objJob": {
              "strName": "DeputyService_BirthdayNotify",
              "strFetchMethod": "dplab_get_birthdays",
              "strPushMethod": "dplab_do_notification_to_emp",
              "strPreRunMethod": null,
              "strProcessDataMethod": null,
              "strPostRunMethod": null,
              "strAuthType": "deputy",
              "strDirection": "from",
              "strDPAuthValidateUrl": null,
              "strDPPrefixForData": "deputy"
          },
          "objMapping": [],
          "objConfig": {
              "notify_who": "manager"
          },
          "state": 0
      },
      "KeyInt": 1545994390,
      "KeyString": "1",
      "Label": null,
      "OperationalUnit": null,
      "Employee": null,
      "Permission": {
          "com": "1",
          "wkp": "1"
      },
      "Creator": 1,
      "Created": "2018-12-28T18:53:11+08:00",
      "Modified": "2019-01-26T02:14:40+08:00"
  },
  //--- STATUS ------------------------------------------------------------------------------------
  {
      "Id": 181,
      "DocumentId": "DPDispatchStatus",
      "Data": {
          "JobId": 180,
          "Label": "No records found.",
          "intTSFetchDataFrom": "1548431680",
          "intStatusTime": "1548439798",
          "blnRunning": "0"
      },
      "KeyInt": 180,
      "KeyString": "No records found.",
      "Label": null,
      "OperationalUnit": null,
      "Employee": null,
      "Permission": {
          "com": "0",
          "wkp": "0"
      },
      "Creator": 1,
      "Created": "2018-12-28T18:53:14+08:00",
      "Modified": "2019-01-26T02:09:58+08:00"
  },
  ///// LATE REMINDER NOTIFICATIONS //////////////////////////////////////////////////////////////
  //--- AUTH -------------------------------------------------------------------------------------
  {
      "Id": 182,
      "DocumentId": "DPDispatchAuth",
      "Data": {
          "strAuthType": "deputy",
          "strDPOAuthToken": "d36a0811170987f316ad626f8d71fcb9",
          "strDPDomain": "https://6a199e28095242.au.deputy.com/",
          "intDPCompany": 0,
          "strDPRenewCallBack": "https://service-proxy.deputy.com//dispatch/renew.php?u=6a199e28095242.au.deputy.com_0&h=89c058514adba4e0d1d5a75cd0ef3fc291846495b3760a2eabc695ca916ef413&n=1545994397.4221&a=eyJkb21haW5fcHJlZml4IjoiNmExOTllMjgwOTUyNDIuYXUiLCJhY2Nlc3NfdG9rZW4iOiJkMzZhMDgxMTE3MDk4N2YzMTZhZDYyNmY4ZDcxZmNiOSIsImNvbXBhbnkiOjAsInNlcnZpY2UiOiJEZXB1dHlTZXJ2aWNlX0xhdGVSZW1pbmQifQ%3D%3D&t=HMAC-SHA256&service=DeputyService_LateRemind",
          "strDPHomeCallBack": "https://service-proxy.deputy.com//dispatch/homecall.php?u=6a199e28095242.au.deputy.com_0&h=89c058514adba4e0d1d5a75cd0ef3fc291846495b3760a2eabc695ca916ef413&n=1545994397.4221&a=eyJkb21haW5fcHJlZml4IjoiNmExOTllMjgwOTUyNDIuYXUiLCJhY2Nlc3NfdG9rZW4iOiJkMzZhMDgxMTE3MDk4N2YzMTZhZDYyNmY4ZDcxZmNiOSIsImNvbXBhbnkiOjAsInNlcnZpY2UiOiJEZXB1dHlTZXJ2aWNlX0xhdGVSZW1pbmQifQ%3D%3D&t=HMAC-SHA256&service=DeputyService_LateRemind",
          "intCompany": 0,
          "coreservice": null,
          "url": null
      },
      "KeyInt": null,
      "KeyString": "DEPUTY",
      "Label": null,
      "OperationalUnit": null,
      "Employee": null,
      "Permission": {
          "com": "0",
          "wkp": "0"
      },
      "Creator": 1,
      "Created": "2018-12-28T18:53:19+08:00",
      "Modified": "2018-12-28T18:53:19+08:00"
  },
//--- DISPATCH -------------------------------------------------------------------------------------
  {
      "Id": 184,
      "DocumentId": "DPDispatch",
      "Data": {
          "intAuthId": 179,
          "objJob": {
              "strName": "DeputyService_LateRemind",
              "strFetchMethod": "dplab_late_to_start",
              "strPushMethod": "dplab_do_notification_to_emp",
              "strPreRunMethod": null,
              "strProcessDataMethod": null,
              "strPostRunMethod": null,
              "strAuthType": "deputy",
              "strDirection": "from",
              "strDPAuthValidateUrl": null,
              "strDPPrefixForData": "deputy"
          },
          "objMapping": [],
          "objConfig": {
              "notify_who": "both",
              "how_long": "600",
              "exclude_opunit": "",
              "DPDoItForAllLocations": "1"
          },
          "state": 1
      },
      "KeyInt": 1545994403,
      "KeyString": "ALL",
      "Label": null,
      "OperationalUnit": null,
      "Employee": null,
      "Permission": {
          "com": "0",
          "wkp": "0"
      },
      "Creator": 1,
      "Created": "2018-12-28T18:53:23+08:00",
      "Modified": "2019-01-26T02:13:17+08:00"
  },
//--- STATUS -------------------------------------------------------------------------------------
  {
      "Id": 185,
      "DocumentId": "DPDispatchStatus",
      "Data": {
          "JobId": 184,
          "Label": "Deputy token validation failed.",
          "intTSFetchDataFrom": "1635561000",
          "intStatusTime": "1635561000",
          "blnRunning": "0"
      },
      "KeyInt": 184,
      "KeyString": "Deputy token validation failed.",
      "Label": null,
      "OperationalUnit": null,
      "Employee": null,
      "Permission": {
          "com": "0",
          "wkp": "0"
      },
      "Creator": 1,
      "Created": "2018-12-28T18:53:25+08:00",
      "Modified": "2021-10-30T10:30:00+08:00"
  },
  ///// LATE FINISH NOTIFICATIONS ////////////////////////////////////////////////////////////////
  //--- AUTH -------------------------------------------------------------------------------------
  {
      "Id": 187,
      "DocumentId": "DPDispatchAuth",
      "Data": {
          "strAuthType": "deputy",
          "strDPOAuthToken": "d36a0811170987f316ad626f8d71fcb9",
          "strDPDomain": "https://6a199e28095242.au.deputy.com/",
          "intDPCompany": 0,
          "strDPRenewCallBack": "https://service-proxy.deputy.com//dispatch/renew.php?u=6a199e28095242.au.deputy.com_0&h=989ac99904ed69b7f21a0e10b809c699de21b2bcf798196f46c4abfe9759f215&n=1545994406.7034&a=eyJkb21haW5fcHJlZml4IjoiNmExOTllMjgwOTUyNDIuYXUiLCJhY2Nlc3NfdG9rZW4iOiJkMzZhMDgxMTE3MDk4N2YzMTZhZDYyNmY4ZDcxZmNiOSIsImNvbXBhbnkiOjAsInNlcnZpY2UiOiJEZXB1dHlTZXJ2aWNlX0ZpbmlzaFJlbWluZCJ9&t=HMAC-SHA256&service=DeputyService_FinishRemind",
          "strDPHomeCallBack": "https://service-proxy.deputy.com//dispatch/homecall.php?u=6a199e28095242.au.deputy.com_0&h=989ac99904ed69b7f21a0e10b809c699de21b2bcf798196f46c4abfe9759f215&n=1545994406.7034&a=eyJkb21haW5fcHJlZml4IjoiNmExOTllMjgwOTUyNDIuYXUiLCJhY2Nlc3NfdG9rZW4iOiJkMzZhMDgxMTE3MDk4N2YzMTZhZDYyNmY4ZDcxZmNiOSIsImNvbXBhbnkiOjAsInNlcnZpY2UiOiJEZXB1dHlTZXJ2aWNlX0ZpbmlzaFJlbWluZCJ9&t=HMAC-SHA256&service=DeputyService_FinishRemind",
          "intCompany": 0,
          "coreservice": null,
          "url": null
      },
      "KeyInt": null,
      "KeyString": "DEPUTY",
      "Label": null,
      "OperationalUnit": null,
      "Employee": null,
      "Permission": {
          "com": "0",
          "wkp": "0"
      },
      "Creator": 1,
      "Created": "2018-12-28T18:53:29+08:00",
      "Modified": "2018-12-28T18:53:29+08:00"
  },
//--- DISPATCH -------------------------------------------------------------------------------------
  {
      "Id": 188,
      "DocumentId": "DPDispatch",
      "Data": {
          "intAuthId": 179,
          "objJob": {
              "strName": "DeputyService_FinishRemind",
              "strFetchMethod": "dplab_late_to_finish",
              "strPushMethod": "dplab_do_notification_to_emp",
              "strPreRunMethod": null,
              "strProcessDataMethod": null,
              "strPostRunMethod": null,
              "strAuthType": "deputy",
              "strDirection": "from",
              "strDPAuthValidateUrl": null,
              "strDPPrefixForData": "deputy"
          },
          "objMapping": [],
          "objConfig": {
              "notify_who": "employee",
              "how_long": "0",
              "exclude_opunit": ""
          },
          "state": 0
      },
      "KeyInt": 1545994412,
      "KeyString": "1",
      "Label": null,
      "OperationalUnit": null,
      "Employee": null,
      "Permission": {
          "com": "1",
          "wkp": "1"
      },
      "Creator": 1,
      "Created": "2018-12-28T18:53:32+08:00",
      "Modified": "2019-01-26T02:11:08+08:00"
  },
//--- STATUS -------------------------------------------------------------------------------------
  {
      "Id": 189,
      "DocumentId": "DPDispatchStatus",
      "Data": {
          "JobId": 188,
          "Label": "Found employees : 0 ",
          "intTSFetchDataFrom": "1548439798",
          "intStatusTime": "1548439798",
          "blnRunning": "0"
      },
      "KeyInt": 188,
      "KeyString": "Found employees : 0 ",
      "Label": null,
      "OperationalUnit": null,
      "Employee": null,
      "Permission": {
          "com": "0",
          "wkp": "0"
      },
      "Creator": 1,
      "Created": "2018-12-28T18:53:34+08:00",
      "Modified": "2019-01-26T02:09:58+08:00"
  },
///// UPCOMING REMINDER NOTIFICATIONS //////////////////////////////////////////////////////////
//--- AUTH -------------------------------------------------------------------------------------
  {
      "Id": 190,
      "DocumentId": "DPDispatchAuth",
      "Data": {
          "strAuthType": "deputy",
          "strDPOAuthToken": "d36a0811170987f316ad626f8d71fcb9",
          "strDPDomain": "https://6a199e28095242.au.deputy.com/",
          "intDPCompany": 0,
          "strDPRenewCallBack": "https://service-proxy.deputy.com//dispatch/renew.php?u=6a199e28095242.au.deputy.com_0&h=a621462d0cfa087a58616c3459e2d31134726bed25095bf1b06f92cb9ffe5e40&n=1545994415.3986&a=eyJkb21haW5fcHJlZml4IjoiNmExOTllMjgwOTUyNDIuYXUiLCJhY2Nlc3NfdG9rZW4iOiJkMzZhMDgxMTE3MDk4N2YzMTZhZDYyNmY4ZDcxZmNiOSIsImNvbXBhbnkiOjAsInNlcnZpY2UiOiJEZXB1dHlTZXJ2aWNlX1VwY29taW5nUmVtaW5kIn0%3D&t=HMAC-SHA256&service=DeputyService_UpcomingRemind",
          "strDPHomeCallBack": "https://service-proxy.deputy.com//dispatch/homecall.php?u=6a199e28095242.au.deputy.com_0&h=a621462d0cfa087a58616c3459e2d31134726bed25095bf1b06f92cb9ffe5e40&n=1545994415.3986&a=eyJkb21haW5fcHJlZml4IjoiNmExOTllMjgwOTUyNDIuYXUiLCJhY2Nlc3NfdG9rZW4iOiJkMzZhMDgxMTE3MDk4N2YzMTZhZDYyNmY4ZDcxZmNiOSIsImNvbXBhbnkiOjAsInNlcnZpY2UiOiJEZXB1dHlTZXJ2aWNlX1VwY29taW5nUmVtaW5kIn0%3D&t=HMAC-SHA256&service=DeputyService_UpcomingRemind",
          "intCompany": 0,
          "coreservice": null,
          "url": null
      },
      "KeyInt": null,
      "KeyString": "DEPUTY",
      "Label": null,
      "OperationalUnit": null,
      "Employee": null,
      "Permission": {
          "com": "0",
          "wkp": "0"
      },
      "Creator": 1,
      "Created": "2018-12-28T18:53:37+08:00",
      "Modified": "2018-12-28T18:53:37+08:00"
  },
//--- DISPATCH -------------------------------------------------------------------------------------
  {
      "Id": 191,
      "DocumentId": "DPDispatch",
      "Data": {
          "intAuthId": 179,
          "objJob": {
              "strName": "DeputyService_UpcomingRemind",
              "strFetchMethod": "dplab_upcoming_shift",
              "strPushMethod": "dplab_do_notification_to_emp",
              "strPreRunMethod": null,
              "strProcessDataMethod": null,
              "strPostRunMethod": null,
              "strAuthType": "deputy",
              "strDirection": "from",
              "strDPAuthValidateUrl": null,
              "strDPPrefixForData": "deputy"
          },
          "objMapping": [],
          "objConfig": {
              "how_long": "7200",
              "DPDoItForAllLocations": "1"
          },
          "state": 1
      },
      "KeyInt": 1545994420,
      "KeyString": "ALL",
      "Label": null,
      "OperationalUnit": null,
      "Employee": null,
      "Permission": {
          "com": "0",
          "wkp": "0"
      },
      "Creator": 1,
      "Created": "2018-12-28T18:53:41+08:00",
      "Modified": "2018-12-28T18:53:41+08:00"
  },
//--- STATUS -------------------------------------------------------------------------------------
  {
      "Id": 192,
      "DocumentId": "DPDispatchStatus",
      "Data": {
          "JobId": 191,
          "Label": "Deputy token validation failed.",
          "intTSFetchDataFrom": "1635561000",
          "intStatusTime": "1635561000",
          "blnRunning": "0"
      },
      "KeyInt": 191,
      "KeyString": "Deputy token validation failed.",
      "Label": null,
      "OperationalUnit": null,
      "Employee": null,
      "Permission": {
          "com": "0",
          "wkp": "0"
      },
      "Creator": 1,
      "Created": "2018-12-28T18:53:43+08:00",
      "Modified": "2021-10-30T10:30:00+08:00"
  },
///// OPEN SHIFT REMINDER NOTIFICATIONS ////////////////////////////////////////////////////////
//--- AUTH -------------------------------------------------------------------------------------
  {
      "Id": 193,
      "DocumentId": "DPDispatchAuth",
      "Data": {
          "strAuthType": "deputy",
          "strDPOAuthToken": "d36a0811170987f316ad626f8d71fcb9",
          "strDPDomain": "https://6a199e28095242.au.deputy.com/",
          "intDPCompany": 0,
          "strDPRenewCallBack": "https://service-proxy.deputy.com//dispatch/renew.php?u=6a199e28095242.au.deputy.com_0&h=f2645407a17503ab84d4652c1be6af433b041a071878f2c4b3bff9981462ed22&n=1545994424.1638&a=eyJkb21haW5fcHJlZml4IjoiNmExOTllMjgwOTUyNDIuYXUiLCJhY2Nlc3NfdG9rZW4iOiJkMzZhMDgxMTE3MDk4N2YzMTZhZDYyNmY4ZDcxZmNiOSIsImNvbXBhbnkiOjAsInNlcnZpY2UiOiJEZXB1dHlTZXJ2aWNlX09wZW5SZW1pbmQifQ%3D%3D&t=HMAC-SHA256&service=DeputyService_OpenRemind",
          "strDPHomeCallBack": "https://service-proxy.deputy.com//dispatch/homecall.php?u=6a199e28095242.au.deputy.com_0&h=f2645407a17503ab84d4652c1be6af433b041a071878f2c4b3bff9981462ed22&n=1545994424.1638&a=eyJkb21haW5fcHJlZml4IjoiNmExOTllMjgwOTUyNDIuYXUiLCJhY2Nlc3NfdG9rZW4iOiJkMzZhMDgxMTE3MDk4N2YzMTZhZDYyNmY4ZDcxZmNiOSIsImNvbXBhbnkiOjAsInNlcnZpY2UiOiJEZXB1dHlTZXJ2aWNlX09wZW5SZW1pbmQifQ%3D%3D&t=HMAC-SHA256&service=DeputyService_OpenRemind",
          "intCompany": 0,
          "coreservice": null,
          "url": null
      },
      "KeyInt": null,
      "KeyString": "DEPUTY",
      "Label": null,
      "OperationalUnit": null,
      "Employee": null,
      "Permission": {
          "com": "0",
          "wkp": "0"
      },
      "Creator": 1,
      "Created": "2018-12-28T18:53:46+08:00",
      "Modified": "2018-12-28T18:53:46+08:00"
  },
//--- DISPATCH -------------------------------------------------------------------------------------
  {
      "Id": 194,
      "DocumentId": "DPDispatch",
      "Data": {
          "intAuthId": 179,
          "objJob": {
              "strName": "DeputyService_OpenRemind",
              "strFetchMethod": "dplab_upcoming_open_shift",
              "strPushMethod": "dplab_do_notification_to_emp",
              "strPreRunMethod": null,
              "strProcessDataMethod": null,
              "strPostRunMethod": null,
              "strAuthType": "deputy",
              "strDirection": "from",
              "strDPAuthValidateUrl": null,
              "strDPPrefixForData": "deputy"
          },
          "objMapping": [],
          "objConfig": {
              "how_long": "7200",
              "DPDoItForAllLocations": "1"
          },
          "state": 1
      },
      "KeyInt": 1545994429,
      "KeyString": "ALL",
      "Label": null,
      "OperationalUnit": null,
      "Employee": null,
      "Permission": {
          "com": "0",
          "wkp": "0"
      },
      "Creator": 1,
      "Created": "2018-12-28T18:53:49+08:00",
      "Modified": "2018-12-28T18:53:49+08:00"
  },
//--- STATUS -------------------------------------------------------------------------------------
  {
      "Id": 195,
      "DocumentId": "DPDispatchStatus",
      "Data": {
          "JobId": 194,
          "Label": "Deputy token validation failed.",
          "intTSFetchDataFrom": "1635561000",
          "intStatusTime": "1635561000",
          "blnRunning": "0"
      },
      "KeyInt": 194,
      "KeyString": "Deputy token validation failed.",
      "Label": null,
      "OperationalUnit": null,
      "Employee": null,
      "Permission": {
          "com": "0",
          "wkp": "0"
      },
      "Creator": 1,
      "Created": "2018-12-28T18:53:52+08:00",
      "Modified": "2021-10-30T10:30:00+08:00"
  },
///// OVERTIME REMINDER NOTIFICATIONS ////////////////////////////////////////////////////////
//--- AUTH -----------------------------------------------------------------------------------
  {
      "Id": 196,
      "DocumentId": "DPDispatchAuth",
      "Data": {
          "strAuthType": "deputy",
          "strDPOAuthToken": "d36a0811170987f316ad626f8d71fcb9",
          "strDPDomain": "https://6a199e28095242.au.deputy.com/",
          "intDPCompany": 0,
          "strDPRenewCallBack": "https://service-proxy.deputy.com//dispatch/renew.php?u=6a199e28095242.au.deputy.com_0&h=656aa2955126d04cdf68ab3e81ab459fa3ccf92ec64259c5ab39d0d473812fe9&n=1545994433.0812&a=eyJkb21haW5fcHJlZml4IjoiNmExOTllMjgwOTUyNDIuYXUiLCJhY2Nlc3NfdG9rZW4iOiJkMzZhMDgxMTE3MDk4N2YzMTZhZDYyNmY4ZDcxZmNiOSIsImNvbXBhbnkiOjAsInNlcnZpY2UiOiJEZXB1dHlTZXJ2aWNlX092ZXJUaW1lTm90aWZ5In0%3D&t=HMAC-SHA256&service=DeputyService_OverTimeNotify",
          "strDPHomeCallBack": "https://service-proxy.deputy.com//dispatch/homecall.php?u=6a199e28095242.au.deputy.com_0&h=656aa2955126d04cdf68ab3e81ab459fa3ccf92ec64259c5ab39d0d473812fe9&n=1545994433.0812&a=eyJkb21haW5fcHJlZml4IjoiNmExOTllMjgwOTUyNDIuYXUiLCJhY2Nlc3NfdG9rZW4iOiJkMzZhMDgxMTE3MDk4N2YzMTZhZDYyNmY4ZDcxZmNiOSIsImNvbXBhbnkiOjAsInNlcnZpY2UiOiJEZXB1dHlTZXJ2aWNlX092ZXJUaW1lTm90aWZ5In0%3D&t=HMAC-SHA256&service=DeputyService_OverTimeNotify",
          "intCompany": 0,
          "coreservice": null,
          "url": null
      },
      "KeyInt": null,
      "KeyString": "DEPUTY",
      "Label": null,
      "OperationalUnit": null,
      "Employee": null,
      "Permission": {
          "com": "0",
          "wkp": "0"
      },
      "Creator": 1,
      "Created": "2018-12-28T18:53:55+08:00",
      "Modified": "2018-12-28T18:53:55+08:00"
  },
//--- DISPATCH -----------------------------------------------------------------------------------
  {
      "Id": 197,
      "DocumentId": "DPDispatch",
      "Data": {
          "intAuthId": 179,
          "objJob": {
              "strName": "DeputyService_OverTimeNotify",
              "strFetchMethod": "dplab_get_overtime_roster",
              "strPushMethod": "dplab_do_notification_to_emp",
              "strPreRunMethod": null,
              "strProcessDataMethod": null,
              "strPostRunMethod": null,
              "strAuthType": "deputy",
              "strDirection": "from",
              "strDPAuthValidateUrl": null,
              "strDPPrefixForData": "deputy"
          },
          "objMapping": [],
          "objConfig": [],
          "state": 0
      },
      "KeyInt": 1545994437,
      "KeyString": "1",
      "Label": null,
      "OperationalUnit": null,
      "Employee": null,
      "Permission": {
          "com": "1",
          "wkp": "1"
      },
      "Creator": 1,
      "Created": "2018-12-28T18:53:58+08:00",
      "Modified": "2019-01-26T02:12:00+08:00"
  },
//--- STATUS -----------------------------------------------------------------------------------
  {
      "Id": 198,
      "DocumentId": "DPDispatchStatus",
      "Data": {
          "JobId": 197,
          "Label": "Employee with overtime shifts: 0",
          "intTSFetchDataFrom": "1548439799",
          "intStatusTime": "1548439800",
          "blnRunning": "0"
      },
      "KeyInt": 197,
      "KeyString": "Employee with overtime shifts: 0",
      "Label": null,
      "OperationalUnit": null,
      "Employee": null,
      "Permission": {
          "com": "0",
          "wkp": "0"
      },
      "Creator": 1,
      "Created": "2018-12-28T18:54:00+08:00",
      "Modified": "2019-01-26T02:10:00+08:00"
  },
///// GEOLOCATION NOTIFICATIONS ////////////////////////////////////////////////////////
//--- DISPATCH -------------------------------------------------------------------------
  {
      "Id": 373,
      "DocumentId": "DPDispatch",
      "Data": {
          "intAuthId": 179,
          "objJob": {
              "strName": "DeputyService_GeoLocationNotify",
              "strFetchMethod": "dplab_get_geo_location",
              "strPushMethod": "dplab_do_notification_to_emp",
              "strPreRunMethod": null,
              "strProcessDataMethod": null,
              "strPostRunMethod": null,
              "strAuthType": "deputy",
              "strDirection": "from",
              "strDPAuthValidateUrl": null,
              "strDPPrefixForData": "deputy"
          },
          "objMapping": [],
          "objConfig": {
              "search": "500",
              "DPDoItForAllLocations": "1"
          },
          "state": 1
      },
      "KeyInt": 1548441114,
      "KeyString": "ALL",
      "Label": null,
      "OperationalUnit": null,
      "Employee": null,
      "Permission": {
          "com": "0",
          "wkp": "0"
      },
      "Creator": 1,
      "Created": "2019-01-26T02:31:55+08:00",
      "Modified": "2019-01-26T02:31:55+08:00"
  },
//--- STATUS -------------------------------------------------------------------------
  {
      "Id": 374,
      "DocumentId": "DPDispatchStatus",
      "Data": {
          "JobId": 373,
          "Label": "Deputy token validation failed.",
          "intTSFetchDataFrom": "1635561000",
          "intStatusTime": "1635561001",
          "blnRunning": "0"
      },
      "KeyInt": 373,
      "KeyString": "Deputy token validation failed.",
      "Label": null,
      "OperationalUnit": null,
      "Employee": null,
      "Permission": {
          "com": "0",
          "wkp": "0"
      },
      "Creator": -2,
      "Created": "2019-01-26T02:39:51+08:00",
      "Modified": "2021-10-30T10:30:01+08:00"
  },
///// SHIFT REPORT /////////////////////////////////////////////////////////////////////
//--- DISPATCH -------------------------------------------------------------------------
  {
      "Id": 6138,
      "DocumentId": "REPORT_BUILDER",
      "Data": {
          "title": "Shift Questions Response Report",
          "description": "Shift Questions Response Report",
          "primaryResource": "Timesheet",
          "startDate": "2020-06-24",
          "endDate": "2020-06-24",
          "filter": [],
          "calculationColumns": [],
          "groupby": [],
          "chosenColumns": [
              "EmployeeObject.DisplayName",
              "Timesheet.Date",
              "Timesheet.StartTimeLocalized",
              "Timesheet.EndTimeLocalized",
              "Timesheet.Mealbreak",
              "Timesheet.TotalTime"
          ],
          "allCTSF": true
      },
      "KeyInt": null,
      "KeyString": null,
      "Label": null,
      "OperationalUnit": null,
      "Employee": null,
      "Permission": "all",
      "Creator": -2,
      "Created": "2020-06-24T14:13:38+08:00",
      "Modified": "2020-06-24T14:13:38+08:00"
  }
]