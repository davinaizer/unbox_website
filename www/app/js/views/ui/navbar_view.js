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
    'ScrollSpy',
    'text!templates/ui/navbar.html'
], function ($, _, Backbone, Bootstrap, TweenMax, ScrollToPlugin, ScrollSpy, tpl) {
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

            this.$('[id*=pages]');

            $("#pages div").scrollspy({
                min: 50,
                onEnter: function (element, position) {
                    //$("#nav").addClass('fixed');
                    console.log("ONENTER", element);
                },
                onLeave: function (element, position) {
                    //$("#nav").removeClass('fixed');
                    //console.log("ONLEAVE");
                }
            });

            /*
             $("body").scrollspy({
             target: "#navbar-top",
             offset: 50
             });

             $("#navbar-top").on("activate.bs.scrollspy", function () {
             var currentView = $(".nav li.active > a").attr("href");
             console.log("Scroll Change:", currentView);
             Backbone.history.navigate(currentView);
             });*/

            TweenMax.staggerFrom(this.$("li"), 1, {css: {x: "-=10", opacity: 0}}, 0.1);
        },

        clickHandler: function (e) {
            //if (!Backbone.history._hasPushState) {
            //    e.preventDefault();
            //}

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