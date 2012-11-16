define([
  'marionette',
  'views/tick',
  'hbs!templates/ticks'
], function (Marionette, TickView, ticksTemplate) {
  'use strict';

  var TicksView =  Marionette.CompositeView.extend({
    template: ticksTemplate,
    itemView: TickView,
    itemViewContainer: '#tick-list',

    events: {
      'click #clear': 'onClearClick'
    },

    appendHtml: function (collectionView, itemView) {
      var $container = this.getItemViewContainer(collectionView);
      $container.prepend(itemView.el);
    },

    onClearClick: function () {
      while (this.collection.length > 0) {
        this.collection.models[0].destroy();
      }
    }
  });

  return TicksView;
});