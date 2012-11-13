define(['backbone'], function(Backbone) {
  var Status = Backbone.Model.extend({
    defaults: {
      status: 'hello'
    },

    statuses: {
      'hello': 'okay',
      'connected': 'good',
      'disconnected': 'bad',
      'reconnected': 'good'
    }
  });

  return Status;
});