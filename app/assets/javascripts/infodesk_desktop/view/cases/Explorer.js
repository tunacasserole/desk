Ext.define('Infodesk.view.cases.Explorer', {

  extend   : 'Buildit.ux.explorer.Panel',
  alias    : 'widget.infodesk-cases-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  contextMenuConfig : {
    xtype    : 'infodesk-cases-ExplorerContextMenu'
  },

  newForms : [{
    xtype    : 'infodesk-cases-Form'
  }],

  inspectorConfig : {
    xtype    : 'infodesk-cases-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  case_idLabel                            : Infodesk.i18n.model.Case.case_id,
  user_idLabel                            : Infodesk.i18n.model.Case.user_id,
  agent_idLabel                           : Infodesk.i18n.model.Case.agent_id,
  stateLabel                              : Infodesk.i18n.model.Case.state,
  summaryLabel                            : Infodesk.i18n.model.Case.summary,
  tagsLabel                               : Infodesk.i18n.model.Case.tags,
  descriptionLabel                        : Infodesk.i18n.model.Case.description,
  is_destroyedLabel                       : Infodesk.i18n.model.Case.is_destroyed,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title    : 'Cases',
  subtitle : 'Create and maintain Cases',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // CONFIG (Start) ======================================================================
    Ext.apply(me, {
      store        : Ext.create('Infodesk.store.Case')
    });
    // CONFIG (End)

    // COLUMNS (Start) =====================================================================
    Ext.apply(me, {
      columns      : [
        {
          header       : me.case_idLabel,
          dataIndex    : 'case_id',
          flex         : 1
        },
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