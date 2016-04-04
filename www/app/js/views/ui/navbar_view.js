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

            $("body").scrollspy({
                target: "#navbar-top",
                offset: 50
            });

            //recalculate every onResize event
            /*
             $("#pages>div").each(function (i) {
             var position = $(this).position();
             $(this).scrollspy({
             min: position.top,
             max: position.top + $(this).height(),
             onEnter: function (el, pos) {
             var id = $(el).attr("id");
             console.log("ONENTER", id);
             Backbone.history.navigate(id);
             }
             });
             });
             */


            //$("#navbar-top").on("activate.bs.scrollspy", function () {
            //    var currentView = $(".nav li.active > a").attr("href");
            //});

            TweenMax.staggerFrom(this.$("li"), 1, {css: {x: "-=10", opacity: 0}}, 0.1);
        },

        clickHandler: function (e) {
            //if (!Backbone.history._hasPushState) {
            //    e.preventDefault();
            //}

            this.$('.navbar-toggle:visible').click();
        },

        // change - use scrollspy instead
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