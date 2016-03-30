require.config({
    paths: {
        backbone: 'libs/backbone-min',
        jquery: 'libs/jquery.min',
        lodash: 'libs/lodash.min',
        text: 'libs/text',
        bootstrap: 'libs/bootstrap.min',
        TweenMax: "libs/TweenMax.min",
        ScrollToPlugin: "libs/ScrollToPlugin.min",
        owl: 'libs/owl.carousel.min',
        templates: '../templates'
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
        'TweenMax': {
            deps: ['ScrollToPlugin']
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
], function (App) {
    "use strict";

    new App({el: "#main-container"});
});