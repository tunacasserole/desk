Ext.define('Infodesk.view.cases.Form', {

  extend   :'Buildit.ux.Form',
  alias    :'widget.infodesk-cases-Form',


  // LABELS (Start) =======================================================================
  case_idLabel                            : Infodesk.i18n.model.Case.case_id,
  user_idLabel                            : Infodesk.i18n.model.Case.user_id,
  agent_idLabel                           : Infodesk.i18n.model.Case.agent_id,
  stateLabel                              : Infodesk.i18n.model.Case.state,
  summaryLabel                            : Infodesk.i18n.model.Case.summary,
  tagsLabel                               : Infodesk.i18n.model.Case.tags,
  descriptionLabel                        : Infodesk.i18n.model.Case.description,
  is_destroyedLabel                       : Infodesk.i18n.model.Case.is_destroyed,
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
          /*
            {
              xtype        : 'buildit-Locator', 
              store        : Ext.create('MyApp.store.MyModel',{pageSize: 10}), 
              displayField : 'name', 
              queryField   : 'name', 
              valueField   : 'value_field', 
              itemTpl      :'{name}',
              name         : 'attribute_name', 
              fieldLabel   : this.attribute_nameLabel, 
              allowBlank   : true 
            }
          */

            {
              xtype        : 'textfield',
              name         : 'case_id',
              fieldLabel   : this.case_idLabel,
              allowBlank   : false
            },    
            {
              xtype        : 'textfield',
              name         : 'user_id',
              fieldLabel   : this.user_idLabel,
              allowBlank   : true
            },    
            {
              xtype        : 'textfield',
              name         : 'agent_id',
              fieldLabel   : this.agent_idLabel,
              allowBlank   : true
            },    
            {
              xtype        : 'textfield',
              name         : 'state',
              fieldLabel   : this.stateLabel,
              allowBlank   : false
            },    
            {
              xtype        : 'textfield',
              name         : 'summary',
              fieldLabel   : this.summaryLabel,
              allowBlank   : false
            },    
            {
              xtype        : 'textfield',
              name         : 'tags',
              fieldLabel   : this.tagsLabel,
              allowBlank   : false
            },    
            {
              xtype        : 'textfield',
              name         : 'description',
              fieldLabel   : this.descriptionLabel,
              allowBlank   : true
            },    
            {
              xtype        : 'textfield',
              name         : 'is_destroyed',
              fieldLabel   : this.is_destroyedLabel,
              allowBlank   : true
            }    
          ]
        }
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

}); // Ext.define('Infodesk.view.cases.Form'