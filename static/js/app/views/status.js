define([
  'marionette',
  'vent',
  'models/status',
  'hbs!templates/status'
], function (Marionette, vent, Status, statusTemplate) {
  'use strict';

  var StatusView = Marionette.ItemView.extend({
    tagName: 'span',
    model: new Status(),
    template: statusTemplate,

    initialize: function () {
      this.bindTo(this.model, 'change', this.render);
    },

    serializeData: function () {
      return {
        status: this.model.get('status'),
        type: this.model.statusType()
      };
    }
  });

  return StatusView;
});