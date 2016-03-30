/**
 * Created by Naizer on 30/03/2016.
 */
define([
    'jquery',
    'lodash',
    'backbone',
    'TweenMax',
    'bootstrap',
    'text!templates/pages/unbox.html'
], function ($, _, Backbone, TweenMax, Bootstrap, tpl) {
    "use strict";

    return Backbone.View.extend({

        el: $("#unbox"),
        template: _.template(tpl),
        events: {},

        initialize: function () {
            console.log(this.$el.attr("id") + ".initialize()");
        },

        render: function () {
            console.log(this.$el.attr("id") + ".render()");

            this.$el.css({opacity: 0});
            this.$el.html(this.template(tpl));
            this.transitionIn();

            return this.$el;
        },

        transitionIn: function () {
            console.log(this.$el.attr("id") + ".transitionIn()");

            this.$('#unbox-carousel').carousel({
                interval: 3000
            });
            TweenMax.to(this.$el, 1, {css: {opacity: 1}});
        }
    });
});
