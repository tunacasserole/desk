//= require ./HubContextMenu

Ext.define('Desk.view.app.Hub', {
  extend: 'Buildit.ux.Hub',
  alias: 'widget.desk-app-Hub',
  extend: 'Buildit.ux.Hub',
  bodyStyle: 'background: transparent',
  cls: 'desktop',

  initComponent: function() {
    var me = this;

    // this.socket   = Buildit.lib.SocketManager.get('STANDARD');
    // this.socket.on('newEvents', this.handleNewEvents, me);


    Ext.apply(this, {
      allowSignout: true,
      title: 'Start',
      subtitle: '',
      contextMenuConfig: {
        xtype: 'desk-app-HubContextMenu'
      },
      sections: [

        // Section: Cases //

        {
          title: 'Cases',
          columns: 6,
          rows: 4,
          tiles: [{
            title: 'Cases',
            colspan: 2,
            rowspan: 1,
            // cls: 'supply',
            target: {
              xtype: 'desk-cases-Explorer'
            }
          }]
        }

      ]
    });

    this.callParent();
  },

  // handleNewEvents : function(data){
  //    var me = this;
  //    Ext.Array.each(data, function(event){
  //      var newEvent = Ext.create('Buildit.model.Event', event);
  //      // me.store.add(newEvent);
  //        Buildit.infoMsg(event.message)
  //      // Buildit.infoMsg(newEvent.get('message'))
  //    });
  //  }


});
