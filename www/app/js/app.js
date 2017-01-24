/**
 * Created by davinaizer on 10/3/15.
 */
define([
  'jquery',
  'backbone',
  'router'
], function($, Backbone, Router) {
  "use strict";

  return Backbone.View.extend({

    initialize: function() {
      console.log("App.init");

      var baseFolder = window.location.pathname.replace('/', '').split('/')[0];
      console.log("App.baseFolder:", baseFolder);

      var router = new Router();
      router.renderAll();

      Backbone.history.start({
        pushState: false,
        root: baseFolder
      });

    }
  });
});
