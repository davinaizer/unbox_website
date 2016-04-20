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
            ':id': 'scrollTo',
            ':id/:itemId': 'openSubPage'
        },

        initialize: function () {
            console.log("Router.initialize");

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
        },

        renderAll: function () {
            console.log("Router.renderAll");

            _.forEach(this.views, function (view) {
                view.render();
            });

            // block default anchor event
            var that = this;
            $("a[href^='#']").on('click', function (e) {
                var url = $(this).attr("href");
                e.preventDefault();
                that.scrollTo(url);
                //Backbone.history.navigate(url);
            });
        },

        scrollTo: function (id) {
            console.log("Router.scrollTo:", id);

            var $anchor = $(id);
            if ($anchor.length > 0) {
                TweenMax.to(window, 1.5, {
                    scrollTo: {y: $anchor.offset().top},
                    ease: Power3.easeInOut
                });
            }
        },

        openSubPage: function (id, itemId) {
            console.log("Router.openSubPage:", id, "(" + itemId + ")");

            this.scrollTo(id);

            if (id === "projects") {
                $("#portfolioModal" + itemId).modal('show');
            }
        }
    });
});