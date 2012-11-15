define([
  'jquery',
  'backbone',
  'handlebars',
  'text!templates/tick.handlebars'
], function ($, Backbone, Handlebars, tickTemplate) {
  'use strict';
  var TickView = Backbone.View.extend({
    tagName: 'li',

    template: Handlebars.compile(tickTemplate),

    render: function () {
      var diff = this.model.get('timeReceived') - this.model.get('timeSent');
      diff = diff.toFixed(2);

      this.$el.html(
        this.template({
          count: this.model.get('count'),
          seconds: diff
        })
      );
      return this;
    }
  });

  return TickView;
});