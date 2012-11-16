require.config({
  paths: {
    'jquery': 'lib/jquery/jquery',
    'pubnub': 'lib/pubnub/pubnub',
    'underscore': 'lib/underscore/underscore',
    'backbone': 'lib/backbone/backbone',
    'backbone.localstorage': 'lib/backbone/backbone.localStorage',
    'marionette': 'lib/backbone/backbone.marionette',

    'hbs': 'hbs',
    'handlebars': '../Handlebars',
    'i18nprecompile': 'hbs/i18nprecompile',
    'json2': 'hbs/json2'
  },

  hbs: {
    disableI18n: true
  },

  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    },
    'backbone.localstorage': {
      deps: ['backbone'],
      exports: 'Backbone'
    },
    handlebars: {
        exports: 'Handlebars'
    },
    pubnub: {
      exports: "PUBNUB",
      init: function () {
        var pubnub = this.PUBNUB.init({
          publish_key: 'demo',
          subscribe_key: 'demo',
          origin: 'pubsub.pubnub.com'
        });
        pubnub.ready();
        return pubnub;
      }
    }
  }
});

require(['jquery', 'app'], function ($, app) {
  'use strict';

  $(function() {
    app.start();
  });
});