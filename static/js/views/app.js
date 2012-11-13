define([
  'jquery',
  'backbone',
  'handlebars',
  'views/tick',
  'views/status',
  'push/tickpush',
  'collections/ticks'
], function ($, Backbone, Handlebars, TickView, StatusView, tickPush, Ticks) {
  var AppView = Backbone.View.extend({
    el: $('#app'),

    events: {
      'click #clear': 'clear'
    },

    initialize: function () {
      this.$tickList = $('#tick-list');
      this.status = new StatusView();

      tickPush.on('status', this.statusChange, this);

      Ticks.on('add', this.addOne, this);
      Ticks.on('reset', this.addAll, this);

      Ticks.fetch();
    },

    clear: function () {
      while (Ticks.length > 0) {
        Ticks.models[0].destroy();
      }
      this.addAll();
    },

    addOne: function (tick) {
      var view = new TickView({model: tick});
      this.$tickList.prepend(view.render().el);
    },

    addAll: function () {
      this.$tickList.html('');
      Ticks.each(this.addOne, this);
    },

    statusChange: function (status) {
      this.status.model.set('status', status);
    }
  });

  return AppView;
});