({
  appDir: './app',
  baseUrl: 'js',
  dir: './dist',
  optimize: "uglify2",
  optimizeCss: 'standard',
  removeCombined: true,
  preserveLicenseComments: false,
  paths: {
    backbone: '../../node_modules/backbone/backbone-min',
    bootstrap: '../../node_modules/bootstrap/dist/js/bootstrap.min',
    jquery: '../../node_modules/jquery/dist/jquery.min',
    lodash: '../../node_modules/lodash/lodash.min',
    owl: '../../node_modules/owl.carousel/dist/owl.carousel.min',
    templates: '../templates',
    text: '../../node_modules/requirejs-text/text',
    TweenLite: '../../node_modules/gsap/src/minified/TweenLite.min',
    TweenMax: '../../node_modules/gsap/src/minified/TweenMax.min',
    ScrollToPlugin: '../../node_modules/gsap/src/minified/plugins/ScrollToPlugin.min'
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
  },
  modules: [{
    name: 'main',
    include: []
  }]
})
