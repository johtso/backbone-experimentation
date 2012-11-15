define([
  'backbone',
  'models/tick',
  'push/tickpush',
  'backbone.localstorage'
], function(Backbone, Tick, tickPush, BBLocalStorage) {
  'use strict';
  var TickCollection = Backbone.Collection.extend({
    model: Tick,
    localStorage: new BBLocalStorage.LocalStorage('ticks-backbone'),

    initialize: function () {
      tickPush.on('message', this.saveTick, this);
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

  return new TickCollection();
});