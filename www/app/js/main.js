require.config({
  paths: {
    backbone: '/node_modules/backbone/backbone-min',
    bootstrap: '/node_modules/bootstrap/dist/js/bootstrap.min',
    jquery: '/node_modules/jquery/dist/jquery.min',
    lodash: '/node_modules/lodash/lodash.min',
    owl: '/node_modules/owl.carousel/dist/owl.carousel.min',
    ScrollToPlugin: '/node_modules/gsap/src/minified/plugins/ScrollToPlugin.min',
    templates: '../templates',
    text: '/node_modules/requirejs-text/text',
    TweenMax: '/node_modules/gsap/src/minified/TweenMax.min'
  },
  shim: {
    'lodash': {
      exports: '_'
    },
    'bootstrap': {
      deps: ['jquery']
    },
    'owl': {
      deps: ['jquery']
    },
    'ScrollToPlugin': {
      deps: ['TweenMax']
    }
  },
  map: {
    '*': {
      'underscore': 'lodash'
    }
  }
});

require([
  'app'
], function(App) {
  'use strict';

  new App({ el: '#main-container' });
});
