define([
  'marionette',
  'hbs!templates/tick'
], function (Marionette, tickTemplate) {
  'use strict';

  var TickView = Marionette.ItemView.extend({
    tagName: 'li',
    template: tickTemplate,

    serializeData: function () {
      var diff = this.model.get('timeReceived') - this.model.get('timeSent');
      diff = diff.toFixed(2);

      return {
        count: this.model.get('count'),
        seconds: diff
      };
    }
  });

  return TickView;
});