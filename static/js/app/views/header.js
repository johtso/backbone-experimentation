define([
  'backbone',
  'marionette',
  'vent',
  'views/status',
  'views/tickcount',
  'hbs!templates/header'
], function (Backbone, Marionette, vent, StatusView, TickCount, headerTemplate) {
  'use strict';

  var HeaderView = Backbone.Marionette.Layout.extend({
    template: headerTemplate,

    regions: {
      pushStatus: '#push-status',
      tickCount: '#tick-count'
    },

    onRender: function () {
      this.pushStatus.show(new StatusView());
      this.tickCount.show(new TickCount({collection: this.collection}));
    }
  });

  return HeaderView;
});

