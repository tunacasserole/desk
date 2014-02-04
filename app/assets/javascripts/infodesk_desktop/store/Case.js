Ext.define('Infodesk.store.Case', {
  extend       : 'Ext.data.Store',
  alias        : 'store.infodesk-Case',
  model        : 'Infodesk.model.Case',
  autoLoad     : false,
  storeId      : 'CaseStore',
  remoteFilter : true,
  remoteSort   : true,

  constructor  : function (config) {
    var me    = this;
    me.callParent(this);
    
    var proxy = Ext.Object.merge({}, me.getProxy());
    me.setProxy(proxy);
  } // constructor

}); // Ext.define('Infodesk.store.Case'