define([
  'jquery',
  'backbone',
  'handlebars',
  'models/status',
  'text!templates/status.handlebars'
], function ($, Backbone, Handlebars, Status, statusTemplate) {
  'use strict';
  var StatusView = Backbone.View.extend({
    el: $("#status"),
    model: new Status(),
    template: Handlebars.compile(statusTemplate),

    initialize: function () {
      this.model.on('change', this.render, this);
    },

    render: function () {
      var data = this.model.toJSON();
      data.type = this.model.statuses[data.status];
      this.$el.html( this.template( data ) );
      return this;
    }
  });

  return StatusView;
});