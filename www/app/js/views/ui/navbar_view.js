/**
 * Created by Naizer on 30/03/2016.
 */
define([
    'jquery',
    'lodash',
    'backbone',
    'TweenMax',
    'text!templates/ui/navbar.html'
], function ($, _, Backbone, TweenMax, tpl) {
    "use strict";

    return Backbone.View.extend({

        el: $("#navbar"),
        template: _.template(tpl),

        events: {
            "click .page-scroll": "clickHandler"
        },

        initialize: function () {
            console.log(this.$el.attr("id") + ".initialize()");

            _.bindAll(this, 'scrollHandler');
            $(window).scroll(this.scrollHandler);

            this.showBg = false;
        },

        render: function () {
            console.log(this.$el.attr("id") + ".render()");

            this.$el.html(this.template(tpl));
            this.transitionIn();
        },

        transitionIn: function () {
            console.log(this.$el.attr("id") + ".transitionIn()");
            TweenMax.staggerFrom(this.$("li"), 1, {css: {x: "-=5", opacity: 0}}, 0.1);
        },

        clickHandler: function (e) {
            //console.log(this.$el.attr("id") + ".navHandler()");
            this.$('.navbar-toggle:visible').click();

            //var href = $(e.currentTarget).attr("href");
            //Backbone.history.navigate(href, {trigger: true});
            //e.preventDefault();
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