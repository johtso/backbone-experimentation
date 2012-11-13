define([
  'jquery',
  'underscore',
  'backbone',
  'pubnub',
  'views/ticks'
], function($, _, Backbone, pubnub, TicksView) {

  function displayTime(time) {
    var now = new Date().getTime() / 1000.0;
    TIME_DIFFERENCE = (Math.round((now - time) * 100)) / 100;
    t = _.template("Time difference: {{difference}} seconds.");
    $("#time").text(t({difference: TIME_DIFFERENCE}));
  }

  var initialize = function () {
    var ticksView = new TicksView();

    $.ajax({
      type: "GET",
      url: "/time",
      async: false
      }).done(function(resp) {
        var server_time = parseFloat(resp);
        displayTime(server_time);
    });

    pubnub.subscribe({
      subscribe_key: 'demo',
      channel: "golden_guava",
      restore: true,
      callback: function (message) {
        var msg = JSON.stringify(message);
        console.log(msg);
        ticksView.ticks.create(message);
      },

      disconnect: function () {
        var msg = "Disconnected";
        console.log(msg);
        $("#status").text(msg).attr("class", "bad");
      },

      reconnect: function () {
        var msg = "Reconnected";
        console.log(msg);
        $("#status").text(msg).attr("class", "good");
      },

      connect: function () {
        var msg = "Connected";
        console.log(msg);
        $("#status").text(msg).attr("class", "good");
      },

      error: function (error) {
        console.log(error);
      }
    });
  };

  return {
    init: initialize
  };
});