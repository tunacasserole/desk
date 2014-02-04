var lookupStoreFields = ['lookup_id', 'code', 'code_int', 'category', 'default_text', 'depends_on', 'is_enabled'];
Ext.create('Ext.data.ArrayStore', {
  storeId   : 'MASS_UPDATE_TYPE-lookup-Store',
  fields    : lookupStoreFields,
  data      : [
    ['032456XXC72911HIHI321MASSUPDATE1','CLONE',,'MASS_UPDATE_TYPE','Clone',null,true]
  ]
});

