require.config({
    paths: {
        backbone: 'libs/backbone-min',
        jquery: 'libs/jquery.min',
        lodash: 'libs/lodash.min',
        text: 'libs/text',
        bootstrap: 'libs/bootstrap.min',
        TweenMax: "libs/TweenMax.min",
        templates: '../templates'
    },
    shim: {
        'lodash': {
            exports: '_'
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'slidebars': {}
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

    var app = new App({el: "#main-container"});
    app.initialize();
});