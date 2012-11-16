define(['vent', 'pubnub'], function (vent, pubnub) {
  'use strict';

  var Push = function (channel) {
    this.channel = channel;

    pubnub.subscribe({
      channel: channel,
      restore: true,
      callback: function (payload) {
        vent.trigger('push:message', payload);
      },
      disconnect: function () {
        vent.trigger('push:status', 'disconnected');
      },
      reconnect: function () {
        vent.trigger('push:status', 'reconnected');
      },
      connect: function () {
        vent.trigger('push:status', 'connected');
      }
    });
  };

  return Push;
});