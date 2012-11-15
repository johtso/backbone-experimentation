define(['backbone'], function(Backbone) {
  'use strict';
  var Tick = Backbone.Model.extend({
    defaults: {
      count: 0,
      timeSent: 0,
      timeReceived: 0
    }
  });

  return Tick;
});