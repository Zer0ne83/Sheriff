import {JsonSQLite} from '@capacitor-community/sqlite';
///////////////////////////////////////////////////////////////////////////
export const SQLiteKeywords:any[] = ['ABORT','ACTION','ADD','AFTER','ALL','ALTER','ALWAYS','ANALYZE','AND','AS','ASC','ATTACH','AUTOINCREMENT','BEFORE','BEGIN','BETWEEN','BY','CASCADE','CASE','CAST','CHECK','COLLATE','COLUMN','COMMIT','CONFLICT','CONSTRAINT','CREATE','CROSS','CURRENT','CURRENT_DATE','CURRENT_TIME','CURRENT_TIMESTAMP','DATABASE','DEFAULT','DEFERRABLE','DEFERRED','DELETE','DESC','DETACH','DISTINCT','DO','DROP','EACH','ELSE','END','ESCAPE','EXCEPT','EXCLUDE','EXCLUSIVE','EXISTS','EXPLAIN','FAIL','FILTER','FIRST','FOLLOWING','FOR','FOREIGN','FROM','FULL','GENERATED','GLOB','GROUP','GROUPS','HAVING','IF','IGNORE','IMMEDIATE','IN','INDEX','INDEXED','INITIALLY','INNER','INSERT','INSTEAD','INTERSECT','INTO','IS','ISNULL','JOIN','KEY','LAST','LEFT','LIKE','LIMIT','MATCH','MATERIALIZED','NATURAL','NO','NOT','NOTHING','NOTNULL','NULL','NULLS','OF','OFFSET','ON','OR','ORDER','OTHERS','OUTER','OVER','PARTITION','PLAN','PRAGMA','PRECEDING','PRIMARY','QUERY','RAISE','RANGE','RECURSIVE','REFERENCES','REGEXP','REINDEX','RELEASE','RENAME','REPLACE','RESTRICT','RETURNING','RIGHT','ROLLBACK','ROW','ROWS','SAVEPOINT','SELECT','SET','TABLE','TEMP','TEMPORARY','THEN','TIES','TO','TRANSACTION','TRIGGER','UNBOUNDED','UNION','UNIQUE','UPDATE','USING','VACUUM','VALUES','VIEW','VIRTUAL','WHEN','WHERE','WINDOW','WITH','WITHOUT'];
///////////////////////////////////////////////////////////////////////////
export const frCheckResArr:any[] = [ 'Company', 'Kiosk', 'Memo', 'OperationalUnit', 'PayPeriod', 'SystemUsageTracking', 'Task', 'TaskGroup', 'Timesheet', 'Roster' ];
export const frCheckMyArr:any[] = [ 'colleague', 'leave', 'memo', 'notification', 'roster', 'timesheet', 'task', 'unavail' ];
export const frResMyCombo:any[] = [ 'Memo', 'Task', 'Timesheet', 'Roster'];
export const frMyOrs:any[] = [ 'colleague', 'leave', 'notification', 'unavail' ];
export const frCheckImageEPs:any[] = ['photo', 'colleague'];
export const frEPStore:object = { Company: { epc: 'res', sl: 'db' }, Kiosk: { epc: 'res', sl: 'db' }, Memo: { epc: 'res', sl: 'db' }, OperationalUnit: { epc: 'res', sl: 'db' }, PayPeriod: { epc: 'res', sl: 'db' }, SystemUsageTracking: {epc: 'res', sl: 'db' }, Task: { epc: 'res', sl: 'db' }, TaskGroup: { epc: 'res', sl: 'db' }, Timesheet: { epc: 'res', sl: 'db' }, Roster: { epc: 'res', sl: 'both' }, colleague: { epc: 'res', sl: 'db' }, contactaddress: { epc: 'my', sl: 'store' }, leave: { epc: 'my', sl: 'db' }, location: { epc: 'my', sl: 'store' }, notification: { epc: 'my', sl: 'db' }, photo: { epc: 'my', sl: 'store' }, roster: { epc: 'my', sl: 'both' }, training: { epc: 'my', sl: 'store' }, unavail: { epc: 'my', sl: 'store' } };
export const myEndPointArr:any[] = [ 'photo', 'setup', 'location', 'contactaddress', 'colleague', 'roster', 'timesheet', 'leave', 'unavail', 'notification', 'training', 'memo', 'tasks' ];
export const myFREPArr:any[] = ['colleague','leave','memo','notification','photo','roster','tasks','unavail'];
export const resEndPointArr:any[] = [ 'Address', 'Category', 'Comment', 'Company', 'CompanyPeriod', 'Contact', 'Country', 'CustomAppData', 'CustomField', 'CustomFieldData', 'Employee', 'EmployeeAgreement', 'EmployeeAgreementHistory', 'EmployeeAppraisal', 'EmployeeAvailability', 'EmployeeHistory', 'EmployeePaycycle', 'EmployeePaycycleReturn', 'EmployeeRole', 'EmployeeSalaryOpunitCosting', 'EmployeeWorkplace', 'EmploymentCondition', 'EmploymentContract', 'EmploymentContractLeaveRules', 'Event', 'Geo', 'Journal', 'Kiosk', 'Leave', 'LeaveAccrual', 'LeavePayLine', 'LeaveRules', 'Memo', 'OperationalUnit', 'PayPeriod', 'PayRules', 'PublicHoliday', 'SalesData', 'Schedule', 'SmsLog', 'State', 'StressProfile', 'SystemUsageBalance', 'SystemUsageTracking', 'Task', 'TaskGroup', 'TaskGroupSetup', 'TaskOpunitConfig', 'TaskSetup', 'Team', 'Timesheet', 'TimesheetPayReturn', 'TrainingModule', 'TrainingRecord', 'Webhook', 'Roster', 'RosterOpen', 'RosterSwap' ];
///////////////////////////////////////////////////////////////////////////
export const Resources:object = { Address: 'addresses', Category: 'categories', Colleague: 'colleagues', Comment: 'comments', Company: 'companies', CompanyPeriod: 'company_periods', Contact: 'contacts', Country: 'countries', CustomAppData: 'custom_app_data', CustomField: 'custom_fields', CustomFieldData: 'custom_field_data', Employee: 'employees', EmployeeAgreement: 'employee_agreements', EmployeeAgreementHistory: 'employee_agreement_history', EmployeeAppraisal: 'employee_appraisal', EmployeeAvailability: 'employee_availability', EmployeeHistory: 'employee_history', EmployeePaycycle: 'employee_paycycles', EmployeePaycycleReturn: 'employee_paycycle_returns', EmployeeRole: 'employee_roles', EmployeeSalaryOpunitCosting: 'employee_salary_opunit_costing', EmployeeWorkplace: 'employee_workplaces', EmploymentCondition: 'employment_conditions', EmploymentContract: 'employee_contracts', EmploymentContractLeaveRules: 'employee_contract_leave_rules', Event: 'events', Geo: 'geo', Journal: 'journal', Kiosk: 'kiosks', Leave: 'leaves', LeaveAccrual: 'leave_accruals', LeavePayLine: 'leave_pay_lines', LeaveRules: 'leave_rules', Memo: 'memos', OperationalUnit: 'operational_units', PayPeriod: 'pay_periods', PayRules: 'pay_rules', PublicHoliday: 'public_holidays', Roster: 'rosters', RosterOpen: 'roster_opens', RosterSwap: 'roster_swaps', SalesData: 'sales_data', Schedule: 'schedules', SmsLog: 'sms_logs', State: 'states', StressProfile: 'stress_profiles', SystemUsageBalance: 'system_usage_balances', SystemUsageTracking: 'system_usage_tracking', Task: 'tasks', TaskGroup: 'task_groups', TaskGroupSetup: 'task_group_setups', TaskOpunitConfig: 'task_opunit_configs', TaskSetup: 'task_setups', Team: 'teams', Timesheet: 'timesheets', TimesheetPayReturn: 'timesheet_pay_returns', TrainingModule: 'training_modules', TrainingRecord: 'training_records', Webhook: 'webhooks', colleague: 'colleagues', notification: 'notifications', leave: 'leaves', unavail: 'employee_availability' };  
///////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////
export const InsertTypeMap:object = { text: 'string', integer: 'number', numeric: 'number', real: 'number' };
///////////////////////////////////////////////////////////////////////////
export const TypeMap:object = { int: 'integer', integer: 'integer', real: 'real', double: 'real', float: 'real', string: 'text', character: 'text', varchar: 'text', nchar: 'text', clob: 'text', blob: 'text', time: 'text', date: 'text', datetime: 'text', bit: 'numeric', numeric: 'numeric', decimal: 'numeric', boolean: 'numeric' };
///////////////////////////////////////////////////////////////////////////
export const List2DBTblMap:object = { tabshifts: 'rosters', tabtsheets: 'timesheets', tabtasks: 'tasks', tabnews: 'memos' };
///////////////////////////////////////////////////////////////////////////
export const AuthDB:JsonSQLite = {
  "database": "authdb",
  "version": 1,
  "encrypted": true,
  "mode": "full",
  "tables": [
    {
      "name": "deputy_auth",
      "schema": [
        {
          "column": "dp_uuk",
          "value": "TEXT PRIMARY KEY NOT NULL"
        },
        {
          "column": "dp_username",
          "value": "TEXT"
        },
        {
          "column": "dp_password",
          "value": "TEXT"
        },
        {
          "column": "dp_access_token",
          "value": "TEXT" 
        },
        {
          "column": "dp_endpoint",
          "value": "TEXT"
        },
        {
          "column": "dp_expires_in",
          "value": "TEXT"
        },
        {
          "column": "dp_expires_at",
          "value": "TEXT"
        },
        {
          "column": "dp_refresh_token",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s','now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        }
      ]
    }
  ]
}
///////////////////////////////////////////////////////////////////////////
export const DefaultDB:JsonSQLite = {
  "database": "defaultdb",
  "version": 1,
  "encrypted": false,
  "mode": "full",
  "tables": [
    {
      "name": "sheriff_settings",
      "schema": [
        {
          "column": "dp_uuk",
          "value": "TEXT PRIMARY KEY NOT NULL"
        },
        {
          "column": "settings",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s','now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        }
      ]
    },
    {
      "name": "firebase_fct",
      "schema": [
        {
          "column": "app_uuk",
          "value": "TEXT PRIMARY KEY NOT NULL"
        },
        {
          "column": "fe_token",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s','now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        }
      ]
    },
    {
      "name": "firebase_fcm",
      "schema": [
        {
          "column": "app_uuk",
          "value": "TEXT PRIMARY KEY NOT NULL"
        },
        {
          "column": "fcm_token",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s','now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        }
      ]
    },
    {
      "name": "deputy_profile",
      "schema": [
        {
          "column": "dp_uuk",
          "value": "TEXT PRIMARY KEY NOT NULL"
        },
        {
          "column": "photo",
          "value": "TEXT"
        },
        {
          "column": "dname",
          "value": "TEXT"
        },
        {
          "column": "fname",
          "value": "TEXT"
        },
        {
          "column": "lname",
          "value": "TEXT"
        },
        {
          "column": "email",
          "value": "TEXT"
        },
        {
          "column": "phone",
          "value": "TEXT"
        },
        {
          "column": "dob",
          "value": "TEXT"
        },
        {
          "column": "pin",
          "value": "TEXT"
        },
        {
          "column": "gender",
          "value": "TEXT"
        },
        {
          "column": "pronoun",
          "value": "TEXT"
        },
        {
          "column": "custompn",
          "value": "TEXT"
        },
        {
          "column": "street",
          "value": "TEXT"
        },
        {
          "column": "city",
          "value": "TEXT"
        },
        {
          "column": "country",
          "value": "TEXT"
        },
        {
          "column": "state",
          "value": "TEXT"
        },
        {
          "column": "pcode",
          "value": "TEXT"
        },
        {
          "column": "ename",
          "value": "TEXT"
        },
        {
          "column": "ephone",
          "value": "TEXT"
        },
        {
          "column": "last_sync",
          "value": "INTEGER DEFAULT (strftime('%s','now'))"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s','now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexOnlast_sync",
          "value": "last_sync"
        }
      ]
    },
    {
      "name": "sync",
      "schema": [
        {
          "column": "id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "table_name",
          "value": "TEXT"
        },
        {
          "column": "last_sync",
          "value": "INTEGER"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexOnlast_sync",
          "value": "last_sync"
        }
      ]
    },
    {
      "name": "addresses",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "ContactName",
          "value": "TEXT"
        },
        {
          "column": "UnitNo",
          "value": "TEXT"
        },
        {
          "column": "StreetNo",
          "value": "TEXT"
        },
        {
          "column": "SuiteNo",
          "value": "TEXT"
        },
        {
          "column": "PoBox",
          "value": "TEXT"
        },
        {
          "column": "Street1",
          "value": "TEXT"
        },
        {
          "column": "Street2",
          "value": "TEXT"
        },
        {
          "column": "City",
          "value": "TEXT"
        },
        {
          "column": "State",
          "value": "TEXT"
        },
        {
          "column": "Postcode",
          "value": "TEXT"
        },
        {
          "column": "Country",
          "value": "INTEGER"
        },
        {
          "column": "Phone",
          "value": "TEXT"
        },
        {
          "column": "Notes",
          "value": "TEXT"
        },
        {
          "column": "Format",
          "value": "INTEGER"
        },
        {
          "column": "Saved",
          "value": "NUMERIC"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "categories",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "Category",
          "value": "TEXT"
        },
        {
          "column": "'Group'",
          "value": "TEXT"
        },
        {
          "column": "SortOrder",
          "value": "INTEGER"
        },
        {
          "column": "Stafflog",
          "value": "NUMERIC"
        },
        {
          "column": "System",
          "value": "NUMERIC"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "comments",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "Orm",
          "value": "TEXT"
        },
        {
          "column": "RecId",
          "value": "INTEGER"
        },
        {
          "column": "InFeed",
          "value": "NUMERIC"
        },
        {
          "column": "IgnorePermission",
          "value": "NUMERIC"
        },
        {
          "column": "Comment",
          "value": "TEXT"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "companies",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "Portfolio",
          "value": "INTEGER"
        },
        {
          "column": "Code",
          "value": "TEXT"
        },
        {
          "column": "Active",
          "value": "NUMERIC"
        },
        {
          "column": "ParentCompany",
          "value": "INTEGER"
        },
        {
          "column": "CompanyName",
          "value": "TEXT"
        },
        {
          "column": "TradingName",
          "value": "TEXT"
        },
        {
          "column": "BusinessNumber",
          "value": "TEXT"
        },
        {
          "column": "CompanyNumber",
          "value": "TEXT"
        },
        {
          "column": "IsWorkplace",
          "value": "NUMERIC"
        },
        {
          "column": "IsPayrollEntity",
          "value": "NUMERIC"
        },
        {
          "column": "PayrollExportCode",
          "value": "TEXT"
        },
        {
          "column": "Address",
          "value": "INTEGER"
        },
        {
          "column": "Contact",
          "value": "INTEGER"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "company_periods",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "Start",
          "value": "INTEGER"
        },
        {
          "column": "DateStart",
          "value": "TEXT"
        },
        {
          "column": "`End`",
          "value": "INTEGER"
        },
        {
          "column": "DateEnd",
          "value": "TEXT"
        },
        {
          "column": "Company",
          "value": "INTEGER"
        },
        {
          "column": "PayPeriod",
          "value": "INTEGER"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "contacts",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "Phone1",
          "value": "TEXT"
        },
        {
          "column": "Phone2",
          "value": "TEXT"
        },
        {
          "column": "Phone3",
          "value": "TEXT"
        },
        {
          "column": "Fax",
          "value": "TEXT"
        },
        {
          "column": "Phone1Type",
          "value": "TEXT"
        },
        {
          "column": "Phone2Type",
          "value": "TEXT"
        },
        {
          "column": "Phone3Type",
          "value": "TEXT"
        },
        {
          "column": "PrimaryPhone",
          "value": "INTEGER"
        },
        {
          "column": "Email1",
          "value": "TEXT"
        },
        {
          "column": "Email1Type",
          "value": "TEXT"
        },
        {
          "column": "Email2Type",
          "value": "TEXT"
        },
        {
          "column": "Email2",
          "value": "TEXT"
        },
        {
          "column": "PrimaryEmail",
          "value": "INTEGER"
        },
        {
          "column": "Im1",
          "value": "TEXT"
        },
        {
          "column": "Im2",
          "value": "TEXT"
        },
        {
          "column": "Im1Type",
          "value": "TEXT"
        },
        {
          "column": "Im2Type",
          "value": "TEXT"
        },
        {
          "column": "Web",
          "value": "TEXT"
        },
        {
          "column": "Notes",
          "value": "TEXT"
        },
        {
          "column": "Saved",
          "value": "NUMERIC"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "countries",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "Code",
          "value": "TEXT"
        },
        {
          "column": "CodeA3",
          "value": "TEXT"
        },
        {
          "column": "Region",
          "value": "TEXT"
        },
        {
          "column": "Active",
          "value": "INTEGER"
        },
        {
          "column": "SortOrder",
          "value": "INTEGER"
        },
        {
          "column": "Country",
          "value": "TEXT"
        },
        {
          "column": "ZipValidatePreg",
          "value": "TEXT"
        },
        {
          "column": "PhoneDisplayPreg",
          "value": "TEXT"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ],
      "values": [
        [ 1, "AF", "AFG", "AS", 0, 10, "Afghanistan", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 2, "AL", "ALB", "EU", 0, 10, "Albania", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 3, "DZ", "DZA", "AF", 0, 10, "Algeria", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 4, "AS", "ASM", "AU", 0, 10, "American Samoa", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 5, "AD", "AND", "EU", 0, 10, "Andorra", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 6, "AO", "AGO", "AF", 0, 10, "Angola", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 7, "AI", "AIA", "LA", 0, 10, "Anguilla", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 8, "AQ", "ATA", "AN", 0, 10, "Antarctica", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 9, "AG", "ATG", "LA", 0, 10, "Antigua and Barbuda", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 10, "AR", "ARG", "LA", 0, 10, "Argentina", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 11, "AM", "ARM", "AS", 0, 10, "Armenia", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 12, "AW", "ABW", "LA", 0, 10, "Aruba", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 13, "AU", "AUS", "AU", 1, 1, "Australia", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:19:12+08:00", 1634878320],
        [ 14, "AT", "AUT", "EU", 0, 10, "Austria", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 15, "AZ", "AZE", "AS", 0, 10, "Azerbaijan", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 16, "BS", "BHS", "LA", 0, 10, "Bahamas", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 17, "BH", "BHR", "AS", 0, 10, "Bahrain", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 18, "BD", "BGD", "AS", 0, 10, "Bangladesh", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 19, "BB", "BRB", "LA", 0, 10, "Barbados", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 20, "BY", "BLR", "EU", 0, 10, "Belarus", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 21, "BE", "BEL", "EU", 0, 10, "Belgium", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 22, "BZ", "BLZ", "LA", 0, 10, "Belize", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 23, "BJ", "BEN", "AF", 0, 10, "Benin", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 24, "BM", "BMU", "LA", 0, 10, "Bermuda", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 25, "BT", "BTN", "AS", 0, 10, "Bhutan", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 26, "BO", "BOL", "LA", 0, 10, "Bolivia", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 27, "BA", "BIH", "EU", 0, 10, "Bosnia and Herzegowina", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 28, "BW", "BWA", "AF", 0, 10, "Botswana", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 29, "BV", "BVT", "AN", 0, 10, "Bouvet Island", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 30, "BR", "BRA", "LA", 0, 10, "Brazil", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 31, "IO", "IOT", "AS", 0, 10, "British Indian Ocean Territory", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 32, "VG", "VGB", "LA", 0, 10, "British Virgin Islands", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 33, "BN", "BRN", "AS", 0, 10, "Brunei Darussalam", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 34, "BG", "BGR", "EU", 0, 10, "Bulgaria", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 35, "BF", "BFA", "AF", 0, 10, "Burkina Faso", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 36, "BI", "BDI", "AF", 0, 10, "Burundi", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 37, "KH", "KHM", "AS", 0, 10, "Cambodia", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 38, "CM", "CMR", "AF", 0, 10, "Cameroon", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 39, "CA", "CAN", "NA", 0, 5, "Canada", "/[a-zA-Z]\\d[a-zA-Z] ?\\d[a-zA-Z]\\d/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 40, "CV", "CPV", "AF", 0, 10, "Cape Verde", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 41, "KY", "CYM", "LA", 0, 10, "Cayman Islands", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 42, "CF", "CAF", "AF", 0, 10, "Central African Republic", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 43, "TD", "TCD", "AF", 0, 10, "Chad", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 44, "CL", "CHL", "LA", 0, 10, "Chile", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 45, "CN", "CHN", "AS", 0, 10, "China", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 46, "CX", "CXR", "AU", 0, 10, "Christmas Island", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 47, "CC", "CCK", "AU", 0, 10, "Cocos (Keeling) Islands", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 48, "CO", "COL", "LA", 0, 10, "Colombia", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 49, "KM", "COM", "AF", 0, 10, "Comoros", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 50, "CG", "COG", "AF", 0, 10, "Congo", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 51, "CK", "COK", "AU", 0, 10, "Cook Islands", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 52, "CR", "CRI", "LA", 0, 10, "Costa Rica", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 53, "CI", "CIV", "AF", 0, 10, "Cote D'ivoire", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 54, "HR", "HRV", "EU", 0, 10, "Croatia", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 55, "CU", "CUB", "LA", 0, 10, "Cuba", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 56, "CY", "CYP", "EU", 0, 10, "Cyprus", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 57, "CZ", "CZE", "EU", 0, 10, "Czech Republic", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 58, "DK", "DNK", "EU", 0, 10, "Denmark", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 59, "DJ", "DJI", "AF", 0, 10, "Djibouti", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 60, "DM", "DMA", "LA", 0, 10, "Dominica", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 61, "DO", "DOM", "LA", 0, 10, "Dominican Republic", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 62, "TP", "", "AS", 0, 10, "East Timor", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 63, "EC", "ECU", "LA", 0, 10, "Ecuador", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 64, "EG", "EGY", "AF", 0, 10, "Egypt", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 65, "SV", "SLV", "LA", 0, 10, "El Salvador", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 66, "GQ", "GNQ", "AF", 0, 10, "Equatorial Guinea", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 67, "ER", "ERI", "AF", 0, 10, "Eritrea", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 68, "EE", "EST", "EU", 0, 10, "Estonia", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 69, "ET", "ETH", "AF", 0, 10, "Ethiopia", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 70, "FK", "FLK", "LA", 0, 10, "Falkland Islands (Malvinas)", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 71, "FO", "FRO", "EU", 0, 10, "Faroe Islands", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 72, "FJ", "FJI", "AU", 0, 10, "Fiji", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 73, "FI", "FIN", "EU", 0, 10, "Finland", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 74, "FR", "FRA", "EU", 0, 10, "France", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 76, "GF", "GUF", "LA", 0, 10, "French Guiana", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 77, "PF", "PYF", "AU", 0, 10, "French Polynesia", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 78, "TF", "ATF", "AN", 0, 10, "French Southern Territories", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 79, "GA", "GAB", "AF", 0, 10, "Gabon", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 80, "GE", "GEO", "AS", 0, 10, "Georgia", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 81, "GM", "GMB", "AF", 0, 10, "Gambia", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 82, "PS", "PSE", "AS", 0, 10, "Palestine Authority", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 83, "DE", "DEU", "EU", 0, 10, "Germany", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 84, "GH", "GHA", "AF", 0, 10, "Ghana", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 85, "GI", "GIB", "EU", 0, 10, "Gibraltar", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 86, "GR", "GRC", "EU", 0, 10, "Greece", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 87, "GL", "GRL", "NA", 0, 10, "Greenland", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 88, "GD", "GRD", "LA", 0, 10, "Grenada", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 89, "GP", "GLP", "LA", 0, 10, "Guadeloupe", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 90, "GU", "GUM", "AU", 0, 10, "Guam", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 91, "GT", "GTM", "LA", 0, 10, "Guatemala", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 92, "GN", "GIN", "AF", 0, 10, "Guinea", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 93, "GW", "GNB", "AF", 0, 10, "Guinea-Bissau", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 94, "GY", "GUY", "LA", 0, 10, "Guyana", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 95, "HT", "HTI", "LA", 0, 10, "Haiti", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 96, "HM", "HMD", "AU", 0, 10, "Heard and McDonald Islands", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 97, "HN", "HND", "LA", 0, 10, "Honduras", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 98, "HK", "HKG", "AS", 0, 10, "Hong Kong", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 99, "HU", "HUN", "EU", 0, 10, "Hungary", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 100, "IS", "ISL", "EU", 0, 10, "Iceland", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 101, "IN", "IND", "AS", 0, 10, "India", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 102, "ID", "IDN", "AS", 0, 10, "Indonesia", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 103, "IQ", "IRQ", "AS", 0, 10, "Iraq", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 104, "IE", "IRL", "EU", 0, 10, "Ireland", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 105, "IR", "IRN", "AS", 0, 10, "Islamic Republic of Iran", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 106, "IL", "ISR", "AS", 0, 10, "Israel", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 107, "IT", "ITA", "EU", 0, 10, "Italy", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 108, "JM", "JAM", "LA", 0, 10, "Jamaica", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 109, "JP", "JPN", "AS", 0, 10, "Japan", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 110, "JO", "JOR", "AS", 0, 10, "Jordan", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 111, "KZ", "KAZ", "AS", 0, 10, "Kazakhstan", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 112, "KE", "KEN", "AF", 0, 10, "Kenya", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 113, "KI", "KIR", "AU", 0, 10, "Kiribati", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 114, "KP", "PRK", "AS", 0, 10, "Korea", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 115, "KR", "KOR", "AS", 0, 10, "Korea, Republic of", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 116, "KW", "KWT", "AS", 0, 10, "Kuwait", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 117, "KG", "KGZ", "AS", 0, 10, "Kyrgyzstan", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 118, "LA", "LAO", "AS", 0, 10, "Laos", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 119, "LV", "LVA", "EU", 0, 10, "Latvia", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 120, "LB", "LBN", "AS", 0, 10, "Lebanon", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 121, "LS", "LSO", "AF", 0, 10, "Lesotho", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 122, "LR", "LBR", "AF", 0, 10, "Liberia", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 123, "LY", "LBY", "AF", 0, 10, "Libyan Arab Jamahiriya", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 124, "LI", "LIE", "EU", 0, 10, "Liechtenstein", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 125, "LT", "LTU", "EU", 0, 10, "Lithuania", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 126, "LU", "LUX", "EU", 0, 10, "Luxembourg", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 127, "MO", "MAC", "AS", 0, 10, "Macau", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 128, "MK", "MKD", "EU", 0, 10, "Macedonia", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 129, "MG", "MDG", "AF", 0, 10, "Madagascar", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 130, "MW", "MWI", "AF", 0, 10, "Malawi", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 131, "MY", "MYS", "AS", 0, 10, "Malaysia", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 132, "MV", "MDV", "AS", 0, 10, "Maldives", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 133, "ML", "MLI", "AF", 0, 10, "Mali", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 134, "MT", "MLT", "EU", 0, 10, "Malta", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 135, "MH", "MHL", "AU", 0, 10, "Marshall Islands", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 136, "MQ", "MTQ", "LA", 0, 10, "Martinique", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 137, "MR", "MRT", "AF", 0, 10, "Mauritania", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 138, "MU", "MUS", "AF", 0, 10, "Mauritius", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 139, "YT", "MYT", "AF", 0, 10, "Mayotte", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 140, "MX", "MEX", "LA", 0, 10, "Mexico", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 141, "FM", "FSM", "AU", 0, 10, "Micronesia", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 142, "MD", "MDA", "EU", 0, 10, "Moldova, Republic of", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 143, "MC", "MCO", "EU", 0, 10, "Monaco", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 144, "MN", "MNG", "AS", 0, 10, "Mongolia", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 145, "MS", "MSR", "LA", 0, 10, "Montserrat", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 146, "MA", "MAR", "AF", 0, 10, "Morocco", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 147, "MZ", "MOZ", "AF", 0, 10, "Mozambique", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 148, "MM", "MMR", "AS", 0, 10, "Myanmar", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 149, "NA", "NAM", "AF", 0, 10, "Namibia", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 150, "NR", "NRU", "AU", 0, 10, "Nauru", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 151, "NP", "NPL", "AS", 0, 10, "Nepal", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 152, "NL", "NLD", "EU", 0, 10, "Netherlands", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 153, "AN", "ANT", "LA", 0, 10, "Netherlands Antilles", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 154, "NC", "NCL", "AU", 0, 10, "New Caledonia", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 155, "NZ", "NZL", "AU", 1, 2, "New Zealand", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:19:12+08:00", 1634878320],
        [ 156, "NI", "NIC", "LA", 0, 10, "Nicaragua", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 157, "NE", "NER", "AF", 0, 10, "Niger", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 158, "NG", "NGA", "AF", 0, 10, "Nigeria", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 159, "NU", "NIU", "AU", 0, 10, "Niue", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 160, "NF", "NFK", "AU", 0, 10, "Norfolk Island", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 161, "MP", "MNP", "AU", 0, 10, "Northern Mariana Islands", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 162, "NO", "NOR", "EU", 0, 10, "Norway", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 163, "OM", "OMN", "AS", 0, 10, "Oman", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 164, "PK", "PAK", "AS", 0, 10, "Pakistan", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 165, "PW", "PLW", "AU", 0, 10, "Palau", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 166, "PA", "PAN", "LA", 0, 10, "Panama", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 167, "PG", "PNG", "AS", 0, 10, "Papua New Guinea", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 168, "PY", "PRY", "LA", 0, 10, "Paraguay", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 169, "PE", "PER", "LA", 0, 10, "Peru", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 170, "PH", "PHL", "AS", 0, 10, "Philippines", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 171, "PN", "PCN", "AU", 0, 10, "Pitcairn", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 172, "PL", "POL", "EU", 0, 10, "Poland", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 173, "PT", "PRT", "EU", 0, 10, "Portugal", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 174, "PR", "PRI", "LA", 0, 10, "Puerto Rico", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 175, "QA", "QAT", "AS", 0, 10, "Qatar", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 176, "RE", "REU", "AF", 0, 10, "Reunion", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 177, "RO", "ROU", "EU", 0, 10, "Romania", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 178, "RU", "RUS", "EU", 0, 10, "Russian Federation", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 179, "RW", "RWA", "AF", 0, 10, "Rwanda", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 180, "LC", "LCA", "LA", 0, 10, "Saint Lucia", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 181, "WS", "WSM", "AU", 0, 10, "Samoa", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 182, "SM", "SMR", "EU", 0, 10, "San Marino", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 183, "ST", "STP", "AF", 0, 10, "Sao Tome and Principe", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 184, "SA", "SAU", "AS", 0, 10, "Saudi Arabia", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 185, "SN", "SEN", "AF", 0, 10, "Senegal", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 186, "SC", "SYC", "AF", 0, 10, "Seychelles", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 187, "SL", "SLE", "AF", 0, 10, "Sierra Leone", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 188, "SG", "SGP", "AS", 0, 10, "Singapore", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 189, "SK", "SVK", "EU", 0, 10, "Slovakia", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 190, "SI", "SVN", "EU", 0, 10, "Slovenia", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 191, "SB", "SLB", "AU", 0, 10, "Solomon Islands", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 192, "SO", "SOM", "AF", 0, 10, "Somalia", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 193, "ZA", "ZAF", "AF", 0, 10, "South Africa", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 194, "ES", "ESP", "EU", 0, 10, "Spain", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 195, "LK", "LKA", "AS", 0, 10, "Sri Lanka", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 196, "SH", "SHN", "AF", 0, 10, "St. Helena", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 197, "KN", "KNA", "LA", 0, 10, "St. Kitts and Nevis", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 198, "PM", "SPM", "NA", 0, 10, "St. Pierre and Miquelon", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 199, "VC", "VCT", "LA", 0, 10, "St. Vincent and the Grenadines", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 200, "SD", "SDN", "AF", 0, 10, "Sudan", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 201, "SR", "SUR", "LA", 0, 10, "Suriname", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 202, "SJ", "SJM", "EU", 0, 10, "Svalbard and Jan Mayen Islands", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 203, "SZ", "SWZ", "AF", 0, 10, "Swaziland", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 204, "SE", "SWE", "EU", 0, 10, "Sweden", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 205, "CH", "CHE", "EU", 0, 10, "Switzerland", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 206, "SY", "SYR", "AS", 0, 10, "Syrian Arab Republic", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 207, "TW", "TWN", "AS", 0, 10, "Taiwan", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 208, "TJ", "TJK", "AS", 0, 10, "Tajikistan", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 209, "TZ", "TZA", "AF", 0, 10, "Tanzania, United Republic of", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 210, "TH", "THA", "AS", 0, 10, "Thailand", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 211, "TG", "TGO", "AF", 0, 10, "Togo", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 212, "TK", "TKL", "AU", 0, 10, "Tokelau", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 213, "TO", "TON", "AU", 0, 10, "Tonga", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 214, "TT", "TTO", "LA", 0, 10, "Trinidad and Tobago", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 215, "TN", "TUN", "AF", 0, 10, "Tunisia", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 216, "TR", "TUR", "EU", 0, 10, "Turkey", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 217, "TM", "TKM", "AS", 0, 10, "Turkmenistan", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 218, "TC", "TCA", "LA", 0, 10, "Turks and Caicos Islands", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 219, "TV", "TUV", "AU", 0, 10, "Tuvalu", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 220, "UG", "UGA", "AF", 0, 10, "Uganda", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 221, "UA", "UKR", "EU", 0, 10, "Ukraine", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 222, "AE", "ARE", "AS", 0, 10, "United Arab Emirates", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 223, "GB", "GBR", "EU", 0, 3, "United Kingdom (Great Britain)", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 224, "US", "USA", "NA", 0, 6, "United States", "/\\d{5}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 225, "VI", "VIR", "LA", 0, 10, "United States Virgin Islands", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 226, "UY", "URY", "LA", 0, 10, "Uruguay", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 227, "UZ", "UZB", "AS", 0, 10, "Uzbekistan", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 228, "VU", "VUT", "AU", 0, 10, "Vanuatu", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 229, "VA", "VAT", "EU", 0, 10, "Vatican City State", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 230, "VE", "VEN", "LA", 0, 10, "Venezuela", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 231, "VN", "VNM", "AS", 0, 10, "Viet Nam", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 232, "WF", "WLF", "AU", 0, 10, "Wallis And Futuna Islands", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 233, "EH", "ESH", "AF", 0, 10, "Western Sahara", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 234, "YE", "YEM", "AS", 0, 10, "Yemen", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 236, "ZR", "ZAR", "AF", 0, 10, "Zaire", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 237, "ZM", "ZMB", "AF", 0, 10, "Zambia", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 238, "ZW", "ZWE", "AF", 0, 10, "Zimbabwe", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 239, "AP", "", "", 0, 10, "Asia-Pacific", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 240, "RS", "SRB", "EU", 0, 10, "Serbia", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2017-07-21T08:52:57+08:00", 1634878320],
        [ 241, "AX", "", "", 0, 10, "Aland Islands", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 242, "EU", "", "", 0, 10, "Europe", "/\\d{4}/", "", 1, "2009-03-03T11:43:39+09:00", "2009-08-07T13:18:53+08:00", 1634878320],
        [ 243, "ME", "MNE", "EU", 0, 10, "Montenegro", "/d{4}/", "", 1, "2013-05-18T08:00:00+08:00", "2013-05-28T19:54:49+08:00", 1634878320],
        [ 244, "GG", "GGY", "EU", 0, 10, "Guernsey", "/d{4}/", "", 1, "2017-07-05T11:00:00+08:00", "2017-07-05T11:12:44+08:00", 1634878320],
        [ 245, "JE", "JEY", "EU", 0, 10, "Jersey", "/d{4}/", "", 1, "2017-07-05T11:00:00+08:00", "2017-07-05T11:12:44+08:00", 1634878320],
        [ 246, "IM", "IMN", "EU", 0, 10, "Isle of Man", "/d{4}/", "", 1, "2017-07-06T15:00:00+08:00", "2017-07-06T15:21:08+08:00", 1634878320],
        [ 247, "BL", "BLM", "LA", 0, 10, "Saint Barthelemy", "/d{4}/", "", 1, "2017-09-07T15:00:00+08:00", "2017-09-07T12:31:49+08:00", 1634878320],
        [ 248, "BQ", "BES", "LA", 0, 10, "Bonaire, Saint Eustatius and Saba", "/d{4}/", "", 1, "2017-09-07T15:00:00+08:00", "2017-09-07T12:31:49+08:00", 1634878320],
        [ 249, "GS", "SGS", "LA", 0, 10, "South Georgia and the South Sandwich Islands", "/d{4}/", "", 1, "2017-09-07T15:00:00+08:00", "2017-09-07T12:31:49+08:00", 1634878320],
        [ 250, "MF", "MAF", "LA", 0, 10, "Saint Martin (French part)", "/d{4}/", "", 1, "2017-09-07T15:00:00+08:00", "2017-09-07T12:31:49+08:00", 1634878320],
        [ 251, "SS", "SSD", "AF", 0, 10, "South Sudan", "/d{4}/", "", 1, "2017-09-07T15:00:00+08:00", "2017-09-07T12:31:49+08:00", 1634878320],
        [ 252, "XK", "XKX", "EU", 0, 10, "Kosovo", "/d{4}/", "", 1, "2017-09-07T15:00:00+08:00", "2017-09-07T12:31:49+08:00", 1634878320]
      ]
    },
    {
      "name": "custom_app_data",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "DocumentId",
          "value": "TEXT"
        },
        {
          "column": "Data",
          "value": "TEXT"
        },
        {
          "column": "KeyInt",
          "value": "INTEGER"
        },
        {
          "column": "KeyString",
          "value": "TEXT"
        },
        {
          "column": "Label",
          "value": "TEXT"
        },
        {
          "column": "OperationalUnit",
          "value": "INTEGER"
        },
        {
          "column": "Employee",
          "value": "INTEGER"
        },
        {
          "column": "Permission",
          "value": "TEXT"
        },
        {
          "column": "Deleted",
          "value": "NUMERIC"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "custom_fields",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "System",
          "value": "TEXT"
        },
        {
          "column": "Name",
          "value": "TEXT"
        },
        {
          "column": "ApiName",
          "value": "TEXT"
        },
        {
          "column": "DeputyField",
          "value": "TEXT"
        },
        {
          "column": "SortOrder",
          "value": "INTEGER"
        },
        {
          "column": "`Default`",
          "value": "TEXT"
        },
        {
          "column": "Type",
          "value": "INTEGER"
        },
        {
          "column": "DisplayTiming",
          "value": "INTEGER"
        },
        {
          "column": "ConditionalRules",
          "value": "TEXT"
        },
        {
          "column": "`Action`",
          "value": "INTEGER"
        },
        {
          "column": "Published",
          "value": "INTEGER"
        },
        {
          "column": "Valuelist",
          "value": "TEXT"
        },
        {
          "column": "TriggerScript",
          "value": "INTEGER"
        },
        {
          "column": "Validation",
          "value": "TEXT"
        },
        {
          "column": "Helptext",
          "value": "TEXT"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "custom_field_data",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "System",
          "value": "TEXT"
        },
        {
          "column": "F01",
          "value": "TEXT"
        },
        {
          "column": "F02",
          "value": "TEXT"
        },
        {
          "column": "F03",
          "value": "TEXT"
        },
        {
          "column": "F04",
          "value": "TEXT"
        },
        {
          "column": "F05",
          "value": "TEXT"
        },
        {
          "column": "F06",
          "value": "TEXT"
        },
        {
          "column": "F07",
          "value": "TEXT"
        },
        {
          "column": "F08",
          "value": "TEXT"
        },
        {
          "column": "F09",
          "value": "TEXT"
        },
        {
          "column": "F10",
          "value": "TEXT"
        },
        {
          "column": "F11",
          "value": "TEXT"
        },
        {
          "column": "F12",
          "value": "TEXT"
        },
        {
          "column": "F13",
          "value": "TEXT"
        },
        {
          "column": "F14",
          "value": "TEXT"
        },
        {
          "column": "F15",
          "value": "TEXT"
        },
        {
          "column": "F16",
          "value": "TEXT"
        },
        {
          "column": "F17",
          "value": "TEXT"
        },
        {
          "column": "F18",
          "value": "TEXT"
        },
        {
          "column": "F19",
          "value": "TEXT"
        },
        {
          "column": "F20",
          "value": "TEXT"
        },
        {
          "column": "F21",
          "value": "TEXT"
        },
        {
          "column": "F22",
          "value": "TEXT"
        },
        {
          "column": "F23",
          "value": "TEXT"
        },
        {
          "column": "F24",
          "value": "TEXT"
        },
        {
          "column": "F25",
          "value": "TEXT"
        },
        {
          "column": "F26",
          "value": "TEXT"
        },
        {
          "column": "F27",
          "value": "TEXT"
        },
        {
          "column": "F28",
          "value": "TEXT"
        },
        {
          "column": "F29",
          "value": "TEXT"
        },
        {
          "column": "F30",
          "value": "TEXT"
        },
        {
          "column": "F31",
          "value": "TEXT"
        },
        {
          "column": "F32",
          "value": "TEXT"
        },
        {
          "column": "F33",
          "value": "TEXT"
        },
        {
          "column": "F34",
          "value": "TEXT"
        },
        {
          "column": "F35",
          "value": "TEXT"
        },
        {
          "column": "F36",
          "value": "TEXT"
        },
        {
          "column": "F37",
          "value": "TEXT"
        },
        {
          "column": "F38",
          "value": "TEXT"
        },
        {
          "column": "F39",
          "value": "TEXT"
        },
        {
          "column": "F40",
          "value": "TEXT"
        },
        {
          "column": "F41",
          "value": "TEXT"
        },
        {
          "column": "F42",
          "value": "TEXT"
        },
        {
          "column": "F43",
          "value": "TEXT"
        },
        {
          "column": "F44",
          "value": "TEXT"
        },
        {
          "column": "F45",
          "value": "TEXT"
        },
        {
          "column": "F46",
          "value": "TEXT"
        },
        {
          "column": "F47",
          "value": "TEXT"
        },
        {
          "column": "F48",
          "value": "TEXT"
        },
        {
          "column": "F49",
          "value": "TEXT"
        },
        {
          "column": "F50",
          "value": "TEXT"
        },
        {
          "column": "F51",
          "value": "TEXT"
        },
        {
          "column": "F52",
          "value": "TEXT"
        },
        {
          "column": "F53",
          "value": "TEXT"
        },
        {
          "column": "F54",
          "value": "TEXT"
        },
        {
          "column": "F55",
          "value": "TEXT"
        },
        {
          "column": "F56",
          "value": "TEXT"
        },
        {
          "column": "F57",
          "value": "TEXT"
        },
        {
          "column": "F58",
          "value": "TEXT"
        },
        {
          "column": "F59",
          "value": "TEXT"
        },
        {
          "column": "F60",
          "value": "TEXT"
        },
        {
          "column": "F61",
          "value": "TEXT"
        },
        {
          "column": "F62",
          "value": "TEXT"
        },
        {
          "column": "F63",
          "value": "TEXT"
        },
        {
          "column": "F64",
          "value": "TEXT"
        },
        {
          "column": "F65",
          "value": "TEXT"
        },
        {
          "column": "F66",
          "value": "TEXT"
        },
        {
          "column": "F67",
          "value": "TEXT"
        },
        {
          "column": "F68",
          "value": "TEXT"
        },
        {
          "column": "F69",
          "value": "TEXT"
        },
        {
          "column": "F70",
          "value": "TEXT"
        },
        {
          "column": "F71",
          "value": "TEXT"
        },
        {
          "column": "F72",
          "value": "TEXT"
        },
        {
          "column": "F73",
          "value": "TEXT"
        },
        {
          "column": "F74",
          "value": "TEXT"
        },
        {
          "column": "F75",
          "value": "TEXT"
        },
        {
          "column": "F76",
          "value": "TEXT"
        },
        {
          "column": "F77",
          "value": "TEXT"
        },
        {
          "column": "F78",
          "value": "TEXT"
        },
        {
          "column": "F79",
          "value": "TEXT"
        },
        {
          "column": "F80",
          "value": "TEXT"
        },
        {
          "column": "F81",
          "value": "TEXT"
        },
        {
          "column": "F82",
          "value": "TEXT"
        },
        {
          "column": "F83",
          "value": "TEXT"
        },
        {
          "column": "F84",
          "value": "TEXT"
        },
        {
          "column": "F85",
          "value": "TEXT"
        },
        {
          "column": "F86",
          "value": "TEXT"
        },
        {
          "column": "F87",
          "value": "TEXT"
        },
        {
          "column": "F88",
          "value": "TEXT"
        },
        {
          "column": "F89",
          "value": "TEXT"
        },
        {
          "column": "F90",
          "value": "TEXT"
        },
        {
          "column": "F91",
          "value": "TEXT"
        },
        {
          "column": "F92",
          "value": "TEXT"
        },
        {
          "column": "F93",
          "value": "TEXT"
        },
        {
          "column": "F94",
          "value": "TEXT"
        },
        {
          "column": "F95",
          "value": "TEXT"
        },
        {
          "column": "F96",
          "value": "TEXT"
        },
        {
          "column": "F97",
          "value": "TEXT"
        },
        {
          "column": "F98",
          "value": "TEXT"
        },
        {
          "column": "F99",
          "value": "TEXT"
        },
        {
          "column": "F100",
          "value": "TEXT"
        },
        {
          "column": "F101",
          "value": "TEXT"
        },
        {
          "column": "F102",
          "value": "TEXT"
        },
        {
          "column": "F103",
          "value": "TEXT"
        },
        {
          "column": "F104",
          "value": "TEXT"
        },
        {
          "column": "F105",
          "value": "TEXT"
        },
        {
          "column": "F106",
          "value": "TEXT"
        },
        {
          "column": "F107",
          "value": "TEXT"
        },
        {
          "column": "F108",
          "value": "TEXT"
        },
        {
          "column": "F109",
          "value": "TEXT"
        },
        {
          "column": "F110",
          "value": "TEXT"
        },
        {
          "column": "F111",
          "value": "TEXT"
        },
        {
          "column": "F112",
          "value": "TEXT"
        },
        {
          "column": "F113",
          "value": "TEXT"
        },
        {
          "column": "F114",
          "value": "TEXT"
        },
        {
          "column": "F115",
          "value": "TEXT"
        },
        {
          "column": "F116",
          "value": "TEXT"
        },
        {
          "column": "F117",
          "value": "TEXT"
        },
        {
          "column": "F118",
          "value": "TEXT"
        },
        {
          "column": "F119",
          "value": "TEXT"
        },
        {
          "column": "F120",
          "value": "TEXT"
        },
        {
          "column": "F121",
          "value": "TEXT"
        },
        {
          "column": "F122",
          "value": "TEXT"
        },
        {
          "column": "F123",
          "value": "TEXT"
        },
        {
          "column": "F124",
          "value": "TEXT"
        },
        {
          "column": "F125",
          "value": "TEXT"
        },
        {
          "column": "F126",
          "value": "TEXT"
        },
        {
          "column": "F127",
          "value": "TEXT"
        },
        {
          "column": "F128",
          "value": "TEXT"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "employees",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "Company",
          "value": "INTEGER"
        },
        {
          "column": "FirstName",
          "value": "TEXT"
        },
        {
          "column": "LastName",
          "value": "TEXT"
        },
        {
          "column": "DisplayName",
          "value": "TEXT"
        },
        {
          "column": "OtherName",
          "value": "TEXT"
        },
        {
          "column": "Salutation",
          "value": "TEXT"
        },
        {
          "column": "MainAddress",
          "value": "INTEGER"
        },
        {
          "column": "PostalAddress",
          "value": "INTEGER"
        },
        {
          "column": "Contact",
          "value": "INTEGER"
        },
        {
          "column": "EmergencyAddress",
          "value": "INTEGER"
        },
        {
          "column": "DateOfBirth",
          "value": "TEXT"
        },
        {
          "column": "Gender",
          "value": "INTEGER"
        },
        {
          "column": "Photo",
          "value": "INTEGER"
        },
        {
          "column": "UserId",
          "value": "INTEGER"
        },
        {
          "column": "JobAppId",
          "value": "INTEGER"
        },
        {
          "column": "Active",
          "value": "NUMERIC"
        },
        {
          "column": "StartDate",
          "value": "TEXT"
        },
        {
          "column": "TerminationDate",
          "value": "TEXT"
        },
        {
          "column": "StressProfile",
          "value": "INTEGER"
        },
        {
          "column": "Position",
          "value": "TEXT"
        },
        {
          "column": "HigherDuty",
          "value": "NUMERIC"
        },
        {
          "column": "Role",
          "value": "INTEGER"
        },
        {
          "column": "AllowAppraisal",
          "value": "NUMERIC"
        },
        {
          "column": "HistoryId",
          "value": "INTEGER"
        },
        {
          "column": "CustomFieldData",
          "value": "INTEGER"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "employee_agreements",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "EmployeeId",
          "value": "INTEGER"
        },
        {
          "column": "PayPoint",
          "value": "INTEGER"
        },
        {
          "column": "EmpType",
          "value": "INTEGER"
        },
        {
          "column": "CompanyName",
          "value": "TEXT"
        },
        {
          "column": "Active",
          "value": "NUMERIC"
        },
        {
          "column": "StartDate",
          "value": "TEXT"
        },
        {
          "column": "EndDate",
          "value": "TEXT"
        },
        {
          "column": "Contract",
          "value": "INTEGER"
        },
        {
          "column": "SalaryPayRule",
          "value": "INTEGER"
        },
        {
          "column": "ContractFile",
          "value": "INTEGER"
        },
        {
          "column": "PayrollId",
          "value": "TEXT"
        },
        {
          "column": "PayPeriod",
          "value": "INTEGER"
        },
        {
          "column": "HistoryId",
          "value": "INTEGER"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "employee_agreement_history",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "AgreementId",
          "value": "INTEGER"
        },
        {
          "column": "PayPoint",
          "value": "INTEGER"
        },
        {
          "column": "EmpType",
          "value": "INTEGER"
        },
        {
          "column": "CompanyName",
          "value": "TEXT"
        },
        {
          "column": "Active",
          "value": "NUMERIC"
        },
        {
          "column": "StartDate",
          "value": "TEXT"
        },
        {
          "column": "Contract",
          "value": "INTEGER"
        },
        {
          "column": "SalaryPayRule",
          "value": "INTEGER"
        },
        {
          "column": "ContractFile",
          "value": "INTEGER"
        },
        {
          "column": "PayrollId",
          "value": "TEXT"
        },
        {
          "column": "PayPeriod",
          "value": "INTEGER"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "employee_appraisal",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "Employee",
          "value": "INTEGER"
        },
        {
          "column": "DayTimestamp",
          "value": "INTEGER"
        },
        {
          "column": "Date",
          "value": "TEXT"
        },
        {
          "column": "Mark01",
          "value": "REAL"
        },
        {
          "column": "Mark02",
          "value": "REAL"
        },
        {
          "column": "Mark03",
          "value": "REAL"
        },
        {
          "column": "Mark04",
          "value": "REAL"
        },
        {
          "column": "Mark05",
          "value": "REAL"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "employee_availability",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "Employee",
          "value": "INTEGER"
        },
        {
          "column": "Type",
          "value": "INTEGER"
        },
        {
          "column": "MaxDateRecurringGenerated",
          "value": "TEXT"
        },
        {
          "column": "StartTime",
          "value": "INTEGER"
        },
        {
          "column": "EndTime",
          "value": "INTEGER"
        },
        {
          "column": "Date",
          "value": "TEXT"
        },
        {
          "column": "Comment",
          "value": "TEXT"
        },
        {
          "column": "Schedule",
          "value": "INTEGER"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "employee_history",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "Company",
          "value": "INTEGER"
        },
        {
          "column": "FirstName",
          "value": "TEXT"
        },
        {
          "column": "LastName",
          "value": "TEXT"
        },
        {
          "column": "DisplayName",
          "value": "TEXT"
        },
        {
          "column": "OtherName",
          "value": "TEXT"
        },
        {
          "column": "Salutation",
          "value": "TEXT"
        },
        {
          "column": "MainAddress",
          "value": "INTEGER"
        },
        {
          "column": "PostalAddress",
          "value": "INTEGER"
        },
        {
          "column": "EmergencyAddress",
          "value": "INTEGER"
        },
        {
          "column": "DateOfBirth",
          "value": "TEXT"
        },
        {
          "column": "Gender",
          "value": "INTEGER"
        },
        {
          "column": "Photo",
          "value": "INTEGER"
        },
        {
          "column": "JobAppId",
          "value": "INTEGER"
        },
        {
          "column": "Active",
          "value": "NUMERIC"
        },
        {
          "column": "StartDate",
          "value": "TEXT"
        },
        {
          "column": "TerminationDate",
          "value": "TEXT"
        },
        {
          "column": "Position",
          "value": "TEXT"
        },
        {
          "column": "Role",
          "value": "INTEGER"
        },
        {
          "column": "EmployeeId",
          "value": "INTEGER"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "employee_paycycles",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "EmployeeId",
          "value": "INTEGER"
        },
        {
          "column": "EmployeeAgreementId",
          "value": "INTEGER"
        },
        {
          "column": "PeriodId",
          "value": "INTEGER"
        },
        {
          "column": "RecommendedLoadings",
          "value": "NUMERIC"
        },
        {
          "column": "Timesheets",
          "value": "INTEGER"
        },
        {
          "column": "TimesheetsTimeApproved",
          "value": "INTEGER"
        },
        {
          "column": "TimesheetsPayApproved",
          "value": "INTEGER"
        },
        {
          "column": "PaycycleRules",
          "value": "INTEGER"
        },
        {
          "column": "PaycycleRulesApproved",
          "value": "INTEGER"
        },
        {
          "column": "Exported",
          "value": "NUMERIC"
        },
        {
          "column": "ExportId",
          "value": "INTEGER"
        },
        {
          "column": "Paid",
          "value": "NUMERIC"
        },
        {
          "column": "TimeTotal",
          "value": "REAL"
        },
        {
          "column": "CostTotal",
          "value": "REAL"
        },
        {
          "column": "EmployeeAgreementHistoryId",
          "value": "INTEGER"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "employee_paycycle_returns",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "PaycycleId",
          "value": "INTEGER"
        },
        {
          "column": "PayRule",
          "value": "INTEGER"
        },
        {
          "column": "Approved",
          "value": "NUMERIC"
        },
        {
          "column": "Overridden",
          "value": "NUMERIC"
        },
        {
          "column": "Value",
          "value": "REAL"
        },
        {
          "column": "Cost",
          "value": "REAL"
        },
        {
          "column": "OverrideComment",
          "value": "TEXT"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "employee_roles",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "Role",
          "value": "TEXT"
        },
        {
          "column": "Ranking",
          "value": "INTEGER"
        },
        {
          "column": "ReportTo",
          "value": "INTEGER"
        },
        {
          "column": "Permissions",
          "value": "TEXT"
        },
        {
          "column": "Require2fa",
          "value": "NUMERIC"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "employee_salary_opunit_costing",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "Employee",
          "value": "INTEGER"
        },
        {
          "column": "EmployeeAgreement",
          "value": "INTEGER"
        },
        {
          "column": "AgreementHistory",
          "value": "INTEGER"
        },
        {
          "column": "DayTimestamp",
          "value": "INTEGER"
        },
        {
          "column": "Date",
          "value": "TEXT"
        },
        {
          "column": "OpUnit",
          "value": "INTEGER"
        },
        {
          "column": "Cost",
          "value": "REAL"
        },
        {
          "column": "Final",
          "value": "NUMERIC"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "employee_workplaces",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "EmployeeId",
          "value": "INTEGER"
        },
        {
          "column": "Company",
          "value": "INTEGER"
        },
        {
          "column": "SortOrder",
          "value": "INTEGER"
        },
        {
          "column": "Agreement1",
          "value": "INTEGER"
        },
        {
          "column": "Agreement2",
          "value": "INTEGER"
        },
        {
          "column": "Agreement3",
          "value": "INTEGER"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "employment_conditions",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "Name",
          "value": "TEXT"
        },
        {
          "column": "Description",
          "value": "TEXT"
        },
        {
          "column": "AwardLevel",
          "value": "TEXT"
        },
        {
          "column": "EmploymentBasis",
          "value": "INTEGER"
        },
        {
          "column": "EmploymentCategory",
          "value": "INTEGER"
        },
        {
          "column": "EmploymentPeriod",
          "value": "INTEGER"
        },
        {
          "column": "EmploymentStatus",
          "value": "INTEGER"
        },
        {
          "column": "ProbationaryPeriod",
          "value": "INTEGER"
        },
        {
          "column": "WorkingDaysPerPeriod",
          "value": "REAL"
        },
        {
          "column": "UsualStartTime",
          "value": "TEXT"
        },
        {
          "column": "UsualFinishTime",
          "value": "TEXT"
        },
        {
          "column": "UsualMealbreak",
          "value": "TEXT"
        },
        {
          "column": "AvgHoursPerDay",
          "value": "REAL"
        },
        {
          "column": "MinHoursPerDay",
          "value": "REAL"
        },
        {
          "column": "MinHoursForLeave",
          "value": "REAL"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "employee_contracts",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "Code",
          "value": "TEXT"
        },
        {
          "column": "Name",
          "value": "TEXT"
        },
        {
          "column": "Description",
          "value": "TEXT"
        },
        {
          "column": "EmploymentBasis",
          "value": "INTEGER"
        },
        {
          "column": "EmploymentCategory",
          "value": "INTEGER"
        },
        {
          "column": "EmploymentStatus",
          "value": "INTEGER"
        },
        {
          "column": "EmploymentCondition",
          "value": "INTEGER"
        },
        {
          "column": "BasePayRule",
          "value": "INTEGER"
        },
        {
          "column": "StressProfile",
          "value": "INTEGER"
        },
        {
          "column": "StartDate",
          "value": "TEXT"
        },
        {
          "column": "EndDate",
          "value": "TEXT"
        },
        {
          "column": "PeriodType",
          "value": "INTEGER"
        },
        {
          "column": "File",
          "value": "INTEGER"
        },
        {
          "column": "StrictLeaveApproval",
          "value": "NUMERIC"
        },
        {
          "column": "Award",
          "value": "TEXT"
        },
        {
          "column": "EmploymentSubType",
          "value": "TEXT"
        },
        {
          "column": "AwardStartDate",
          "value": "TEXT"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "employee_contract_leave_rules",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "ContractId",
          "value": "INTEGER"
        },
        {
          "column": "LeaveRuleId",
          "value": "INTEGER"
        },
        {
          "column": "BasePayRule",
          "value": "INTEGER"
        },
        {
          "column": "LoadingPayRule1",
          "value": "INTEGER"
        },
        {
          "column": "LoadingPayRule2",
          "value": "INTEGER"
        },
        {
          "column": "LoadingPayRule3",
          "value": "INTEGER"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "events",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "Title",
          "value": "TEXT"
        },
        {
          "column": "Schedule",
          "value": "INTEGER"
        },
        {
          "column": "Colour",
          "value": "TEXT"
        },
        {
          "column": "ShowOnRoster",
          "value": "NUMERIC"
        },
        {
          "column": "AddToBudget",
          "value": "REAL"
        },
        {
          "column": "BlockTimeOff",
          "value": "NUMERIC"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "geo",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "Orm",
          "value": "TEXT"
        },
        {
          "column": "RecId",
          "value": "INTEGER"
        },
        {
          "column": "Longitude",
          "value": "REAL"
        },
        {
          "column": "Latitude",
          "value": "REAL"
        },
        {
          "column": "No",
          "value": "TEXT"
        },
        {
          "column": "Street",
          "value": "TEXT"
        },
        {
          "column": "Suburb",
          "value": "TEXT"
        },
        {
          "column": "State",
          "value": "TEXT"
        },
        {
          "column": "Postcode",
          "value": "TEXT"
        },
        {
          "column": "Country",
          "value": "INTEGER"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "journal",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "Date",
          "value": "TEXT"
        },
        {
          "column": "EmployeeId",
          "value": "INTEGER"
        },
        {
          "column": "Comment",
          "value": "TEXT"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "kiosks",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "Name",
          "value": "TEXT"
        },
        {
          "column": "InstallationId",
          "value": "TEXT"
        },
        {
          "column": "Company",
          "value": "INTEGER"
        },
        {
          "column": "ConnectionMode",
          "value": "INTEGER"
        },
        {
          "column": "SubnetRestriction",
          "value": "TEXT"
        },
        {
          "column": "AuthenticationMode",
          "value": "INTEGER"
        },
        {
          "column": "UseBiometric",
          "value": "NUMERIC"
        },
        {
          "column": "LastActivity",
          "value": "TEXT"
        },
        {
          "column": "IpAddress",
          "value": "TEXT"
        },
        {
          "column": "EnableMultiLocations",
          "value": "NUMERIC"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "leaves",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "Employee",
          "value": "INTEGER"
        },
        {
          "column": "EmployeeHistory",
          "value": "INTEGER"
        },
        {
          "column": "Company",
          "value": "INTEGER"
        },
        {
          "column": "LeaveRule",
          "value": "INTEGER"
        },
        {
          "column": "Start",
          "value": "INTEGER"
        },
        {
          "column": "DateStart",
          "value": "TEXT"
        },
        {
          "column": "`End`",
          "value": "INTEGER"
        },
        {
          "column": "DateEnd",
          "value": "TEXT"
        },
        {
          "column": "Days",
          "value": "REAL"
        },
        {
          "column": "ApproverTime",
          "value": "INTEGER"
        },
        {
          "column": "ApproverPay",
          "value": "INTEGER"
        },
        {
          "column": "Comment",
          "value": "TEXT"
        },
        {
          "column": "Status",
          "value": "INTEGER"
        },
        {
          "column": "ApprovalComment",
          "value": "TEXT"
        },
        {
          "column": "TotalHours",
          "value": "REAL"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "leave_accruals",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "Employee",
          "value": "INTEGER"
        },
        {
          "column": "EmployeeHistory",
          "value": "INTEGER"
        },
        {
          "column": "TransactionDate",
          "value": "TEXT"
        },
        {
          "column": "Type",
          "value": "INTEGER"
        },
        {
          "column": "LeaveRule",
          "value": "INTEGER"
        },
        {
          "column": "Hours",
          "value": "REAL"
        },
        {
          "column": "Days",
          "value": "REAL"
        },
        {
          "column": "Comment",
          "value": "TEXT"
        },
        {
          "column": "FkId",
          "value": "INTEGER"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "leave_pay_lines",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "LeaveId",
          "value": "INTEGER"
        },
        {
          "column": "LeaveRule",
          "value": "INTEGER"
        },
        {
          "column": "EmployeeAgreement",
          "value": "INTEGER"
        },
        {
          "column": "Date",
          "value": "TEXT"
        },
        {
          "column": "StartTime",
          "value": "TEXT"
        },
        {
          "column": "EndTime",
          "value": "TEXT"
        },
        {
          "column": "Hours",
          "value": "TEXT"
        },
        {
          "column": "Comment",
          "value": "TEXT"
        },
        {
          "column": "TimesheetId",
          "value": "INTEGER"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "leave_rules",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "Name",
          "value": "TEXT"
        },
        {
          "column": "Type",
          "value": "TEXT"
        },
        {
          "column": "Description",
          "value": "TEXT"
        },
        {
          "column": "MaxAllowedAnnually",
          "value": "REAL"
        },
        {
          "column": "PaidLeave",
          "value": "NUMERIC"
        },
        {
          "column": "AnnualRollOver",
          "value": "NUMERIC"
        },
        {
          "column": "Visible",
          "value": "NUMERIC"
        },
        {
          "column": "UnitType",
          "value": "INTEGER"
        },
        {
          "column": "ResetType",
          "value": "INTEGER"
        },
        {
          "column": "ResetSchedule",
          "value": "INTEGER"
        },
        {
          "column": "ResetValue",
          "value": "REAL"
        },
        {
          "column": "PayoutOnTermination",
          "value": "NUMERIC"
        },
        {
          "column": "EntitlementAfterMonth",
          "value": "INTEGER"
        },
        {
          "column": "ExportType",
          "value": "INTEGER"
        },
        {
          "column": "PayrollCategory",
          "value": "TEXT"
        },
        {
          "column": "CalcType",
          "value": "INTEGER"
        },
        {
          "column": "Calc",
          "value": "TEXT"
        },
        {
          "column": "F00",
          "value": "TEXT"
        },
        {
          "column": "F01",
          "value": "TEXT"
        },
        {
          "column": "F02",
          "value": "TEXT"
        },
        {
          "column": "F03",
          "value": "TEXT"
        },
        {
          "column": "F04",
          "value": "TEXT"
        },
        {
          "column": "F05",
          "value": "TEXT"
        },
        {
          "column": "F06",
          "value": "TEXT"
        },
        {
          "column": "F07",
          "value": "TEXT"
        },
        {
          "column": "F08",
          "value": "TEXT"
        },
        {
          "column": "F09",
          "value": "TEXT"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "memos",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "ShowFrom",
          "value": "TEXT"
        },
        {
          "column": "Active",
          "value": "NUMERIC"
        },
        {
          "column": "ShowTill",
          "value": "TEXT"
        },
        {
          "column": "Title",
          "value": "TEXT"
        },
        {
          "column": "Content",
          "value": "TEXT"
        },
        {
          "column": "Type",
          "value": "INTEGER"
        },
        {
          "column": "File",
          "value": "INTEGER"
        },
        {
          "column": "Url",
          "value": "TEXT"
        },
        {
          "column": "ConfirmText",
          "value": "TEXT"
        },
        {
          "column": "Keyword",
          "value": "TEXT"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "_DPMetaData",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "operational_units",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "Company",
          "value": "INTEGER"
        },
        {
          "column": "WorkType",
          "value": "TEXT"
        },
        {
          "column": "ParentOperationalUnit",
          "value": "INTEGER"
        },
        {
          "column": "OperationalUnitName",
          "value": "TEXT"
        },
        {
          "column": "Active",
          "value": "NUMERIC"
        },
        {
          "column": "PayrollExportName",
          "value": "TEXT"
        },
        {
          "column": "Address",
          "value": "INTEGER"
        },
        {
          "column": "Contact",
          "value": "INTEGER"
        },
        {
          "column": "RosterSortOrder",
          "value": "INTEGER"
        },
        {
          "column": "ShowOnRoster",
          "value": "NUMERIC"
        },
        {
          "column": "Colour",
          "value": "TEXT"
        },
        {
          "column": "RosterActiveHoursSchedule",
          "value": "INTEGER"
        },
        {
          "column": "DailyRosterBudget",
          "value": "REAL"
        },
        {
          "column": "OperationalUnitType",
          "value": "INTEGER"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "pay_periods",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "Name",
          "value": "TEXT"
        },
        {
          "column": "Active",
          "value": "NUMERIC"
        },
        {
          "column": "StartDate",
          "value": "TEXT"
        },
        {
          "column": "Cycle",
          "value": "INTEGER"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "pay_rules",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "PayTitle",
          "value": "TEXT"
        },
        {
          "column": "RemunerationType",
          "value": "INTEGER"
        },
        {
          "column": "RemunerationBy",
          "value": "INTEGER"
        },
        {
          "column": "AnnualSalary",
          "value": "REAL"
        },
        {
          "column": "HourlyRate",
          "value": "REAL"
        },
        {
          "column": "IsMultiplier",
          "value": "NUMERIC"
        },
        {
          "column": "MultiplierValue",
          "value": "REAL"
        },
        {
          "column": "MultiplierBaseRate",
          "value": "INTEGER"
        },
        {
          "column": "MinimumType",
          "value": "INTEGER"
        },
        {
          "column": "MaximumType",
          "value": "INTEGER"
        },
        {
          "column": "MinimumValue",
          "value": "REAL"
        },
        {
          "column": "MaximumValue",
          "value": "REAL"
        },
        {
          "column": "MinimumShiftLength",
          "value": "TEXT"
        },
        {
          "column": "MaximumShiftLength",
          "value": "TEXT"
        },
        {
          "column": "AdvancedCalculation",
          "value": "TEXT"
        },
        {
          "column": "IsExported",
          "value": "NUMERIC"
        },
        {
          "column": "UnitValue",
          "value": "REAL"
        },
        {
          "column": "Schedule",
          "value": "INTEGER"
        },
        {
          "column": "RecommendWith",
          "value": "INTEGER"
        },
        {
          "column": "DexmlScript",
          "value": "INTEGER"
        },
        {
          "column": "DexmlScriptParam",
          "value": "TEXT"
        },
        {
          "column": "PeriodType",
          "value": "INTEGER"
        },
        {
          "column": "PayPortionRule",
          "value": "INTEGER"
        },
        {
          "column": "PayrollCategory",
          "value": "TEXT"
        },
        {
          "column": "Comment",
          "value": "TEXT"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "public_holidays",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "Title",
          "value": "TEXT"
        },
        {
          "column": "Schedule",
          "value": "INTEGER"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "rosters",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "Date",
          "value": "TEXT"
        },
        {
          "column": "StartTime",
          "value": "INTEGER"
        },
        {
          "column": "EndTime",
          "value": "INTEGER"
        },
        {
          "column": "Mealbreak",
          "value": "TEXT"
        },
        {
          "column": "Slots",
          "value": "TEXT"
        },
        {
          "column": "TotalTime",
          "value": "REAL"
        },
        {
          "column": "Cost",
          "value": "REAL"
        },
        {
          "column": "OperationalUnit",
          "value": "INTEGER"
        },
        {
          "column": "Employee",
          "value": "INTEGER"
        },
        {
          "column": "Comment",
          "value": "TEXT"
        },
        {
          "column": "Warning",
          "value": "TEXT"
        },
        {
          "column": "WarningOverrideComment",
          "value": "TEXT"
        },
        {
          "column": "Published",
          "value": "NUMERIC"
        },
        {
          "column": "MatchedByTimesheet",
          "value": "INTEGER"
        },
        {
          "column": "Open",
          "value": "NUMERIC"
        },
        {
          "column": "ApprovalRequired",
          "value": "NUMERIC"
        },
        {
          "column": "ConfirmStatus",
          "value": "INTEGER"
        },
        {
          "column": "ConfirmComment",
          "value": "TEXT"
        },
        {
          "column": "ConfirmBy",
          "value": "INTEGER"
        },
        {
          "column": "ConfirmTime",
          "value": "INTEGER"
        },
        {
          "column": "SwapStatus",
          "value": "INTEGER"
        },
        {
          "column": "SwapManageBy",
          "value": "INTEGER"
        },
        {
          "column": "ShiftTemplate",
          "value": "INTEGER"
        },
        {
          "column": "ConnectStatus",
          "value": "INTEGER"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "roster_opens",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "Roster",
          "value": "INTEGER"
        },
        {
          "column": "Employee",
          "value": "INTEGER"
        },
        {
          "column": "Accepted",
          "value": "NUMERIC"
        },
        {
          "column": "Seen",
          "value": "NUMERIC"
        },
        {
          "column": "Declined",
          "value": "NUMERIC"
        },
        {
          "column": "Link",
          "value": "TEXT"
        },
        {
          "column": "Message",
          "value": "TEXT"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "roster_swaps",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "SourceRoster",
          "value": "INTEGER"
        },
        {
          "column": "TargetRoster",
          "value": "INTEGER"
        },
        {
          "column": "Employee",
          "value": "INTEGER"
        },
        {
          "column": "Status",
          "value": "INTEGER"
        },
        {
          "column": "RequestMessage",
          "value": "TEXT"
        },
        {
          "column": "ResponseMessage",
          "value": "TEXT"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "sales_data",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "Date",
          "value": "TEXT"
        },
        {
          "column": "Timestamp",
          "value": "INTEGER"
        },
        {
          "column": "Employee",
          "value": "INTEGER"
        },
        {
          "column": "OperationalUnit",
          "value": "INTEGER"
        },
        {
          "column": "SalesType",
          "value": "TEXT"
        },
        {
          "column": "SalesRef",
          "value": "TEXT"
        },
        {
          "column": "SalesQty",
          "value": "REAL"
        },
        {
          "column": "SalesAmount",
          "value": "REAL"
        },
        {
          "column": "SalesPayload",
          "value": "TEXT"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "schedules",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "Name",
          "value": "TEXT"
        },
        {
          "column": "StartDate",
          "value": "TEXT"
        },
        {
          "column": "StartTime",
          "value": "TEXT"
        },
        {
          "column": "EndTime",
          "value": "TEXT"
        },
        {
          "column": "RepeatType",
          "value": "INTEGER"
        },
        {
          "column": "RepeatEvery",
          "value": "INTEGER"
        },
        {
          "column": "WeeklyOnDays",
          "value": "TEXT"
        },
        {
          "column": "MonthlyOnDates",
          "value": "TEXT"
        },
        {
          "column": "MonthlyOnDays",
          "value": "TEXT"
        },
        {
          "column": "EndDate",
          "value": "TEXT"
        },
        {
          "column": "Exception",
          "value": "TEXT"
        },
        {
          "column": "Saved",
          "value": "NUMERIC"
        },
        {
          "column": "Orm",
          "value": "TEXT"
        },
        {
          "column": "Template",
          "value": "NUMERIC"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "sms_logs",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "Destination",
          "value": "TEXT"
        },
        {
          "column": "Message",
          "value": "TEXT"
        },
        {
          "column": "Count",
          "value": "INTEGER"
        },
        {
          "column": "SmsId",
          "value": "TEXT"
        },
        {
          "column": "DeliveryReport",
          "value": "TEXT"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "states",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "Country",
          "value": "INTEGER"
        },
        {
          "column": "Code",
          "value": "TEXT"
        },
        {
          "column": "Active",
          "value": "NUMERIC"
        },
        {
          "column": "SortOrder",
          "value": "INTEGER"
        },
        {
          "column": "State",
          "value": "TEXT"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ],
      "values": [
        [ 10, 224, "AL", 1, 10, "Alabama", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 11, 224, "AK", 1, 10, "Alaska", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 12, 224, "AZ", 1, 10, "Arizona", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 13, 224, "AR", 1, 10, "Arkansas", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 15, 224, "CA", 1, 10, "California", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:43:49+09:00", 1634878320],
        [ 16, 224, "CO", 1, 10, "Colorado", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 17, 224, "CT", 1, 10, "Connecticut", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 18, 224, "DE", 1, 10, "Delaware", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 19, 224, "DC", 1, 10, "Washington DC", 1, "2009-03-03T12:31:40+09:00", "2015-09-15T16:35:40+08:00", 1634878320],
        [ 20, 224, "FL", 1, 10, "Florida", 1, "2009-03-03T12:31:40+09:00", "2009-03-11T09:21:53+09:00", 1634878320],
        [ 21, 224, "GA", 1, 10, "Georgia", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 22, 224, "GU", 1, 10, "Guam", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 23, 224, "HI", 1, 10, "Hawaii", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 24, 224, "ID", 1, 10, "Idaho", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 25, 224, "IL", 1, 10, "Illinois", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 26, 224, "IN", 1, 10, "Indiana", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 27, 224, "IA", 1, 10, "Iowa", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 28, 224, "KS", 1, 10, "Kansas", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 29, 224, "KY", 1, 10, "Kentucky", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 30, 224, "LA", 1, 10, "Louisiana", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 31, 224, "ME", 1, 10, "Maine", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 32, 224, "MD", 1, 10, "Maryland", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 33, 224, "MA", 1, 10, "Massachusetts", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 34, 224, "MI", 1, 10, "Michigan", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 35, 224, "MN", 1, 10, "Minnesota", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 36, 224, "MS", 1, 10, "Mississippi", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 37, 224, "MO", 1, 10, "Missouri", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 38, 224, "MT", 1, 10, "Montana", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 39, 224, "NE", 1, 10, "Nebraska", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 40, 224, "NV", 1, 10, "Nevada", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 41, 224, "NH", 1, 10, "New Hampshire", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 42, 224, "NJ", 1, 10, "New Jersey", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 43, 224, "NM", 1, 10, "New Mexico", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 44, 224, "NY", 1, 10, "New York", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 45, 224, "NC", 1, 10, "North Carolina", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 46, 224, "ND", 1, 10, "North Dakota", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 47, 224, "OH", 1, 10, "Ohio", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 48, 224, "OK", 1, 10, "Oklahoma", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 49, 224, "OR", 1, 10, "Oregon", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 50, 224, "PA", 1, 10, "Pennsylvania", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 51, 224, "PR", 1, 10, "Puerto Rico", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 52, 224, "RI", 1, 10, "Rhode Island", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 53, 224, "SC", 1, 10, "South Carolina", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 54, 224, "SD", 1, 10, "South Dakota", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 55, 224, "TN", 1, 10, "Tennessee", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 56, 224, "TX", 1, 10, "Texas", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 57, 224, "UT", 1, 10, "Utah", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 58, 224, "VT", 1, 10, "Vermont", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 59, 224, "VI", 1, 10, "Virgin Islands", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 60, 224, "VA", 1, 10, "Virginia", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 61, 224, "WA", 1, 10, "Washington", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 62, 224, "WV", 1, 10, "West Virginia", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 63, 224, "WI", 1, 10, "Wisconsin", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 64, 224, "WY", 1, 10, "Wyoming", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 66, 74, "02", 1, 10, "Aisne", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 67, 74, "03", 1, 10, "Allier", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 68, 74, "04", 1, 10, "Alpes-de-Haute-Provence", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 69, 74, "06", 1, 10, "Alpes-Maritimes", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 70, 74, "07", 1, 10, "Ardèche", 1, "2009-03-03T12:31:40+09:00", "2017-09-07T12:31:49+08:00", 1634878320],
        [ 71, 74, "08", 1, 10, "Ardennes", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 72, 74, "09", 1, 10, "Ariège", 1, "2009-03-03T12:31:40+09:00", "2017-09-07T12:31:49+08:00", 1634878320],
        [ 73, 74, "10", 1, 10, "Aube", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 74, 74, "01", 1, 10, "Ain", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 75, 74, "11", 1, 10, "Aude", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 76, 74, "12", 1, 10, "Aveyron", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 77, 74, "13", 1, 10, "Bouches-du-Rhône", 1, "2009-03-03T12:31:40+09:00", "2017-09-07T12:31:49+08:00", 1634878320],
        [ 78, 74, "14", 1, 10, "Calvados", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 79, 74, "15", 1, 10, "Cantal", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 80, 74, "16", 1, 10, "Charente", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 81, 74, "17", 1, 10, "Charente-Maritime", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 82, 74, "18", 1, 10, "Cher", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 83, 74, "19", 1, 10, "Corrèze", 1, "2009-03-03T12:31:40+09:00", "2017-09-07T12:31:49+08:00", 1634878320],
        [ 84, 74, "2A", 1, 10, "Corse-du-Sud", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 85, 74, "21", 1, 10, "Côte-d'Or", 1, "2009-03-03T12:31:40+09:00", "2017-09-07T12:31:49+08:00", 1634878320],
        [ 86, 74, "22", 1, 10, "Côtes-d'Armor", 1, "2009-03-03T12:31:40+09:00", "2017-09-07T12:43:26+08:00", 1634878320],
        [ 87, 74, "23", 1, 10, "Creuse", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 88, 74, "24", 1, 10, "Dordogne", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 89, 74, "25", 1, 10, "Doubs", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 90, 74, "26", 1, 10, "Drôme", 1, "2009-03-03T12:31:40+09:00", "2017-09-07T12:31:49+08:00", 1634878320],
        [ 91, 74, "91", 1, 10, "Essonne", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 92, 74, "27", 1, 10, "Eure", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 93, 74, "28", 1, 10, "Eure-et-Loir", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 94, 74, "29", 1, 10, "Finistère", 1, "2009-03-03T12:31:40+09:00", "2017-09-07T12:31:49+08:00", 1634878320],
        [ 95, 74, "30", 1, 10, "Gard", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 96, 74, "32", 1, 10, "Gers", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 97, 74, "33", 1, 10, "Gironde", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 98, 74, "2B", 1, 10, "Haute-Corse", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 99, 74, "31", 1, 10, "Haute-Garonne", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 100, 74, "43", 1, 10, "Haute-Loire", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 101, 74, "52", 1, 10, "Haute-Marne", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 102, 74, "87", 1, 10, "Haute-Vienne", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 103, 74, "05", 1, 10, "Haute-Vienne", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 104, 74, "92", 1, 10, "Hauts-de-Seine", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 105, 74, "34", 1, 10, "Hérault", 1, "2009-03-03T12:31:40+09:00", "2017-09-07T12:31:49+08:00", 1634878320],
        [ 106, 74, "35", 1, 10, "Ille-et-Vilaine", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 107, 74, "36", 1, 10, "Indre", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 108, 74, "37", 1, 10, "Indre-et-Loire", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 109, 74, "38", 1, 10, "Isère", 1, "2009-03-03T12:31:40+09:00", "2017-09-07T12:31:49+08:00", 1634878320],
        [ 110, 74, "39", 1, 10, "Jura", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 111, 74, "40", 1, 10, "Landes", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 112, 74, "41", 1, 10, "Loir-et-Cher", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 113, 74, "42", 1, 10, "Loire", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 114, 74, "44", 1, 10, "Loire-Atlantique", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 115, 74, "45", 1, 10, "Loiret", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 116, 74, "46", 1, 10, "Lot", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 117, 74, "47", 1, 10, "Lot-et-Garonne", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 118, 74, "48", 1, 10, "Lozère", 1, "2009-03-03T12:31:40+09:00", "2017-09-07T12:31:49+08:00", 1634878320],
        [ 119, 74, "49", 1, 10, "Maine-et-Loire", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 120, 74, "50", 1, 10, "Manche", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 121, 74, "51", 1, 10, "Marne", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 122, 74, "75", 1, 10, "Paris", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 123, 74, "93", 1, 10, "Seine-Saint-Denis", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 124, 74, "80", 1, 10, "Somme", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 125, 74, "81", 1, 10, "Tarn", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 126, 74, "82", 1, 10, "Tarn-et-Garonne", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 127, 74, "90", 1, 10, "Territoire de Belfort", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 128, 74, "95", 1, 10, "Val-d'Oise", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 129, 74, "94", 1, 10, "Val-de-Marne", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 130, 74, "83", 1, 10, "Var", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 131, 74, "84", 1, 10, "Vaucluse", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 132, 74, "85", 1, 10, "Vendée", 1, "2009-03-03T12:31:40+09:00", "2017-09-07T12:31:49+08:00", 1634878320],
        [ 133, 74, "86", 1, 10, "Vienne", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 134, 74, "88", 1, 10, "Vosges", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 135, 74, "89", 1, 10, "Yonne", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 136, 39, "AB", 1, 10, "Alberta", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 137, 39, "BC", 1, 10, "British Columbia", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 138, 39, "MB", 1, 10, "Manitoba", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 139, 39, "NB", 1, 10, "New Brunswick", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 140, 39, "NL", 1, 10, "Newfoundland and Labrador", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 141, 39, "NT", 1, 10, "Northwest Territories", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 142, 39, "NS", 1, 10, "Nova Scotia", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 143, 39, "NU", 1, 10, "Nunavut", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 144, 39, "ON", 1, 10, "Ontario", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 145, 39, "PE", 1, 10, "Prince Edward Island", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 146, 39, "QC", 1, 10, "Québec", 1, "2009-03-03T12:31:40+09:00", "2017-09-07T12:31:49+08:00", 1634878320],
        [ 147, 39, "SK", 1, 10, "Saskatchewan", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 148, 39, "YT", 1, 10, "Yukon Territory", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 149, 13, "ACT", 1, 10, "Australian Capital Territory", 1, "2009-03-03T12:31:40+09:00", "2009-03-11T09:20:30+09:00", 1634878320],
        [ 150, 13, "NSW", 1, 10, "New South Wales", 1, "2009-03-03T12:31:40+09:00", "2009-03-11T09:20:36+09:00", 1634878320],
        [ 151, 13, "NT", 1, 10, "Northern Territory", 1, "2009-03-03T12:31:40+09:00", "2009-03-11T09:21:03+09:00", 1634878320],
        [ 152, 13, "QLD", 1, 10, "Queensland", 1, "2009-03-03T12:31:40+09:00", "2009-03-11T09:20:51+09:00", 1634878320],
        [ 153, 13, "SA", 1, 10, "South Australia", 1, "2009-03-03T12:31:40+09:00", "2009-03-11T09:21:09+09:00", 1634878320],
        [ 154, 13, "TAS", 1, 10, "Tasmania", 1, "2009-03-03T12:31:40+09:00", "2009-03-11T09:21:14+09:00", 1634878320],
        [ 155, 13, "VIC", 1, 10, "Victoria", 1, "2009-03-03T12:31:40+09:00", "2009-03-11T09:20:58+09:00", 1634878320],
        [ 156, 13, "WA", 1, 10, "Western Australia", 1, "2009-03-03T12:31:40+09:00", "2009-03-11T09:21:20+09:00", 1634878320],
        [ 157, 152, "DR", 1, 10, "Drenthe", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 158, 152, "FL", 1, 10, "Flevoland", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 159, 152, "FR", 1, 10, "Friesland", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 160, 152, "GE", 1, 10, "Gelderland", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 161, 152, "GR", 1, 10, "Groningen", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 162, 152, "LI", 1, 10, "Limburg", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 163, 152, "NB", 1, 10, "Noord Brabant", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 164, 152, "NH", 1, 10, "Noord Holland", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 165, 152, "OV", 1, 10, "Overijssel", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 166, 152, "UT", 1, 10, "Utrecht", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 167, 152, "ZE", 1, 10, "Zeeland", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 168, 152, "ZH", 1, 10, "Zuid Holland", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 169, 83, "BAW", 1, 10, "Baden-Württemberg", 1, "2009-03-03T12:31:40+09:00", "2017-09-07T12:31:49+08:00", 1634878320],
        [ 170, 83, "BAY", 1, 10, "Bayern", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 171, 83, "BER", 1, 10, "Berlin", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 172, 83, "BRG", 1, 10, "Branderburg", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 173, 83, "BRE", 1, 10, "Bremen", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 174, 83, "HAM", 1, 10, "Hamburg", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 175, 83, "HES", 1, 10, "Hessen", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 176, 83, "MEC", 1, 10, "Mecklenburg-Vorpommern", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 177, 83, "NDS", 1, 10, "Niedersachsen", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 178, 83, "NRW", 1, 10, "Nordrhein-Westfalen", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 179, 83, "RHE", 1, 10, "Rheinland-Pfalz", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 180, 83, "SAR", 1, 10, "Saarland", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 181, 83, "SAS", 1, 10, "Sachsen", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 182, 83, "SAC", 1, 10, "Sachsen-Anhalt", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 183, 83, "SCN", 1, 10, "Schleswig-Holstein", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 184, 83, "THE", 1, 10, "Thüringen", 1, "2009-03-03T12:31:40+09:00", "2017-09-07T12:31:49+08:00", 1634878320],
        [ 185, 223, "ABN", 1, 10, "Aberdeen", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 186, 223, "ABNS", 1, 10, "Aberdeenshire", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 187, 223, "ANG", 1, 10, "Anglesey", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 188, 223, "AGS", 1, 10, "Angus", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 189, 223, "ARY", 1, 10, "Argyll and Bute", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 190, 223, "BEDS", 1, 10, "Bedfordshire", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 191, 223, "BERKS", 1, 10, "Berkshire", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 192, 223, "BLA", 1, 10, "Blaenau Gwent", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 193, 223, "BRI", 1, 10, "Bridgend", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 194, 223, "BSTL", 1, 10, "Bristol", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 195, 223, "BUCKS", 1, 10, "Buckinghamshire", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 196, 223, "CAE", 1, 10, "Caerphilly", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 197, 223, "CAMBS", 1, 10, "Cambridgeshire", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 198, 223, "CDF", 1, 10, "Cardiff", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 199, 223, "CARM", 1, 10, "Carmarthenshire", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 200, 223, "CDGN", 1, 10, "Ceredigion", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 201, 223, "CHE", 1, 10, "Cheshire East", 1, "2009-03-03T12:31:40+09:00", "2018-01-29T20:02:53+08:00", 1634878320],
        [ 202, 223, "CLACK", 1, 10, "Clackmannanshire", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 203, 223, "CON", 1, 10, "Conwy", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 204, 223, "CORN", 1, 10, "Cornwall", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 205, 223, "DNBG", 1, 10, "Denbighshire", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 206, 223, "DERBY", 1, 10, "Derbyshire", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 207, 223, "DVN", 1, 10, "Devon", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 208, 223, "DOR", 1, 10, "Dorset", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 209, 223, "DGL", 1, 10, "Dumfries and Galloway", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 210, 223, "DUND", 1, 10, "Dundee", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 211, 223, "DHM", 1, 10, "Durham", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 212, 223, "ARYE", 1, 10, "East Ayrshire", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 213, 223, "DUNBE", 1, 10, "East Dunbartonshire", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 214, 223, "LOTE", 1, 10, "East Lothian", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 215, 223, "RENE", 1, 10, "East Renfrewshire", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 216, 223, "ERYS", 1, 10, "East Riding of Yorkshire", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 217, 223, "SXE", 1, 10, "East Sussex", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 218, 223, "EDIN", 1, 10, "Edinburgh", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 219, 223, "ESX", 1, 10, "Essex", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 220, 223, "FALK", 1, 10, "Falkirk", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 221, 223, "FFE", 1, 10, "Fife", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 222, 223, "FLINT", 1, 10, "Flintshire", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 223, 223, "GLAS", 1, 10, "Glasgow", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 224, 223, "GLOS", 1, 10, "Gloucestershire", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 225, 223, "LDN", 1, 10, "Greater London", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 226, 223, "MCH", 1, 10, "Greater Manchester", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 227, 223, "GDD", 1, 10, "Gwynedd", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 228, 223, "HANTS", 1, 10, "Hampshire", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 229, 223, "HWR", 1, 10, "Herefordshire", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 230, 223, "HERTS", 1, 10, "Hertfordshire", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 231, 223, "HLD", 1, 10, "Highlands", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 232, 223, "IVER", 1, 10, "Inverclyde", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 233, 223, "IOW", 1, 10, "Isle of Wight", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 234, 223, "KNT", 1, 10, "Kent", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 235, 223, "LANCS", 1, 10, "Lancashire", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 236, 223, "LEC", 1, 10, "Leicestershire", 1, "2009-03-03T12:31:40+09:00", "2018-01-29T20:02:55+08:00", 1634878320],
        [ 237, 223, "LINCS", 1, 10, "Lincolnshire", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 238, 223, "MSY", 1, 10, "Merseyside", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 239, 223, "MERT", 1, 10, "Merthyr Tydfil", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 240, 223, "MLOT", 1, 10, "Midlothian", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 241, 223, "MMOUTH", 1, 10, "Monmouthshire", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 242, 223, "MORAY", 1, 10, "Moray", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 243, 223, "NPRTAL", 1, 10, "Neath Port Talbot", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 244, 223, "NEWPT", 1, 10, "Newport", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 245, 223, "NOR", 1, 10, "Norfolk", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 246, 223, "ARYN", 1, 10, "North Ayrshire", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 247, 223, "LANN", 1, 10, "North Lanarkshire", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 248, 223, "YSN", 1, 10, "North Yorkshire", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 249, 223, "NHM", 1, 10, "Northamptonshire", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 250, 223, "NLD", 1, 10, "Northumberland", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 251, 223, "NTT", 1, 10, "Nottinghamshire", 1, "2009-03-03T12:31:40+09:00", "2018-01-29T20:02:56+08:00", 1634878320],
        [ 252, 223, "ORK", 1, 10, "Orkney Islands", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 253, 223, "OFE", 1, 10, "Oxfordshire", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 254, 223, "PEM", 1, 10, "Pembrokeshire", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 255, 223, "PERTH", 1, 10, "Perth and Kinross", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 256, 223, "PWS", 1, 10, "Powys", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 257, 223, "REN", 1, 10, "Renfrewshire", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 258, 223, "RHON", 1, 10, "Rhondda Cynon Taff", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 259, 223, "RUT", 1, 10, "Rutland", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 260, 223, "BOR", 1, 10, "Scottish Borders", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 261, 223, "SHET", 1, 10, "Shetland Islands", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 262, 223, "SPE", 1, 10, "Shropshire", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 263, 223, "SOM", 1, 10, "Somerset", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 264, 223, "ARYS", 1, 10, "South Ayrshire", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 265, 223, "LANS", 1, 10, "South Lanarkshire", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 266, 223, "YSS", 1, 10, "South Yorkshire", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 267, 223, "SFD", 1, 10, "Staffordshire", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 268, 223, "STIR", 1, 10, "Stirling", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 269, 223, "SFK", 1, 10, "Suffolk", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 270, 223, "SRY", 1, 10, "Surrey", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 271, 223, "SWAN", 1, 10, "Swansea", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 272, 223, "TORF", 1, 10, "Torfaen", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 273, 223, "TWR", 1, 10, "Tyne and Wear", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 274, 223, "VGLAM", 1, 10, "Vale of Glamorgan", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 275, 223, "WARKS", 1, 10, "Warwickshire", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 276, 223, "WDUN", 1, 10, "West Dunbartonshire", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 277, 223, "WLOT", 1, 10, "West Lothian", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 278, 223, "WMD", 1, 10, "West Midlands", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 279, 223, "SXW", 1, 10, "West Sussex", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 280, 223, "YSW", 1, 10, "West Yorkshire", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 281, 223, "WIL", 1, 10, "Western Isles", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 282, 223, "WLT", 1, 10, "Wiltshire", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 283, 223, "WORCS", 1, 10, "Worcestershire", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 284, 223, "WRX", 1, 10, "Wrexham", 1, "2009-03-03T12:31:40+09:00", "2009-03-12T10:44:10+09:00", 1634878320],
        [ 285, 223, "BAS", 1, 10, "Bath and North East Somerset", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:02:52+08:00", 1634878320],
        [ 286, 223, "BBD", 1, 10, "Blackburn with Darwen", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:02:52+08:00", 1634878320],
        [ 287, 223, "BPL", 1, 10, "Blackpool", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:02:52+08:00", 1634878320],
        [ 288, 223, "BGW", 1, 10, "Blaenau Gwent", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:02:52+08:00", 1634878320],
        [ 289, 223, "BMH", 1, 10, "Bournemouth", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:02:52+08:00", 1634878320],
        [ 290, 223, "BRC", 1, 10, "Bracknell Forest", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:02:53+08:00", 1634878320],
        [ 291, 223, "BNH", 1, 10, "Brighton and Hove", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:02:53+08:00", 1634878320],
        [ 292, 223, "CBF", 1, 10, "Central Bedfordshire", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:02:53+08:00", 1634878320],
        [ 293, 223, "CHW", 1, 10, "Cheshire West and Chester", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:02:53+08:00", 1634878320],
        [ 294, 223, "CMA", 1, 10, "Cumbria", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:02:53+08:00", 1634878320],
        [ 295, 223, "DAL", 1, 10, "Darlington", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:02:54+08:00", 1634878320],
        [ 296, 223, "DER", 1, 10, "Derby", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:02:54+08:00", 1634878320],
        [ 297, 223, "ELS", 1, 10, "Eilean Siar", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:02:54+08:00", 1634878320],
        [ 298, 223, "HAL", 1, 10, "Halton", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:02:54+08:00", 1634878320],
        [ 299, 223, "HPL", 1, 10, "Hartlepool", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:02:54+08:00", 1634878320],
        [ 300, 223, "IOS", 1, 10, "Isles of Scilly", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:02:54+08:00", 1634878320],
        [ 301, 223, "KHL", 1, 10, "Kingston upon Hull", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:02:55+08:00", 1634878320],
        [ 302, 223, "LCE", 1, 10, "Leicester", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:02:55+08:00", 1634878320],
        [ 303, 223, "LUT", 1, 10, "Luton", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:02:55+08:00", 1634878320],
        [ 304, 223, "MDW", 1, 10, "Medway", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:02:55+08:00", 1634878320],
        [ 305, 223, "MDB", 1, 10, "Middlesbrough", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:02:55+08:00", 1634878320],
        [ 306, 223, "MIK", 1, 10, "Milton Keynes", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:02:56+08:00", 1634878320],
        [ 307, 223, "NEL", 1, 10, "North East Lincolnshire", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:02:56+08:00", 1634878320],
        [ 308, 223, "NLN", 1, 10, "North Lincolnshire", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:02:56+08:00", 1634878320],
        [ 309, 223, "NSM", 1, 10, "North Somerset", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:02:56+08:00", 1634878320],
        [ 310, 223, "NGM", 1, 10, "Nottingham", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:02:56+08:00", 1634878320],
        [ 311, 223, "PTE", 1, 10, "Peterborough", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:02:57+08:00", 1634878320],
        [ 312, 223, "PLY", 1, 10, "Plymouth", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:02:57+08:00", 1634878320],
        [ 313, 223, "POL", 1, 10, "Poole", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:02:57+08:00", 1634878320],
        [ 314, 223, "POR", 1, 10, "Portsmouth", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:02:57+08:00", 1634878320],
        [ 315, 223, "RDG", 1, 10, "Reading", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:02:57+08:00", 1634878320],
        [ 316, 223, "RCC", 1, 10, "Redcar and Cleveland", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:02:57+08:00", 1634878320],
        [ 317, 223, "SLG", 1, 10, "Slough", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:02:58+08:00", 1634878320],
        [ 318, 223, "SGC", 1, 10, "South Gloucestershire", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:02:58+08:00", 1634878320],
        [ 319, 223, "STH", 1, 10, "Southampton", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:02:58+08:00", 1634878320],
        [ 320, 223, "SOS", 1, 10, "Southend-on-Sea", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:02:58+08:00", 1634878320],
        [ 321, 223, "STT", 1, 10, "Stockton-on-Tees", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:02:58+08:00", 1634878320],
        [ 322, 223, "STE", 1, 10, "Stoke-on-Trent", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:02:58+08:00", 1634878320],
        [ 323, 223, "SWD", 1, 10, "Swindon", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:02:59+08:00", 1634878320],
        [ 324, 223, "TFW", 1, 10, "Telford and Wrekin", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:02:59+08:00", 1634878320],
        [ 325, 223, "THR", 1, 10, "Thurrock", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:02:59+08:00", 1634878320],
        [ 326, 223, "TOB", 1, 10, "Torbay", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:02:59+08:00", 1634878320],
        [ 327, 223, "WRT", 1, 10, "Warrington", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:02:59+08:00", 1634878320],
        [ 328, 223, "WBK", 1, 10, "West Berkshire", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:02:59+08:00", 1634878320],
        [ 329, 223, "WNM", 1, 10, "Windsor and Maidenhead", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:03:00+08:00", 1634878320],
        [ 330, 223, "WOK", 1, 10, "Wokingham", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:03:00+08:00", 1634878320],
        [ 331, 223, "YOK", 1, 10, "York", 1, "2018-01-29T20:00:00+08:00", "2018-01-29T20:03:00+08:00", 1634878320],
        [ 332, 223, "ANN", 1, 10, "Antrim", 1, "2021-01-12T20:00:00+08:00", "2021-01-18T09:52:38+08:00", 1634878320],
        [ 333, 223, "ABC", 1, 10, "Armagh", 1, "2021-01-12T20:00:00+08:00", "2021-01-18T09:52:38+08:00", 1634878320],
        [ 334, 223, "DOW", 1, 10, "Down", 1, "2021-01-12T20:00:00+08:00", "2021-01-18T09:52:38+08:00", 1634878320],
        [ 335, 223, "FMO", 1, 10, "Fermanagh", 1, "2021-01-12T20:00:00+08:00", "2021-01-18T09:52:38+08:00", 1634878320],
        [ 336, 223, "LDY", 1, 10, "Londonderry", 1, "2021-01-12T20:00:00+08:00", "2021-01-18T09:52:39+08:00", 1634878320],
        [ 337, 223, "TYR", 1, 10, "Tyrone", 1, "2021-01-12T20:00:00+08:00", "2021-01-18T09:52:39+08:00", 1634878320]
      ]
    },
    {
      "name": "stress_profiles",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "Name",
          "value": "TEXT"
        },
        {
          "column": "MaxHoursPerShift",
          "value": "REAL"
        },
        {
          "column": "MaxHoursPerPeriod",
          "value": "REAL"
        },
        {
          "column": "MaxDaysPerPeriod",
          "value": "REAL"
        },
        {
          "column": "MaxHoursPerDay",
          "value": "REAL"
        },
        {
          "column": "GapHoursBetweenShifts",
          "value": "REAL"
        },
        {
          "column": "CustomRules",
          "value": "TEXT"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "system_usage_balances",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "Type",
          "value": "INTEGER"
        },
        {
          "column": "Date",
          "value": "TEXT"
        },
        {
          "column": "Credit",
          "value": "REAL"
        },
        {
          "column": "Description",
          "value": "TEXT"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "system_usage_tracking",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "Date",
          "value": "TEXT"
        },
        {
          "column": "EmpId",
          "value": "INTEGER"
        },
        {
          "column": "CompanyId",
          "value": "INTEGER"
        },
        {
          "column": "BalanceId",
          "value": "INTEGER"
        },
        {
          "column": "UsageType",
          "value": "INTEGER"
        },
        {
          "column": "UsageRecordId",
          "value": "INTEGER"
        },
        {
          "column": "Usage",
          "value": "REAL"
        },
        {
          "column": "Description",
          "value": "TEXT"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "tasks",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "TaskSetupId",
          "value": "INTEGER"
        },
        {
          "column": "OpUnitId",
          "value": "INTEGER"
        },
        {
          "column": "GroupId",
          "value": "INTEGER"
        },
        {
          "column": "DayTimestamp",
          "value": "INTEGER"
        },
        {
          "column": "Date",
          "value": "TEXT"
        },
        {
          "column": "OrigDayTimestamp",
          "value": "INTEGER"
        },
        {
          "column": "OrigDate",
          "value": "TEXT"
        },
        {
          "column": "AvailableAfterTimestamp",
          "value": "INTEGER"
        },
        {
          "column": "DueDate",
          "value": "TEXT"
        },
        {
          "column": "DueTimestamp",
          "value": "INTEGER"
        },
        {
          "column": "RepeatIfNotCompleted",
          "value": "NUMERIC"
        },
        {
          "column": "SortOrder",
          "value": "INTEGER"
        },
        {
          "column": "Type",
          "value": "INTEGER"
        },
        {
          "column": "Question",
          "value": "TEXT"
        },
        {
          "column": "Answer",
          "value": "TEXT"
        },
        {
          "column": "Comment",
          "value": "TEXT"
        },
        {
          "column": "UserEntry",
          "value": "INTEGER"
        },
        {
          "column": "UserPerformTask",
          "value": "INTEGER"
        },
        {
          "column": "UserResponsible",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "TsCompleted",
          "value": "INTEGER"
        },
        {
          "column": "Start",
          "value": "INTEGER"
        },
        {
          "column": "`End`",
          "value": "INTEGER"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "task_groups",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "GroupSetupId",
          "value": "INTEGER"
        },
        {
          "column": "`Key`",
          "value": "TEXT"
        },
        {
          "column": "Name",
          "value": "TEXT"
        },
        {
          "column": "DayTimestamp",
          "value": "INTEGER"
        },
        {
          "column": "Date",
          "value": "TEXT"
        },
        {
          "column": "OrigDayTimestamp",
          "value": "INTEGER"
        },
        {
          "column": "OrigDate",
          "value": "TEXT"
        },
        {
          "column": "OpUnitId",
          "value": "INTEGER"
        },
        {
          "column": "SortOrder",
          "value": "INTEGER"
        },
        {
          "column": "Comment",
          "value": "TEXT"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "task_group_setups",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "`Key`",
          "value": "TEXT"
        },
        {
          "column": "Name",
          "value": "TEXT"
        },
        {
          "column": "Active",
          "value": "NUMERIC"
        },
        {
          "column": "Compulsory",
          "value": "NUMERIC"
        },
        {
          "column": "Notification",
          "value": "TEXT"
        },
        {
          "column": "Deadline",
          "value": "REAL"
        },
        {
          "column": "Plugins",
          "value": "TEXT"
        },
        {
          "column": "Oncreate",
          "value": "TEXT"
        },
        {
          "column": "Onsubmit",
          "value": "TEXT"
        },
        {
          "column": "Comment",
          "value": "TEXT"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "task_opunit_configs",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "TaskSetupId",
          "value": "INTEGER"
        },
        {
          "column": "TaskGroupId",
          "value": "INTEGER"
        },
        {
          "column": "Active",
          "value": "NUMERIC"
        },
        {
          "column": "SortOrder",
          "value": "INTEGER"
        },
        {
          "column": "OpUnitId",
          "value": "INTEGER"
        },
        {
          "column": "Schedule",
          "value": "INTEGER"
        },
        {
          "column": "Type",
          "value": "INTEGER"
        },
        {
          "column": "AvailableAfter",
          "value": "TEXT"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "task_setups",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "GroupId",
          "value": "INTEGER"
        },
        {
          "column": "Type",
          "value": "INTEGER"
        },
        {
          "column": "Parent",
          "value": "INTEGER"
        },
        {
          "column": "Question",
          "value": "TEXT"
        },
        {
          "column": "`Default`",
          "value": "TEXT"
        },
        {
          "column": "SortOrder",
          "value": "INTEGER"
        },
        {
          "column": "Schedule",
          "value": "INTEGER"
        },
        {
          "column": "OnYes",
          "value": "TEXT"
        },
        {
          "column": "OnNo",
          "value": "TEXT"
        },
        {
          "column": "RenderFunc",
          "value": "TEXT"
        },
        {
          "column": "Active",
          "value": "NUMERIC"
        },
        {
          "column": "AvailableAfter",
          "value": "TEXT"
        },
        {
          "column": "RepeatIfNotCompleted",
          "value": "NUMERIC"
        },
        {
          "column": "Time",
          "value": "TEXT"
        },
        {
          "column": "Section",
          "value": "TEXT"
        },
        {
          "column": "Priority",
          "value": "TEXT"
        },
        {
          "column": "Helptext",
          "value": "TEXT"
        },
        {
          "column": "SupercedePrev",
          "value": "NUMERIC"
        },
        {
          "column": "Colour",
          "value": "TEXT"
        },
        {
          "column": "OnStart",
          "value": "TEXT"
        },
        {
          "column": "OnSubmit",
          "value": "TEXT"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "teams",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "LeaderEmployee",
          "value": "INTEGER"
        },
        {
          "column": "Name",
          "value": "TEXT"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "timesheets",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "Employee",
          "value": "INTEGER"
        },
        {
          "column": "EmployeeHistory",
          "value": "INTEGER"
        },
        {
          "column": "EmployeeAgreement",
          "value": "INTEGER"
        },
        {
          "column": "Date",
          "value": "TEXT"
        },
        {
          "column": "StartTime",
          "value": "INTEGER"
        },
        {
          "column": "EndTime",
          "value": "INTEGER"
        },
        {
          "column": "Mealbreak",
          "value": "TEXT"
        },
        {
          "column": "MealbreakSlots",
          "value": "TEXT"
        },
        {
          "column": "Slots",
          "value": "TEXT"
        },
        {
          "column": "TotalTime",
          "value": "REAL"
        },
        {
          "column": "TotalTimeInv",
          "value": "REAL"
        },
        {
          "column": "Cost",
          "value": "REAL"
        },
        {
          "column": "Roster",
          "value": "INTEGER"
        },
        {
          "column": "EmployeeComment",
          "value": "TEXT"
        },
        {
          "column": "SupervisorComment",
          "value": "TEXT"
        },
        {
          "column": "Supervisor",
          "value": "INTEGER"
        },
        {
          "column": "Disputed",
          "value": "NUMERIC"
        },
        {
          "column": "TimeApproved",
          "value": "NUMERIC"
        },
        {
          "column": "TimeApprover",
          "value": "INTEGER"
        },
        {
          "column": "Discarded",
          "value": "NUMERIC"
        },
        {
          "column": "ValidationFlag",
          "value": "INTEGER"
        },
        {
          "column": "OperationalUnit",
          "value": "INTEGER"
        },
        {
          "column": "IsInProgress",
          "value": "NUMERIC"
        },
        {
          "column": "IsLeave",
          "value": "NUMERIC"
        },
        {
          "column": "LeaveId",
          "value": "INTEGER"
        },
        {
          "column": "LeaveRule",
          "value": "INTEGER"
        },
        {
          "column": "Invoiced",
          "value": "NUMERIC"
        },
        {
          "column": "InvoiceComment",
          "value": "TEXT"
        },
        {
          "column": "PayRuleApproved",
          "value": "NUMERIC"
        },
        {
          "column": "Exported",
          "value": "NUMERIC"
        },
        {
          "column": "StagingId",
          "value": "INTEGER"
        },
        {
          "column": "PayStaged",
          "value": "NUMERIC"
        },
        {
          "column": "PaycycleId",
          "value": "INTEGER"
        },
        {
          "column": "File",
          "value": "INTEGER"
        },
        {
          "column": "CustomFieldData",
          "value": "INTEGER"
        },
        {
          "column": "RealTime",
          "value": "NUMERIC"
        },
        {
          "column": "AutoProcessed",
          "value": "NUMERIC"
        },
        {
          "column": "AutoRounded",
          "value": "NUMERIC"
        },
        {
          "column": "AutoTimeApproved",
          "value": "NUMERIC"
        },
        {
          "column": "AutoPayRuleApproved",
          "value": "NUMERIC"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "timesheet_pay_returns",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "Timesheet",
          "value": "INTEGER"
        },
        {
          "column": "PayRule",
          "value": "INTEGER"
        },
        {
          "column": "Overridden",
          "value": "NUMERIC"
        },
        {
          "column": "Value",
          "value": "REAL"
        },
        {
          "column": "Cost",
          "value": "REAL"
        },
        {
          "column": "OverrideComment",
          "value": "TEXT"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "training_modules",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "Title",
          "value": "TEXT"
        },
        {
          "column": "Provider",
          "value": "TEXT"
        },
        {
          "column": "ProviderAddress",
          "value": "INTEGER"
        },
        {
          "column": "Cost",
          "value": "REAL"
        },
        {
          "column": "TimeRequiredDays",
          "value": "INTEGER"
        },
        {
          "column": "RenewalPeriodMonths",
          "value": "INTEGER"
        },
        {
          "column": "Comment",
          "value": "TEXT"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "training_records",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "Employee",
          "value": "INTEGER"
        },
        {
          "column": "Module",
          "value": "INTEGER"
        },
        {
          "column": "TrainingDate",
          "value": "TEXT"
        },
        {
          "column": "ExpiryDate",
          "value": "TEXT"
        },
        {
          "column": "Active",
          "value": "NUMERIC"
        },
        {
          "column": "Comment",
          "value": "TEXT"
        },
        {
          "column": "File",
          "value": "INTEGER"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "webhooks",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "Topic",
          "value": "TEXT"
        },
        {
          "column": "Filters",
          "value": "TEXT"
        },
        {
          "column": "Address",
          "value": "TEXT"
        },
        {
          "column": "Type",
          "value": "TEXT"
        },
        {
          "column": "Headers",
          "value": "TEXT"
        },
        {
          "column": "Enabled",
          "value": "NUMERIC"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexIdModifiedDesc",
          "value": "Id DESC, Modified DESC"
        }
      ]
    },
    {
      "name": "colleagues",
      "schema": [
        {
          "column": "EmpId",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "Company",
          "value": "INTEGER"
        },
        {
          "column": "DisplayName",
          "value": "TEXT"
        },
        {
          "column": "Email",
          "value": "TEXT"
        },
        {
          "column": "FirstName",
          "value": "TEXT"
        },
        {
          "column": "IsSameWorkplace",
          "value": "INTEGER"
        },
        {
          "column": "IsSubordinate",
          "value": "INTEGER"
        },
        {
          "column": "LastName",
          "value": "TEXT"
        },
        {
          "column": "Mobile",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "Photo",
          "value": "TEXT"
        },
        {
          "column": "PhotoLinkId",
          "value": "TEXT"
        },
        {
          "column": "Position",
          "value": "INTEGER"
        },
        {
          "column": "Role",
          "value": "INTEGER"
        },
        {
          "column": "Status",
          "value": "INTEGER"
        },
        {
          "column": "UserId",
          "value": "INTEGER"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexOnEmpId",
          "value": "EmpId DESC"
        },
        {
          "name": "IndexOnModified",
          "value": "Modified DESC"
        }
      ]
    },
    {
      "name": "local_deets",
      "schema": [
        {
          "column": "id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "user_email",
          "value": "TEXT NOT NULL"
        },
        {
          "column": "me_obj",
          "value": "TEXT"
        },
        {
          "column": "my_obj",
          "value": "TEXT"
        },
        {
          "column": "ppl_obj",
          "value": "TEXT"
        },
        {
          "column": "me_ava",
          "value": "TEXT"
        },
        {
          "column": "work_ava",
          "value": "TEXT"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        }
      ]
    },
    {
      "name": "local_images",
      "schema": [
        {
          "column": "id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "img_name",
          "value": "TEXT"
        },
        {
          "column": "img_uri",
          "value": "TEXT"
        },
        {
          "column": "img_size",
          "value": "INTEGER"
        },
        {
          "column": "img_mtime",
          "value": "INTEGER"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        }
      ]
    },
    {
      "name": "notifications",
      "schema": [
        {
          "column": "Id",
          "value": "INTEGER PRIMARY KEY NOT NULL"
        },
        {
          "column": "Created",
          "value": "TEXT"
        },
        {
          "column": "Creator",
          "value": "INTEGER"
        },
        {
          "column": "ExpiryDate",
          "value": "TEXT"
        },
        
        {
          "column": "Link",
          "value": "INTEGER"
        },
        {
          "column": "Message",
          "value": "TEXT"
        },
        {
          "column": "Modified",
          "value": "TEXT"
        },
        {
          "column": "Orm",
          "value": "INTEGER"
        },
        {
          "column": "Recid",
          "value": "INTEGER"
        },
        {
          "column": "TsCreated",
          "value": "INTEGER"
        },
        {
          "column": "last_modified",
          "value": "INTEGER DEFAULT (strftime('%s', 'now'))"
        }
      ],
      "indexes": [
        {
          "name": "IndexOnLastModified",
          "value": "last_modified DESC"
        },
        {
          "name": "IndexOnId",
          "value": "Id DESC"
        },
        {
          "name": "IndexOnModified",
          "value": "Modified DESC"
        }
      ]
    },
  ]
}