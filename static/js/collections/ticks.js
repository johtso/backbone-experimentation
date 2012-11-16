define([
  'backbone',
  'vent',
  'models/tick',
  'push/tickpush',
  'backbone.localstorage'
], function(Backbone, vent, Tick, tickPush) {
  'use strict';

  var TickCollection = Backbone.Collection.extend({
    model: Tick,
    localStorage: new Backbone.LocalStorage('ticks-backbone'),

    initialize: function () {
      vent.bindTo(vent, 'push:message', this.saveTick, this);
    },

    saveTick: function (payload) {
      var now = Date.now() / 1000;
      this.create({
        count: payload.count,
        timeSent: payload.time,
        timeReceived: now
      });
    }
  });

  return TickCollection;
});