//= require      buildit
//= require_tree ./infodesk_desktop/model
//= require_tree ./infodesk_desktop/store
//= require_tree ./infodesk_desktop/view
//= require_tree ./infodesk_desktop/controller

Buildit.desktopApplication({
	name:'Infodesk',

	autoCreateViewport:false,

	launch:function () {

		// LAUNCH INITIAL COMPONENT
		Ext.widget('buildit-Viewport', {
			items:[
      {
        xtype: 'buildit-Canvas',
        flex: 1,
        id: 'canvas',
        title: 'buildit.io',
        subtitle: 'Enterprise Application',
        items: [
          {
            xtype      : 'buildit-SecurityCheckpoint',
            id         : 'login',
            listeners  : {
              loginsuccess : function() {

                var socket = Ext.create('Buildit.ux.Socket',{
                  host     : 'localhost',
                  port     : 3001,
                  channels : ['channel1', 'channel2']
                });

                Buildit.lib.SocketManager.add('STANDARD', socket);
              }
            }
          }
        ]
      }
      ]
		});

		Ext.FocusManager.enable();
	}

});
