/**
 * Created by davinaizer on 10/3/15.
 */
define([
    'jquery',
    'backbone',
    'router'
], function ($, Backbone, Router) {
    "use strict";

    return Backbone.View.extend({

        initialize: function () {
            console.log("App.init");

            var router = new Router();
            router.renderAll();

            Backbone.history.start({pushState: true});
        }
    });
});