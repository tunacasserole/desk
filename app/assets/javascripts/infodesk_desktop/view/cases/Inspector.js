Ext.define('Infodesk.view.cases.Inspector',{
  extend   : 'Buildit.ux.inspector.Panel',
  alias    : 'widget.infodesk-cases-Inspector',


  initComponent:function(){
    var me = this;
  
    // INSPECTOR INIT (Start) ==============================================================
    Ext.applyIf(this, {
      associativeFilter : {
        property  : 'case_id',
        value     : this.record.get('case_id')
      },

      associativeSearch : {
        with: {
          case_id : {
            equal_to : this.record.get('case_id')
          }
        }
      }
    });
    // INSPECTOR INIT (End)
  
    // CARDS (Start) =======================================================================
    Ext.apply(this, {
      cards     : [
        {
          title     : 'Profile',
          xtype     : 'infodesk-cases-Form'
        }
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title     : 'Case',
      subtitle  : this.record.get('case_id')
    });
    // TITLES (End)

    this.callParent();
  }
});