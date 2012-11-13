define(['backbone'], function(Backbone) {
  var Tick = Backbone.Model.extend({
    defaults: {
      count: 0,
      time: 0
    }
  });

  return Tick;
});