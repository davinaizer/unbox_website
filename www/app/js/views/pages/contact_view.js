/**
 * Created by Naizer on 30/03/2016.
 */
define([
  'jquery',
  'lodash',
  'backbone',
  'TweenMax',
  'text!templates/pages/contact.html'
], function($, _, Backbone, TweenMax, tpl) {
  "use strict";

  return Backbone.View.extend({

    el: $("#contact"),
    template: _.template(tpl),
    events: {},

    initialize: function() {
      console.log(this.$el.attr("id") + ".initialize()");
    },

    render: function() {
      console.log(this.$el.attr("id") + ".render()");

      this.$el.css({ opacity: 0 });
      this.$el.html(this.template(tpl));

      return this.$el;
    },

    transitionIn: function() {
      console.log(this.$el.attr("id") + ".transitionIn()");
      TweenMax.to(this.$el, 1, { css: { opacity: 1 } });
    }
  });
});
