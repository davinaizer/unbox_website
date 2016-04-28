/**
 * Created by Naizer on 30/03/2016.
 */
define([
    'jquery',
    'lodash',
    'backbone',
    'bootstrap',
    'TweenMax',
    'ScrollToPlugin',
    'text!templates/ui/navbar.html'
], function ($, _, Backbone, Bootstrap, TweenMax, ScrollToPlugin, tpl) {
    "use strict";

    return Backbone.View.extend({

        el: $("#navbar"),
        template: _.template(tpl),
        events: {
            "click a": "clickHandler"
        },

        initialize: function () {
            console.log(this.$el.attr("id") + ".initialize()");

            _.bindAll(this, 'scrollHandler');
            $(window).scroll(_.throttle(this.scrollHandler, 300));
            this.showBg = false;
        },

        render: function () {
            console.log(this.$el.attr("id") + ".render()");

            this.$el.html(this.template(tpl));
            this.transitionIn();
        },

        transitionIn: function () {
            console.log(this.$el.attr("id") + ".transitionIn()");

            $("body").scrollspy({
                target: ".navbar",
                offset: 100
            });

            TweenMax.staggerFrom(this.$("li"), 1, {css: {x: "-=10", opacity: 0}}, 0.1);
        },

        clickHandler: function (e) {
            this.$('.navbar-toggle:visible').click();
        },

        scrollHandler: function () {
            var sepTopOffset = $('#top-separator').offset().top;
            var navbarTop = this.$('#navbar-top');

            this.showBg = (sepTopOffset - $(window).scrollTop() <= 0);

            if (this.showBg) {
                navbarTop.removeClass('navbar-bg');
                navbarTop.addClass('navbar-hidden');
            } else {
                navbarTop.addClass('navbar-bg');
                navbarTop.removeClass('navbar-hidden');
            }
        }
    });
});