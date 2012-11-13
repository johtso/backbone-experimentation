require.config({
  paths: {
    'jquery': '//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery',
    'pubnub': '//pubnub.a.ssl.fastly.net/pubnub-3.3',
    'underscore': '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.2/underscore-min',
    'handlebars': '//cdnjs.cloudflare.com/ajax/libs/handlebars.js/1.0.rc.1/handlebars.min',
    'backbone': '//cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.2/backbone-min',
    'backbone.nopersistence': 'lib/backbone/backbone.nopersistence',
    'backbone.localstorage': 'lib/backbone/backbone.localStorage',
    'text': 'lib/require/text'
  },
  shim: {
    underscore: {
      exports: '_',
      init: function () {
        _.templateSettings = {
          interpolate : /\{\{(.+?)\}\}/g
        };
      }
    },
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    },
    'backbone.nopersistence': {
      deps: ['backbone'],
      exports: 'bnp'
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

require(['jquery', 'views/app'], function ($, App) {
  $(function() {
    app = new App();
  });
});