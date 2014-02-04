Ext.define('Desk.view.cases.Inspector',{
  extend   : 'Buildit.ux.inspector.Panel',
  alias    : 'widget.desk-cases-Inspector',


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
          xtype     : 'desk-cases-Form'
        }
      ]
    });
    // CARDS (End)

    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title     : 'Case',
      subtitle  : this.record.get('display_as')
    });
    // TITLES (End)

    this.callParent();
  }
});