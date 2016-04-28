/**
 * Created by Naizer on 29/03/2016.
 */
define([
    'jquery',
    'lodash',
    'backbone',
    'TweenMax',
    'views/ui/navbar_view',
    'views/pages/home_view',
    'views/pages/unbox_view',
    'views/pages/solutions_view',
    'views/pages/projects_view',
    'views/pages/clients_view',
    'views/pages/contact_view',
    'views/pages/footer_view'

], function ($, _, Backbone, TweenMax, NavbarView, HomeView, UnboxView, SolutionsView, ProjectsView, ClientsView, ContactView, FooterView) {

    return Backbone.Router.extend({

        routes: {
            ':page(/:id)': 'scrollTo'
        },

        initialize: function () {
            console.log("Router.initialize");

            _.bindAll(this, 'scrollTo', 'checkUrlHash', 'openSubPage');

            this.views = {
                "navbar": new NavbarView(),
                "home": new HomeView(),
                "unbox": new UnboxView(),
                "solutions": new SolutionsView(),
                "projects": new ProjectsView(),
                "clients": new ClientsView(),
                "contact": new ContactView(),
                "footer": new FooterView()
            };

            this.isTweening = false;
            this.currentRoute = "";

            $("body").on('activate.bs.scrollspy', $.proxy(this.checkUrlHash, this));
        },

        renderAll: function () {
            console.log("Router.renderAll");

            _.forEach(this.views, function (view) {
                view.render();
            });

            // block default anchor event
            var that = this;
            $("a[href^='#']").on('click', function (e) {
                e.preventDefault();

                var url = $(this).attr("href");
                Backbone.history.navigate(url, {trigger: true});
            });
        },

        scrollTo: function (page, id) {
            console.log("Router.scrollTo:", page, ":", id);

            if (page != undefined && page.length > 0) {
                if (this.currentRoute != page) {

                    var $anchor = $("#" + page);
                    this.isTweening = true;

                    TweenMax.to(window, 1.5, {
                        scrollTo: {y: $anchor.offset().top},
                        ease: Power3.easeInOut,
                        onAutoKill: this.onAutoKill,
                        onComplete: this.onCompleteScroll,
                        onCompleteScope: this,
                        onCompleteParams: [page, id]
                    });
                } else {
                    if (id != undefined && id.length > 0) {
                        this.openSubPage(page, id);
                    }
                }
            }
        },

        onAutoKill: function () {
            this.isTweening = false;
        },

        checkUrlHash: function () {
            if (!this.isTweening) {
                var currentSection = $(".nav li.active > a").attr("href");
                Backbone.history.navigate(currentSection, {trigger: false});
                this.currentRoute = Backbone.history.getFragment();
            }
        },

        onCompleteScroll: function (options) {
            console.log("onCompleteScroll.options:", options);
            this.isTweening = false;
            this.currentRoute = Backbone.history.getFragment();
        },

        openSubPage: function (page, id) {
            console.log("Router.openSubPage:", page, "(" + id + ")");

            if (page === "projects") {
                $("#portfolioModal" + id).modal('show');
            }
        }
    });
});