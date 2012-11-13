define([
  'backbone',
  'models/tick',
  'push/tickpush',
  'backbone.localstorage'
], function(Backbone, Tick, tickPush, BBLocalStorage) {
  var TickCollection = Backbone.Collection.extend({
    model: Tick,
    localStorage: new BBLocalStorage.LocalStorage('ticks-backbone'),

    initialize: function () {
      tickPush.on('message', this.create, this);
    }
  });

  return new TickCollection();
});