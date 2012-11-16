require.config({
  paths: {
    'jquery': '//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery',
    'pubnub': '//pubnub.a.ssl.fastly.net/pubnub-3.3',
    'underscore': '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.2/underscore-min',
    'handlebars': '//cdnjs.cloudflare.com/ajax/libs/handlebars.js/1.0.rc.1/handlebars.min',
    'backbone': '//cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.2/backbone-min',
    'backbone.localstorage': 'lib/backbone/backbone.localStorage',
    'marionette': 'lib/backbone/backbone.marionette',

    'hbs': 'lib/require/hbs',
    'i18nprecompile': 'lib/require/hbs/i18nprecompile',
    'json2': 'lib/require/hbs/json2'
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