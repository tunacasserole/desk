Ext.define('Desk.view.cases.Explorer', {

  extend   : 'Buildit.ux.explorer.Panel',
  alias    : 'widget.desk-cases-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  contextMenuConfig : {
    xtype    : 'buildit-explorer-ContextMenu'
  },

  newForms : [{
    xtype    : 'desk-cases-Form'
  }],

  inspectorConfig : {
    xtype    : 'desk-cases-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  case_idLabel                            : Desk.i18n.model.Case.case_id,
  user_idLabel                            : Desk.i18n.model.Case.user_id,
  agent_idLabel                           : Desk.i18n.model.Case.agent_id,
  stateLabel                              : Desk.i18n.model.Case.state,
  summaryLabel                            : Desk.i18n.model.Case.summary,
  tagsLabel                               : Desk.i18n.model.Case.tags,
  descriptionLabel                        : Desk.i18n.model.Case.description,
  is_destroyedLabel                       : Desk.i18n.model.Case.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title    : 'Cases',
  subtitle : 'Create and maintain Cases',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store        : Ext.create('Desk.store.Case')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(me, {
      columns      : [
        {
          header       : me.user_idLabel,
          dataIndex    : 'user_id',
          flex         : 1
        },
        {
          header       : me.agent_idLabel,
          dataIndex    : 'agent_id',
          flex         : 1
        },
        {
          header       : me.stateLabel,
          dataIndex    : 'state',
          flex         : 1
        },
        {
          header       : me.summaryLabel,
          dataIndex    : 'summary',
          flex         : 1
        },
        {
          header       : me.tagsLabel,
          dataIndex    : 'tags',
          flex         : 1
        },
        {
          header       : me.descriptionLabel,
          dataIndex    : 'description',
          flex         : 1
        },
        {
          xtype        : 'checkcolumn',
          header       : me.is_destroyedLabel,
          dataIndex    : 'is_destroyed',
          flex         : 1
        }
      ]
    });
    // COLUMNS (End)


    me.callParent();
  }

});