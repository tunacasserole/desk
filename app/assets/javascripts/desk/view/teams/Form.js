Ext.define('Desk.view.teams.Form', {

  extend   :'Buildit.ux.Form',
  alias    :'widget.desk-teams-Form',


  // LABELS (Start) =======================================================================
  team_idLabel                            : Desk.i18n.model.Team.team_id,
  teamable_idLabel                        : Desk.i18n.model.Team.teamable_id,
  teamable_typeLabel                      : Desk.i18n.model.Team.teamable_type,
  user_idLabel                            : Desk.i18n.model.Team.user_id,
  // LABELS (End)


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property    : 'team_id',
      value       : this.record.get('team_id')
    };
    // FILTER (End)

    

    // FIELDSETS (Start) ====================================================================
    Ext.apply(this, {
      items        : [
        {
          xtype        : 'fieldset',
          title        : 'General Information',
          collapsible  : true,
          defaultType  : 'textfield',
          layout       : 'anchor',
          items        : [
    {
      xtype        : 'textfield',
      name         : 'teamable_id',
      fieldLabel   : me.teamable_idLabel,
      maxLength    : 32,
      minLength    : 0,
      allowBlank   : false
    },
    {
      xtype        : 'textfield',
      name         : 'teamable_type',
      fieldLabel   : me.teamable_typeLabel,
      maxLength    : 200,
      minLength    : 0,
      allowBlank   : false
    },
    {
      xtype        : 'textfield',
      name         : 'user_id',
      fieldLabel   : me.user_idLabel,
      maxLength    : 32,
      minLength    : 0,
      allowBlank   : false
    }
          ]
        }/*,
        {
          xtype        : 'fieldset',
          title        : 'Additional Information',
          collapsible  : true,
          defaultType  : 'textfield',
          layout       : 'anchor',
          items        : [
          ]
        }*/          
      ]
    });
    // FIELDSETS (End)


    // TITLES (Start) ======================================================================
    Ext.applyIf(this, {
      title       : 'Team',
      subtitle    : 'Edit Team'
    });
    // TITLES (End)

    this.callParent();
    
  }  // initComponent

}); // Ext.define('Desk.view.teams.Form'