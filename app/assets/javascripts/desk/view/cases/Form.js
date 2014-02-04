Ext.define('Desk.view.cases.Form', {

  extend   :'Buildit.ux.Form',
  alias    :'widget.desk-cases-Form',


  // LABELS (Start) =======================================================================
  case_idLabel                            : Desk.i18n.model.Case.case_id,
  user_idLabel                            : Desk.i18n.model.Case.user_id,
  agent_idLabel                           : Desk.i18n.model.Case.agent_id,
  stateLabel                              : Desk.i18n.model.Case.state,
  summaryLabel                            : Desk.i18n.model.Case.summary,
  tagsLabel                               : Desk.i18n.model.Case.tags,
  descriptionLabel                        : Desk.i18n.model.Case.description,
  is_destroyedLabel                       : Desk.i18n.model.Case.is_destroyed,
  // LABELS (End)


  initComponent:function () {

    var me = this;

    // FILTER (Start) =======================================================================
    var associativeFilter = {
      property    : 'case_id',
      value       : this.record.get('case_id')
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
              name         : 'user_id',
              fieldLabel   : me.user_idLabel,
              maxLength    : 32,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'agent_id',
              fieldLabel   : me.agent_idLabel,
              maxLength    : 32,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'textfield',
              name         : 'state',
              fieldLabel   : me.stateLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : false
            },
            {
              xtype        : 'textfield',
              name         : 'summary',
              fieldLabel   : me.summaryLabel,
              maxLength    : 100,
              minLength    : 0,
              allowBlank   : false
            },
            {
              xtype        : 'textfield',
              name         : 'tags',
              fieldLabel   : me.tagsLabel,
              maxLength    : 200,
              minLength    : 0,
              allowBlank   : false
            },
            {
              xtype        : 'textfield',
              name         : 'description',
              fieldLabel   : me.descriptionLabel,
              maxLength    : 500,
              minLength    : 0,
              allowBlank   : true
            },
            {
              xtype        : 'checkbox',
              name         : 'is_destroyed',
              fieldLabel   : me.is_destroyedLabel
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
      title       : 'Case',
      subtitle    : 'Edit Case'
    });
    // TITLES (End)

    this.callParent();
    
  }  // initComponent

}); // Ext.define('Desk.view.cases.Form'