Ext.define('Infodesk.model.Case', {
  extend     : 'Ext.data.Model',

  fields     : [
    {
      name       : 'case_id',
      type       : 'string'
    },
    {
      name       : 'user_id',
      type       : 'string'
    },
    {
      name       : 'agent_id',
      type       : 'string'
    },
    {
      name       : 'state',
      type       : 'string'
    },
    {
      name       : 'summary',
      type       : 'string'
    },
    {
      name       : 'tags',
      type       : 'string'
    },
    {
      name       : 'description',
      type       : 'string'
    },
    {
      name       : 'is_destroyed',
      type       : 'boolean'
    }

  ],

  idProperty : 'case_id',

  proxy      : {
    type       : 'direct',
    api        : {
      create     : Infodesk.service.Case.create,
      read       : Infodesk.service.Case.read,
      update     : Infodesk.service.Case.update,
      destroy    : Infodesk.service.Case.destroy
    },
    reader     : {
      type       : 'json',
      root       : 'records',
      totalProperty  : 'total',
      successProperty: 'success'
    }
  },


  validations: [

  ]

}); // Ext.define('Infodesk.model.Case'