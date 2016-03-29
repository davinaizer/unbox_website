/**
 * Created by davinaizer on 10/3/15.
 */
define([
    'jquery',
    'backbone',
    'router'
], function ($, Backbone, Router) {
    "use strict";

    var App = Backbone.View.extend({

        initialize: function () {
            console.log("App.init");

            Router.initialize();
        }

    });

    return App;
});