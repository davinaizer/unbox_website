/**
 * Created by Naizer on 30/03/2016.
 */
define([
  'jquery',
  'lodash',
  'backbone',
  'TweenMax',
  'bootstrap',
  'text!templates/pages/projects.html'
], function($, _, Backbone, TweenMax, Boostrap, tpl) {
  "use strict";

  return Backbone.View.extend({

    el: $("#projects"),
    template: _.template(tpl),
    events: {},

    initialize: function() {
      console.log(this.$el.attr("id") + ".initialize()");
    },

    render: function() {
      console.log(this.$el.attr("id") + ".render()");

      this.$el.css({ opacity: 0 });
      this.$el.html(this.template(tpl));

      this.$('.carousel').carousel({
        interval: 3000
      });

      var that = this;
      this.$('.modal').on('show.bs.modal', function(el) {
        that.$('.carousel').carousel(0);
      });

      return this.$el;
    },

    transitionIn: function() {
      console.log(this.$el.attr("id") + ".transitionIn()");
      TweenMax.to(this.$el, 1, { css: { opacity: 1 } });
    }
  });
});
