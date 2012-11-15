define([
  'underscore',
  'backbone',
  'pubnub'
], function (_, Backbone, pubnub) {
  'use strict';
  var Push = function (channel) {
    this.channel = channel;

    this.callback = function (payload) {
      this.trigger('message', payload);
    };
    this.disconnect = function () {
      this.trigger('status', 'disconnected');
    };
    this.reconnect = function () {
      this.trigger('status', 'reconnected');
    };
    this.connect = function () {
      this.trigger('status', 'connected');
    };

    _.bindAll(this);

    pubnub.subscribe({
      channel: channel,
      restore: true,
      callback: this.callback,
      disconnect: this.disconnect,
      reconnect: this.reconnect,
      connect: this.connect
    });

    _.extend(this, Backbone.Events);
  };

  return Push;
});