/**
 * Created by Naizer on 30/03/2016.
 */
define([
  'jquery',
  'lodash',
  'backbone',
  'TweenMax',
  'owl',
  'text!templates/pages/clients.html'
], function($, _, Backbone, TweenMax, owl, tpl) {
  "use strict";

  return Backbone.View.extend({

    el: $("#clients"),
    template: _.template(tpl),
    events: {},

    initialize: function() {
      console.log(this.$el.attr("id") + ".initialize()");
    },

    render: function() {
      console.log(this.$el.attr("id") + ".render()");

      this.$el.css({ opacity: 0 });
      this.$el.html(this.template(tpl));

      //--
      var obj = this.$("#customer-list-owl");
      if (obj.length) {
        obj.owlCarousel({
          autoPlay: 3000, //Set AutoPlay to 3 seconds
          items: 6,
          itemsDesktop: [1199, 4],
          itemsDesktopSmall: [979, 4]
        });
      }

      return this.$el;
    },

    transitionIn: function() {
      console.log(this.$el.attr("id") + ".transitionIn()");
      TweenMax.to(this.$el, 1, { css: { opacity: 1 } });
    }
  });
});
