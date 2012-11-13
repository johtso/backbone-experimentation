define([
  'jquery',
  'backbone',
  'handlebars',
  'text!templates/tick.handlebars'
], function ($, Backbone, Handlebars, tickTemplate) {
  var TickView = Backbone.View.extend({
    tagName: 'li',

    template: Handlebars.compile(tickTemplate),

    render: function () {
      this.$el.html( this.template( this.model.toJSON() ) );
      return this;
    }
  });

  return TickView;
});