var lookupStoreFields = ['lookup_id', 'code', 'code_int', 'category', 'default_text', 'depends_on', 'is_enabled'];
Ext.create('Ext.data.ArrayStore', {
  storeId   : 'ATTACHMENT_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['63991211204011E290E9040CCEDF84BB','BASIC',,'ATTACHMENT_TYPE','Basic',null,true],
    ['98A000EE204011E290E9040CCEDF842E','GENERAL',0,'ATTACHMENT_TYPE','General',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'BOOLEAN_YES_NO-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['323244F0204011EFCFE9040CCEDF842E','true',0,'BOOLEAN_YES_NO','Yes',null,true],
    ['323244F0204011EB2BE9040CCEDF842E','false',0,'BOOLEAN_YES_NO','No',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'CASE_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['032456XOEOEOEOPEBUGXXEUEU4XX1234','BUG',,'CASE_TYPE','Bug fix',null,true],
    ['03122456OEUIUEOMENTXXXOEUIXX1234','DATA',,'CASE_TYPE','Data conversion or cleanup',null,true],
    ['03122456FEAHODEDENTXXXXXXXXX1234','FEATURE',,'CASE_TYPE','New feature, enhancement or custom development',null,true],
    ['03123E3U3QUESTIONNTXXXXXXXXX1234','QUESTION',,'CASE_TYPE','Question or explanation needed',null,true],
    ['0312PROJECTXXXXMENTXXXXXXXXX1234','PROJECT',,'CASE_TYPE','New project request',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'CHECKLIST_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['032456XXFEATUREENTEHETEHXXXX1234','NONE',,'CHECKLIST_TYPE','None',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'DIRECTION_CODE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['632212F0204011E290E9040CCEDF84BB','OUTBOUND',,'DIRECTION_CODE','Outbound',null,true],
    ['632212F0204011E290E9040CCEDF84DD','INBOUND',,'DIRECTION_CODE','Inbound',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'EMAIL_ADDRESS_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['942212F0204011E290E9040CCEDF84BB','TO',,'EMAIL_ADDRESS_TYPE','To',null,true],
    ['942212F0204011E290E9040CCEDF84ED','CC',,'EMAIL_ADDRESS_TYPE','CC',null,true],
    ['942212F0204011E290E9040CCEDF84FE','BCC',,'EMAIL_ADDRESS_TYPE','BCC',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'FEATURE_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['032456XXFEATUREENONEXXOUOIUX1234','NONE',,'FEATURE_TYPE','None',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'NOTE_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['323244F0204011E290E9040CCEDF842E','0',0,'NOTE_TYPE','General',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'PRIORITY_CODE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['335212F0204011E290E9040CCEDF84BB','LOW',,'PRIORITY_CODE','Low',null,true],
    ['335212F0204011E290E9040CCEDF84DD','NORMAL',,'PRIORITY_CODE','Normal',null,true],
    ['335212F0204011E290E9040CCEDF84EF','HIGH',,'PRIORITY_CODE','High',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'PROJECT_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['032456XXCASETYPENONEXXXXXXXX1234','NONE',,'PROJECT_TYPE','None',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'SSO_PLUGIN_CODE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['98A212F0204011E290E9040CCEDF842E','BUILDIT',,'SSO_PLUGIN_CODE','In-App Security',null,true],
    ['98A212F0204011E290E9040CCCCC842E','LDAP',,'SSO_PLUGIN_CODE','LDAP Authentication',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'TASK_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['032456XXFEATUREENTASKXXXXXEOEOE4','NONE',,'TASK_TYPE','None',null,true]
  ]
});

Ext.create('Ext.data.ArrayStore', {
  storeId   : 'USER_STATUS-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['98A444F0204011E290E9040CCEDF842E','0',0,'USER_STATUS','Active',null,true],
    ['98A454F0204011E290E9040CCEDF842E','1',1,'USER_STATUS','Inactive',null,true]
  ]
});

