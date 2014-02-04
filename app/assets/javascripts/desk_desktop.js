//= require      buildit
//= require_tree ./desk/model
//= require_tree ./desk/store
//= require_tree ./desk/view
//= require_tree ./desk/controller

Buildit.desktopApplication({
	name:'Desk',

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
