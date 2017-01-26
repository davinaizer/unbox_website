/**
 * Created by davinaizer on 10/3/15.
 */
define([
  'lodash',
  'jquery',
  'backbone',
  'router'
], function(_, $, Backbone, Router) {
  "use strict";

  return Backbone.View.extend({

    initialize: function() {
      console.log("App.init");

      var router = new Router();
      router.renderAll();
    }
  });
});
