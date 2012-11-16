define([
  'backbone',
  'marionette',
  'collections/ticks',
  'views/header',
  'views/ticks'
], function (Backbone, Marionette, Ticks, HeaderView, TicksView) {
    'use strict';

    var app = new Backbone.Marionette.Application();
    var ticks = new Ticks();

    app.addRegions({
      header: '#header',
      main: '#main'
    });

    app.addInitializer(function () {

      var viewOptions = {
        collection: ticks
      };

      app.header.show(new HeaderView(viewOptions));
      app.main.show(new TicksView(viewOptions));

      ticks.fetch();
    });

    return app;
  }
);