define(['backbone', 'vent'], function(Backbone, vent) {
  'use strict';

  var Status = Backbone.Model.extend({
    defaults: {
      status: 'hello'
    },

    initialize: function () {
      vent.bindTo(vent, 'push:status', this.setStatus, this);
    },

    statuses: {
      'hello': 'okay',
      'connected': 'good',
      'disconnected': 'bad',
      'reconnected': 'good'
    },

    statusType: function () {
      return this.statuses[this.get('status')];
    },

    setStatus: function (status) {
      this.set('status', status);
    }
  });

  return Status;
});